import mongoose from "mongoose";

const HostpitalSchema = new mongoose.Schema(
  {
    hospitalName: {
      type: String,
      required: true,
    },
    hosptialAddress: {
      type: String,
      required: true,
    },
    numberOfDoctors: {
      type: Number,
      required: true,
    },
    numberOfBeds: {
      type: Number,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    establishedYear: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Hospital = mongoose.model("Hospital", HostpitalSchema);
