const express = require("express");
const {
  createCategory,
  getCategory,
} = require("../Controllers/categoryController");

const router = express.Router();
// 카테고리
router.post("/:categoryId", createCategory);
router.get("/", getCategory);

module.exports = router;
