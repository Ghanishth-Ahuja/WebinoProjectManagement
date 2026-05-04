import express from "express";
import { createProject, addProjectMember, deleteProjectMember, validateInvitationToken, getProjectsByUserId, getProjectByProjectId, getProjectMembersByProjectId, deleteProjectById, assignNewTaskToUser, getAllTasksByProjectId,getListByprojectId, createCommentOnTask, getCommentsByTaskId, deleteCommentOnTaskByTaskId, getAttachmentsByTaskId, addAttachmentsToTask, deleteAttachmentOnTaskByTaskId, getTaskByTaskId, deleteTaskByTaskId, updateTaskByTaskId, getAllNotificationsByUserId     } from "../controllers/project.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { uploadSingle } from "../middlewares/multer.js";
import validate from "../middlewares/validate.js";
import { taskSchema } from "../zodSchema.js";

let projectRouter = express.Router();

projectRouter.post("/create", isAuthenticated, createProject);
projectRouter.get("/validateInvitationToken/:token", validateInvitationToken);
projectRouter.get("/getProjectsByUserId", isAuthenticated, getProjectsByUserId);
projectRouter.get("/getProjectByProjectId/:projectId", isAuthenticated, getProjectByProjectId);
projectRouter.get("/getProjectMembersByProjectId/:projectId", isAuthenticated, getProjectMembersByProjectId);
projectRouter.delete("/deleteProjectById", isAuthenticated, deleteProjectById);
projectRouter.post("/addProjectMember/:projectId", isAuthenticated, addProjectMember);
projectRouter.delete("/deleteProjectMember/:projectId", isAuthenticated, deleteProjectMember);
projectRouter.post("/assignNewTaskToUser", isAuthenticated,validate(taskSchema), assignNewTaskToUser);
projectRouter.get("/getAllTasksByProjectId/:projectId", isAuthenticated, getAllTasksByProjectId);       
projectRouter.get("/getListsByProjectId/:projectId", isAuthenticated, getListByprojectId);
projectRouter.post("/createCommentOnTask/:taskId", isAuthenticated, createCommentOnTask);
projectRouter.get("/getCommentsByTaskId/:taskId", isAuthenticated, getCommentsByTaskId);
projectRouter.delete("/deleteCommentOnTaskByTaskId/:commentId", isAuthenticated, deleteCommentOnTaskByTaskId);
projectRouter.get("/getAttachmentsByTaskId/:taskId", isAuthenticated, getAttachmentsByTaskId);
projectRouter.post("/addAttachmentsToTask/:taskId", isAuthenticated, uploadSingle('file'), addAttachmentsToTask);
projectRouter.delete("/deleteAttachmentOnTaskByTaskId/:id", isAuthenticated, deleteAttachmentOnTaskByTaskId);
projectRouter.get("/getTaskByTaskId/:taskId", isAuthenticated, getTaskByTaskId);
projectRouter.delete("/deleteTaskByTaskId/:taskId", isAuthenticated, deleteTaskByTaskId);
projectRouter.put("/updateTask/:taskId", isAuthenticated, updateTaskByTaskId);
projectRouter.get("/getAllNotificationsByUserId/:userId", isAuthenticated, getAllNotificationsByUserId);
export default projectRouter;

