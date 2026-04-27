import express from "express";
import cors from "cors";
import ApiError from "./src/utils/ApiError.js";
import cookieParser from "cookie-parser";
import { HOST_NAME } from "./src/constants.js";
let app = express();
app.use(cors({ origin:false?"http://localhost:5173": HOST_NAME,credentials:true }));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
//routes mounting
import userrouter from "./src/routes/user.routes.js";
import projectrouter from "./src/routes/project.routes.js";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";
import multer from "multer";
app.use("/api/v1/user", userrouter);
app.use("/api/v1/project", projectrouter);

app.use((err, req, res, next) => {
  console.error(err);
  if (err instanceof ApiError) {
    console.error(`23 Error occured ${err}`);
    // console.log(import.meta.filename);
    return res.status(err.statuscode).json({
      success: false,
      message: err.message || "Server Error",
      errors: err.errors,
      data: null,
    });
  }
  if(err instanceof multer.MulterError)
  {
    switch(err.code) {
      case "LIMIT_FILE_SIZE":
        return res.status(400).json({
          success: false,
          message: "File size too large",
        });
      case "LIMIT_FILE_COUNT":
        return res.status(400).json({
          success: false,
          message: "File count too large",
        });
      default:
        return res.status(500).json({
          success: false,
          message: "Internal server error",
        });
    }
  }
  if (err instanceof PrismaClientKnownRequestError) {
    switch (err.code) {
      case "P2002":
        return res
          .status(409)
          .json({ success: false, message: "Email already exists" });
      case "P2025":
        return res
          .status(404)
          .json({ success: false, message: "Record not found" });
      case "P2003":
        return res
          .status(400)
          .json({ success: false, message: "invalid Foreign key constraint" });
      default:
        return res.status(500).json({ message: "Internal server error" });
    }
  }
  return res.status(500).json({
    success: false,
    message: "Internal Server error",
  });
});

export default app;
