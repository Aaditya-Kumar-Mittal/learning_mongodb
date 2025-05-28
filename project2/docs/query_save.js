require("dotenv").config();
const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose
  .connect(uri)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Error connecting to MongoDB:", err));

// Define schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

// Create model
const User = mongoose.model("User", userSchema);

// Create a user document
async function createUser() {
  try {
    const newUser = new User({
      name: "John Doe",
      email: "john@example.com",
      age: 30,
      isActive: true,
      tags: ["developer", "javascript", "mongodb"],
    });
    
    await newUser.save();

    console.log("🎉 User created successfully:", newUser);
  } catch (err) {
    console.error("❌ Error creating user:", err);
  } finally {
    await mongoose.connection.close();
    console.log("🔌 Connection closed");
  }
}

createUser();
