// @ts-nocheck
import crypto from "crypto"
import prisma from "../dbcon/dbConnection.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import sendEmail from "../utils/sendEmail.js";
import { HOST_NAME } from "../constants.js";
import { invitationEmailHtml } from "../emailHtml/emailHtml.js";

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
      }
    }
  });
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
  console.log(req.user);
  const projects = await prisma.projects.findMany({
    where: { projectmembers: { some: { userId: req.user.id } } },
    include: { projectmembers: true }
  });
  console.log(projects);
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

export const assignNewTaskToUser = async (req, res) => {
  const { projectId, assignee, priority,title, description,deadline } = req.body;
  const task = await prisma.tasks.create({
    data: {
      projectId,
      userId: req.user.id,
      title,
      description,
      priority,
      deadline
    }
  });
  if (!task) {
    throw new ApiError(404, "Task not created");
  }
  return res.status(200).json(new ApiResponse(200, "Task created successfully", task));
}