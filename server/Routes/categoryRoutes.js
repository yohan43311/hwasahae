const express = require("express");
const {
  createCategory,
  getCategory,
} = require("../Controllers/categoryController");

const router = express.Router();

router.post("/:name", createCategory);
router.get("/", getCategory);

module.exports = router;
