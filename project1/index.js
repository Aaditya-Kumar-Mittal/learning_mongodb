const express = require("express");
const server = express();
const port = 5000;
require("dotenv").config();
const mongoURI = process.env.MONGODB_URI;
const mongoose = require("mongoose");

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  course: {
    type: String,
    required: false,
  },
});

const studentModel = new mongoose.model("Student", studentSchema);



server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
