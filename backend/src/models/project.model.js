import mongoose, { model, mongo, Schema } from "mongoose";

let projectSchema = new Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    projectName: {
      required: true,
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    invitedMembers: {
        type:[String],
    },
    dueDate: {
      required: true,
      type: Date,
    },
    iscompleted: {
      required: true,
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }, //use model.markModified('datefield') for saving date fields, because 
  // .save() automatically doesn't 
);

const Project = model("Project", projectSchema);

export default Project;
