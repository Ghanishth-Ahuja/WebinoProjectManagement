// @ts-nocheck
import crypto from "crypto"
import prisma from "../dbcon/dbConnection.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import sendEmail from "../utils/sendEmail.js";
import { HOST_NAME } from "../constants.js";
import { invitationEmailHtml } from "../emailHtml/emailHtml.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs"

/**
 * @type {import("express").RequestHandler}
 */
// POST /api/projects
export const createProject = async (req, res) => {
  const { title, memberEmails } = req.body;

  const existingUsers = await prisma.user.findMany({
    where: { email: { in: memberEmails } }
  });
  //get existing emails
  const existingEmails = existingUsers.map(u => u.email);
  //get new emails
  if(existingUsers.some(user=>user.id === req.user.id)){
    throw new ApiError(400, "You will be automatially added to the project as ADMIN, remove your email from members list");
  }
  const newEmails = memberEmails.filter(e => !existingEmails.includes(e));
  const project = await prisma.projects.create({
    data: {
      creatorId: req.user.id,
      title,
      // Add existing users into the table ProjectMembers from here only, it'll automatically add projectId to it
      projectmembers: {
        create: existingUsers.map(u => ({
          userId: u.id,
          role: 'MEMBER'
        }))
      }, lists: {
        create: [
          { title: 'To Do', position: 0, color: '#3b82f6' },
          { title: 'In Progress', position: 1, color: '#f59e0b' },
          { title: 'Review', position: 2, color: '#8b5cf6' },
          { title: 'Done', position: 3, color: '#10b981' }
        ]
      }
    }
  });
  //create the admin user
  await prisma.projects.update({ where: { id: project.id }, data: { projectmembers: { create: { userId: req.user.id, role: "ADMIN" } } } });
  // Send invitations to non-registered
  for (const email of newEmails) {
    const token = crypto.randomBytes(32).toString("hex");
    const invitation = await prisma.projectInvitation.create({
      data: {
        invitedBy: req.user.id,
        email,
        projectId: project.id,
        token,
        expiresAt: new Date(Date.now() + (7 * 24 * 60 * 60 * 1000))
      }
    })
    const emaildone = await sendEmail({
      receicerEmail: email,
      name: "User",
      subject: "Project Invitation",
      htmlContent: invitationEmailHtml(`${HOST_NAME}/signup?invitationLink=${token}`, project.title)
    })
  }

  return res.status(200).json(new ApiResponse(200, "Project created successfully", project));
}
export const validateInvitationToken = async (req, res) => {
  //above controller's token is used here to chekc for its credibility
  const { token } = req.params;
  const invitation = await prisma.projectInvitation.findUnique({
    where: { token },
    include: { project: true }
  });
  if (!invitation || invitation.expiresAt < new Date()) {
    throw new ApiError(400, "Invalid or expired invitation");
  }

  const user = await prisma.user.findUnique({
    where: { email: invitation.email }
  });

  return res.status(200).json(new ApiResponse(200, "Invitation accepted", { projectTitle: invitation.project.title, email: invitation.email }));

  // return res.json({ success: true, message: "Invitation accepted" });
}
export const addProjectMember = async (req, res) => {
  const { projectId } = req.params;
  const { email } = req.body;
  if (!projectId || !email) {
    throw new ApiError(400, "Project ID and Email are required");
  }
  const project = await prisma.projects.findUnique({
    where: { id: projectId }
  });
  if (!project) {
    throw new ApiError(404, "Project not found");
  }
  const user = await prisma.user.findUnique({
    where: { email }
  });
  if (user) {

    const projectMember = await prisma.projectMembers.create({
      data: {
        projectId,
        userId: user.id,
        role: 'MEMBER'
      }
    });
    return res.status(200).json(new ApiResponse(200, "Project member added successfully", projectMember));
  }
  if (!user) {
    const token = crypto.randomBytes(32).toString("hex");
    //send invitation if not a user
    const invitation = await prisma.projectInvitation.create({
      data: {
        invitedBy: req.user.id,
        email: email,
        projectId: project.id,
        token,
        expiresAt: new Date(Date.now() + (7 * 24 * 60 * 60 * 1000))
      }
    })
    //send email to user
    const emaildone = await sendEmail({
      receicerEmail: email,
      name: "User",
      subject: "Project Invitation",
      htmlContent: invitationEmailHtml(`${HOST_NAME}/signup?invitationLink=${token}`, project.title)
    })
    return res.status(200).json(new ApiResponse(200, "Invitation sent successfully, User will be added automatically when they sign up", invitation));
  }

}
export const getProjectsByUserId = async (req, res) => {
  const projects = await prisma.projects.findMany({
    where: { projectmembers: { some: { userId: req.user.id } } },
    include: { projectmembers: true }
  });
  return res.status(200).json(new ApiResponse(200, "Projects fetched successfully", projects));
}

export const getProjectByProjectId = async (req, res) => {
  const { projectId } = req.params;
  if (!projectId) {
    throw new ApiError(400, "Project ID is required");
  }
  const project = await prisma.projects.findUnique({
    where: { id: projectId },
    include: {
      projectmembers: {
        include: {
          user: {
            select: {
              createdAt: true,
              name: true,
              email: true,
              role: true
            }
          }
        }
      },
      invitations:{
        include:true
        
      }
    }
  });
  if (!project) {
    throw new ApiError(404, "Project not found");
  }
  return res.status(200).json(new ApiResponse(200, "Project fetched successfully", project));
}
export const deleteProjectById = async (req, res) => {
  const { projectId } = req.body;
  if (!projectId) {
    throw new ApiError(400, "Project ID is required");
  }
  const project = await prisma.projects.delete({
    where: { id: projectId }
  });
  if (!project) {
    throw new ApiError(404, "Project not found");
  }
  return res.status(200).json(new ApiResponse(200, "Project deleted successfully", project));
}
export const deleteProjectMember = async(req,res)=>
{
  const { projectId } = req.params;
  const { userId } = req.body;
  if (!projectId || !userId) {
    throw new ApiError(400, "Project ID and User ID are required");
  }
  const projectMember = await prisma.projectMembers.delete({
    where: { projectId_userId: { projectId, userId } }
  });
  if (!projectMember) {
    throw new ApiError(404, "Project member not found");
  }
  return res.status(200).json(new ApiResponse(200, "Project member deleted successfully", projectMember));
}
export const getProjectMembersByProjectId = async (req, res) => {
  const { projectId } = req.params;
  if (!projectId) {
    throw new ApiError(400, "Project ID is required");
  }
  const projectMembers = await prisma.projectmembers.findMany({
    where: { projectId: projectId },
    include: { user: true }
  });
  if (!projectMembers) {
    throw new ApiError(404, "Project members not found");
  }
  return res.status(200).json(new ApiResponse(200, "Project members fetched successfully", projectMembers));
}
/**
 * @type {import("express").RequestHandler}
 */
// POST /api/projects
export const assignNewTaskToUser = async (req, res) => {
  const { projectId, userId, priority,title, description,deadline } = req.body;
  const toDoList = await prisma.list.findFirst({
    where: { projectId }
  });
  const task = await prisma.tasks.create({
    data: {
      priority: priority,
      title: title,
      description: description,
      deadline: deadline,
      listId: toDoList.id,
      projectId: projectId,
      assigneeId: userId,
    }
  });
  if (!task) {
    throw new ApiError(404, "Task not created");
  }
  return res.status(200).json(new ApiResponse(200, "Task created successfully", task));
}
export const getAllTasksByProjectId = async (req, res) => {
  const { projectId } = req.params;
  if (!projectId) {
    throw new ApiError(400, "Project ID is required");
  }
  const tasks = await prisma.tasks.findMany({
    where: { projectId: projectId }
  });
  if (!tasks) {
    throw new ApiError(404, "Tasks not found");
  }
  return res.status(200).json(new ApiResponse(200, "Tasks fetched successfully", tasks));
}
export const getListByprojectId = async (req, res) => {
  const { projectId } = req.params;
  if (!projectId) {
    throw new ApiError(400, "Project ID is required");
  }
  const lists = await prisma.list.findMany({
    where: { projectId: projectId }
  });
  if (!lists) {
    throw new ApiError(404, "Lists not found");
  }
  return res.status(200).json(new ApiResponse(200, "Lists fetched successfully", lists));
}
export const getTaskByTaskId = async (req, res) => {
  const { taskId } = req.params;
  if (!taskId) {
    throw new ApiError(400, "Task ID is required");
  }
  const task = await prisma.tasks.findUnique({
    where: { id: taskId },
    include:{assignee:{
      select:{
        name:true,
        email:true
      }
    }}
  });
  if (!task) {
    throw new ApiError(404, "Task not found");
  }
  return res.status(200).json(new ApiResponse(200, "Task fetched successfully", task));
}
export const createCommentOnTask = async (req, res) => {
  const { taskId } = req.params;
  if (!taskId) {
    throw new ApiError(400, "Task ID is required");
  }
  const { content } = req.body;
  if (!content) {
    throw new ApiError(400, "Content is required");
  }
  const comment = await prisma.comment.create({
    data: {
      content: content,
      taskId: taskId,
      authorId: req.user.id
    }
  });
  if (!comment) {
    throw new ApiError(404, "Comment not created");
  }
  return res.status(200).json(new ApiResponse(200, "Comment created successfully", comment));
}
export const deleteCommentOnTaskByTaskId = async (req, res) => {
  const { commentId } = req.params;
  if (!commentId) {
    throw new ApiError(400, "Comment ID is required");
  }
  const comment = await prisma.comment.delete({
    where: { id: commentId }
  });
  if (!comment) {
    throw new ApiError(404, "Comment not deleted");
  }
  return res.status(200).json(new ApiResponse(200, "Comment deleted successfully", comment));
}
export const getCommentsByTaskId = async (req, res) => {
  const { taskId } = req.params;
  if (!taskId) {
    throw new ApiError(400, "Task ID is required");
  }
  const comments = await prisma.comment.findMany({
    where: { taskId: taskId },
    include:{author:true}
  });
  if (!comments) {
    throw new ApiError(404, "Comments not found");
  }
  return res.status(200).json(new ApiResponse(200, "Comments fetched successfully", comments));
}
export const getAttachmentsByTaskId = async (req, res) => {
  const { taskId } = req.params;
  if (!taskId) {
    throw new ApiError(400, "Task ID is required");
  }
  const attachments = await prisma.attachments.findMany({
    where: { taskId: taskId }
  });
  if (!attachments) {
    throw new ApiError(404, "Attachments not found");
  }
  return res.status(200).json(new ApiResponse(200, "Attachments fetched successfully", attachments));
}
export const addAttachmentsToTask = async (req, res) => {
  const { taskId } = req.params;
  if (!taskId) {
    throw new ApiError(400, "Task ID is required");
  }

  if (!req.file) {
    throw new ApiError(400, "No file uploaded");
  }
  const config = cloudinary.config({
    cloud_name: "dexuggmw3",
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  const uniquePublicId = `product-${req.file.originalname.replace(/\s+/g, "_")}-${Date.now()}`;
  // Upload an image
  const uploadResult = await cloudinary.uploader
    .upload(req?.file?.path, {
      folder: "uploads",
      public_id: uniquePublicId,
      resource_type:"auto"
    })
    .catch((error) => {
    });
  let img_url = uploadResult?.secure_url;
  const attachment = await prisma.attachments.create({
    data: {
      url: img_url,
      taskId: taskId,
      uploaderId: req.user.id
    }
  });

  if (!attachment) {
    throw new ApiError(500, "Attachment not created");
  }
  fs.unlinkSync(req.file.path);
  return res.status(200).json(new ApiResponse(200, "Attachment uploaded successfully", attachment));
}
export const deleteAttachmentOnTaskByTaskId = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new ApiError(400, "Attachment ID is required");
  }
  const attachment = await prisma.attachments.delete({
    where: { id: id }
  });
  if (!attachment) {
    throw new ApiError(404, "Attachment not deleted");
  }
  return res.status(200).json(new ApiResponse(200, "Attachment deleted successfully", attachment));
}
export const deleteTaskByTaskId = async (req, res) => {
  const { taskId } = req.params;
  if (!taskId) {
    throw new ApiError(400, "Task ID is required");
  }
  const task = await prisma.tasks.delete({
    where: { id: taskId }
  });
  if (!task) {
    throw new ApiError(404, "Task not deleted");
  }
  return res.status(200).json(new ApiResponse(200, "Task deleted successfully", task));
}
export const updateTaskByTaskId = async (req, res) => {
  const { taskId } = req.params;
  if (!taskId) {
    throw new ApiError(400, "Task ID is required");
  }
  const task = await prisma.tasks.update({
    where: { id: taskId },
    data: req.body
  });
  if (!task) {
    throw new ApiError(404, "Task not updated");
  }
  return res.status(200).json(new ApiResponse(200, "Task updated successfully", task));
}