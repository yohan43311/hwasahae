const express = require("express");

const {
  createProduct,
  listProducts,
  detailProducts,
  modifyProducts,
  deleteProducts,
} = require("../Controllers/productController");

const router = express.Router();

// 상품

router.post("/", createProduct); // 상품 등록
router.get("/", listProducts); // 모든 상품 조회
router.get("/:_id", detailProducts); // 특정 상품 조회
router.patch("/:_id", modifyProducts); // 상품 수정
router.delete("/:_id", deleteProducts); // 상품 삭제 (유저측)
module.exports = router;
