import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
let userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 16,
  },
  role: {
    required: true,
    type: String,
    enum: ["Leader", "Co-Worker"],
    default: "Co-Worker",
  },
});

let User = Model("User", userSchema);

User.pre("save", async function () {
  if (!this.isModified) this.password = await bcrypt.hash(password);
});

User.methods.generateJWTToken = async function () {
  jwt.sign();
};

export default User;
