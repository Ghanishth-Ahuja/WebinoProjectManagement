import { z } from "zod";

export const UserSchema = z.object({
  name: z
    .string()
    .min(5, { error: "Name must be atleast 5 characters long " })
    .max(30, { error: "Name must not be more than 30 characters " }),
  email: z.email({ error: "invalid email address" }).toLowerCase(),
  password: z.string().min(8, { error: "Password must be 8 characters long" }),
});

export const loginSchema = z.object({
  email: z.email({ error: "invalid email address" }).toLowerCase(),
  password: z.string(),
});
export const resetPasswordSchema = z.object({
  email: z.email().toLowerCase(),
});
export const resetPasswordSetNewSchema = z.object({
  currentPassword:z.string({error:"Current password is required"}),
  newPassword: z.string().min(8, { error: "Password must be 8 characters long" }),
  confirmPassword: z.string().min(8, { error: "Password must be 8 characters long" }),
});
export const taskSchema = z.object({
  projectId: z.string(),
  priority: z.string(),
  title: z.string(),
  description: z.string(),
  deadline: z.string(),
  userId:z.string()
});
