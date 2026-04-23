import { Schema, model } from "mongoose";

let memberschema = new Schema(
  {
    projectid: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    role: {
      type: String,
      role: ["Project Head", "Co-Workers"],
      required: true,
    },
  },
  { timestamps: true },
);

const ProjectMember = model(memberschema);

export default ProjectMember;
