import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: true,
    },
    diagnosis: {
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
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    admittedAt: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
      required: true,
    },
    admitDate: {
      type: Date,
      default: Date.now,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    medicalRecord: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MedicalRecord",
      required: true,
    },
    isDischarged: {
      type: Boolean,
      default: false,
    },
    dischargeData: {
      type: Date,
      default: null,
    },
    dischargeSummary: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

export const Patient = mongoose.model("Patient", PatientSchema);
