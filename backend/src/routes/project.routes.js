import express from "express";
import { createProject, addProjectMember, deleteProjectMember, validateInvitationToken, getProjectsByUserId, getProjectByProjectId, getProjectMembersByProjectId, deleteProjectById, assignNewTaskToUser } from "../controllers/project.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
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
export default projectRouter;

