import express from "express";
import {
  loginUser,
  registerUser,
  resetPassword,
  sendResetPasswordMail,
  resetPasswordValidateToken,
  me,
  logoutUser,
  updateUserProfileById,
  registerUserUsingInvitation,
  changepassword
} from "../controllers/user.controller.js";
let userrouter = express.Router();
import { UserSchema, loginSchema, resetPasswordSchema,resetPasswordSetNewSchema } from "../zodSchema.js";
import validate from "../middlewares/validate.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { uploadSingle } from "../middlewares/multer.js";

userrouter.get("/me",isAuthenticated,me);
userrouter.post("/register", validate(UserSchema), registerUser);
userrouter.post("/logout", isAuthenticated, logoutUser);
userrouter.post("/login"  ,validate(loginSchema), loginUser);
userrouter.post("/resetpassword", resetPassword);
userrouter.post("/changepassword",isAuthenticated,validate(resetPasswordSetNewSchema), changepassword);
userrouter.post(
  "/sendresetpasswordmail",
  validate(resetPasswordSchema),
  sendResetPasswordMail,
);
userrouter.post("/resetpasswordvalidate", resetPasswordValidateToken);
userrouter.post("/registerUserUsingInvitation", registerUserUsingInvitation);
userrouter.post("/updateUserProfileById/:userId", isAuthenticated,uploadSingle("avatar"), updateUserProfileById);

export default userrouter;
