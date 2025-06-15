import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Standard way of defining and exporting a model, use uppercase for model names
export const Category = mongoose.model("Category", CategorySchema);
