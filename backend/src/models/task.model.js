import mongoose, { model, Schema } from "mongoose";

let taskSchema = new Schema(
  {
    assignedTo: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    projectName: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
    title: {
      required: true,
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    dueDate: {
      required: true,
      type: Date,
    },
    urgency: {
      required: true,
      type: String,
      enum: ["BackLog", "In Progress", "Review", "Done"],
    },
    iscompleted: {
      required: true,
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Task = model("Task", taskSchema);

export default Task;
