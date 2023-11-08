const express = require("express");
const { getCategory } = require("../Controllers/categoryController");
const router = express.Router();

// 카테고리
router.get("/", getCategory); // 카테고리 조회 (유저)

module.exports = router;
