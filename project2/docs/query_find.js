require("dotenv").config();

const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

async function createUser() {
  try {
    /*
    // Create a new Document
    const newUser = await User.create({
      name: "John Doe",
      email: "H0I2o@example.com",
      age: 30,
      isActive: true,
      tags: ["developer", "javascript", "mongodb"],
    });

    console.log("User created successfully:", newUser);

    const allUsers = await User.find({});

    console.log("All users in the database:", allUsers);
    */

    /*
     const newUser = await User.create({
      name: "John Adams",
      email: "H5I2o@example.com",
      age: 30,
      isActive: false,
      tags: ["developer", "javascript", "mongodb"],
    });

    console.log("User created successfully:", newUser);
    */


    /*
    const getNonActiveUsers = await User.find({ isActive: false });
    console.log("Non-active users:", getNonActiveUsers);
    */

    
  } catch (err) {
    console.error("Error creating user:", err);
  } finally {
    await mongoose.connection.close();
    console.log("Connection closed");
  }
}

createUser();
