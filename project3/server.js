require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;

const productRoutes = require("./routes/route-products");
const bookRoutes = require("./routes/route-books");

const app = express();

// Connect to Database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

// Use middleware
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/books", bookRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
