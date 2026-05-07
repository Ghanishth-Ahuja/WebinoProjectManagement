import mongoose, { model, Schema } from "mongoose";

let commentSchema = new Schema(
  {
    taskId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
    commenter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    taskOwner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    projectName: {
      required: true,
      type: String,
      trim: true,
    },
  },
  { timestamps: true }, //use model.markModified('datefield') for saving date fields, because
  // .save() automatically doesn't
);

const Comment = model("Comment", commentSchema);

export default Comment;
