import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      // Giving reference of Users
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // ref value should be same as that of the model from where the data is being fetched
    },
    subTodos: [
      // Will contain objects, now modeling individual objects
      {
        type: mongoose.Schema.Types.ObjectId,
        refs: "SubTodo",
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", TodoSchema);
