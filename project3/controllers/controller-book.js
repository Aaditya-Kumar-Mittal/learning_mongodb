const Author = require("../models/model-Author");
const Book = require("../models/model-Book");

const createAuthors = async (req, res) => {
  try {
    const author = await Author(req.body);
    await author.save();
    return res.status(200).json({
      success: true,
      message: "Author's Data Inserted Successfully!",
      data: author,
    });
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
const createBooks = async (req, res) => {
  try {
    // The book that we are inserting, we are going to pass the id of the author
    const book = await Book(req.body);
    await book.save();
    return res.status(200).json({
      success: true,
      message: "Book's Data Inserted Successfully!",
      data: book,
    });
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getBookWithAuthor = async (req, res) => {
  try {
    // Populating the Data Using ref property
    // .populate("refProperty") will replace the referred property with actual data
    const book = await Book.findById(req.params.id).populate("author");

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Book;s Fetched Successfully!",
      data: book,
    });
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = { createAuthors, createBooks, getBookWithAuthor };
