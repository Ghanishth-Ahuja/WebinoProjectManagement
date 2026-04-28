// @ts-nocheck
import crypto from "crypto";
import prisma from "../dbcon/dbConnection.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import generateAccessToken from "../utils/generateJwtToken.js";
import sendEmail from "../utils/sendEmail.js";
import { resetPasswordHtml } from "../emailHtml/emailHtml.js";
import { HOST_NAME } from "../constants.js";
/**
 * @type {import("express").RequestHandler}
 */
export const registerUser = async (req, res) => {
  const { name, email, password } = req?.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });
  if (user) {
    return res
      .status(200)
      .json(new ApiResponse(200, "User created successfully"));
  }
};
/**
 * @type {import("express").RequestHandler}
 */
export const registerUserUsingInvitation = async (req, res) => {
  const { name, email, password, invitationToken } = req?.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  //creating the user
  const user = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });
  //finding the invitation to get the project id for creating project member
  const invitation = await prisma.projectInvitation.findUnique({
    where: {
      token: invitationToken,
    },
  })
  //creating a project member
  await prisma.projectMembers.create({
    data: {
      userId: user.id,
      projectId: invitation?.projectId,
      role: 'MEMBER'
    }
  })
  //removing the token from the database, so that email link cannot be used again
  await prisma.projectInvitation.delete({
    where: {
      token: invitationToken,
    },
  });
  //generating access token for auto login
  const token = generateAccessToken(user.id);
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 24 * 60 * 60 * 1000,
  });
  return res.status(200).json(new ApiResponse(200, "User created successfully", { token }));
};
/**
 * @type {import("express").RequestHandler}
 */
export const loginUser = async (req, res) => {
  const { email, password } = req?.body;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      password: true,
      id: true,
      name: true,
      email: true,
    },
  });
  if (!user) {
    throw new ApiError(404, "This email is not registered");
  }
  const isPasswordCorrect = await bcrypt.compare(password, user?.password);
  if (!isPasswordCorrect) {
    throw new ApiError(401, "Invalid Password");
  }
  const token = await generateAccessToken(user?.id, user?.name, user?.email);
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 24 * 60 * 60 * 1000,
  }); // hours mins seconds milliseconds  24 * 60 * 60 * 1000 
  return res
    .status(200)
    .json(
      new ApiResponse(200, "Authenticated Successfully", {
        name: user?.name,
        email: user?.email,
        id: user?.id,
      }),
    );
};
/**
 * @type {import("express").RequestHandler}
 */
export const logoutUser = async (req, res) => {
  res.clearCookie("token", { httpOnly: true, secure: true, sameSite: "none", path:"/" });//path is important for logging out because by default cookies is set for path /
  return res.status(200).json(new ApiResponse(200, "Logged out successfully"));
};
/**
 * @type {import("express").RequestHandler}
 */
export const me = async (req, res) => {
  const token = req?.cookies?.token;
  if (!token) {
    throw new ApiError(401, "No JWT Token");
  }
  const result = await jwt.verify(token, process.env.JWT_SECRET_KEY);
  if (!result) {
    throw new ApiError(401, "Unauthorized or expired token");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, "User is authenticated", result));
};
/**
 * @type {import("express").RequestHandler}
 */
export const sendResetPasswordMail = async (req, res) => {
  const { email } = req?.body;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      email: true,
      name: true,
    },
  });
  if (!user) {
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          "If the user exists, the password reset link will be sent to the entered email",
        ),
      );
  }
  const resetToken = crypto.randomBytes(32).toString("hex");
  const expires = new Date(Date.now() + 15 * 60 * 1000);
  const setResetToken = await prisma.passwordResetToken.create({
    data: {
      email: user?.email,
      expires,
      token: resetToken,
    },
  });
  const response = await sendEmail({
    subject: "Password Reset Email",
    receicerEmail: user?.email,
    name: user?.name,
    htmlContent: resetPasswordHtml({
      buttonUrl: `${HOST_NAME}/resetpassword/${resetToken}`,
      content: "Reset your email password",
    }),
  });
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        "If the user exists, the password reset link will be sent to the entered email",
      ),
    );
};

/**
 * @type {import("express").RequestHandler}
 */
export const resetPasswordValidateToken = async (req, res) => {
  const { token } = req.body;
  const result = await prisma.passwordResetToken.findFirst({
    where: {
      token: token,
      isUsed: false,
    },
  });
  const isExpired = new Date() > result?.expires;
  if (!result || isExpired) {
    throw new ApiError(404, "Invalid or Expired Email Reset Token");
  }
  return res.status(200).json(new ApiResponse(200, "Valid token"));
};
export const resetPassword = async (req, res) => {
  const { password, confirmpassword, token } = req?.body;
  const result = await prisma.passwordResetToken.findFirst({
    where: {
      token: token,
      isUsed: false,
    },
    select: {
      email:true,
      expires:true,
    },
  });
  const isExpired = new Date() > result?.expires;
  if (!result || isExpired) {
    throw new ApiError(401, "Invalid or Expired Email Reset Token");
  }
  if (!password || !confirmpassword) {
    throw new ApiError(400, "password field cannot be empty");
  }
  if (password !== confirmpassword) {
    throw new ApiError(400, "Both passwords don't match");
  }
  const hashedPassword = await bcrypt.hash(confirmpassword, 10);
  const updatedUser = await prisma.user.update({
    where: {
      email: result?.email,
    },
    data: {
      password: hashedPassword,
    },
  });
  const invalidateToken = await prisma.passwordResetToken.delete({
    where: {
      token: token,
    },
  });
  if (updatedUser && invalidateToken) {
    return res
      .status(200)
      .json(new ApiResponse(200, "Password Updated Successfully"));
  }
};
export const updateUserNameById=async(req,res)=>
{
const { userName} = req.body;
const {userId} = req.params;
const updatedUser = await prisma.user.update({
    where: {
        id: userId,
    },
    data: {
        name: userName,
    },
});
if(!updatedUser){
    throw new ApiError(404, "User not found");
}
return res.status(200).json(new ApiResponse(200, "User name updated successfully"));
}
export const changepassword = async(req,res)=>
{
  const{currentPassword,newPassword,confirmPassword} = req.body;
  if(newPassword !== confirmPassword){
    throw new ApiError(400, "Both passwords don't match");
  }
  const user = await prisma.user.findUnique({
    where: {
      id: req.user?.id,
    },
  });
  if(!user){
    throw new ApiError(404, "User not found");
  }
  const isPasswordCorrect = await bcrypt.compare(currentPassword, user.password);
  if(!isPasswordCorrect){
    throw new ApiError(400, "Current password is incorrect");
  }
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  const updatedUser = await prisma.user.update({
    where: {
      id: req.user?.id,
    },
    data: {
      password: hashedPassword,
    },
  });
  if(!updatedUser){
    throw new ApiError(500, "Failed to update password");
  }
  return res.status(200).json(new ApiResponse(200, "Password updated successfully"));
}