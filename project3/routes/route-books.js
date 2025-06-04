const express = require("express");
const router = express.Router();
const {
  createAuthors,
  createBooks,
  getBookWithAuthor
} = require("../controllers/controller-book");

router.post("/addAuthors", createAuthors);
router.post("/addBooks", createBooks);
router.get("/bookData/:id", getBookWithAuthor);

module.exports = router;
