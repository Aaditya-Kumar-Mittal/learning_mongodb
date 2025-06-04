const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: String,
  // Going to refer to Author Collections
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
});

module.exports = mongoose.model("Book", BookSchema);
