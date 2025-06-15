import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema(
  {
    doctorName: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    currentHospital: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
      },
    ],
    experience: {
      type: Number,
      required: true,
      default: 2,
    },
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", DoctorSchema);
