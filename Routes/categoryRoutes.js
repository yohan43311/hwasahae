const express = require("express");
const {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("../Controllers/categoryController");

const router = express.Router();
// 카테고리
router.post("/admin", createCategory); // 카테고리 추가 (관리자)
router.patch("/:categoryId/admin", updateCategory); // 카테고리 수정 (관리자)
router.delete("/:categoryId/admin", deleteCategory); // 카테고리 삭제 (관리자)

router.get("/", getCategory); // 카테고리 조회 (유저)

module.exports = router;
