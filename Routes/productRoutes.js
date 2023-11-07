const express = require("express");

const {
  createProduct,
  listProducts,
  detailProducts,
  modifyProducts,
  deleteProducts,
} = require("../Controllers/productController");

const router = express.Router();
const multer = require("multer");
const path = require("path");

// 상품 이미지
// 파일 저장 위치와 파일명 설정
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./Views/src/pages/Product/img/shopimages"); // 폴더에 파일을 저장합니다.
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // 파일 이름을 현재 날짜와 원본 파일의 확장자로 저장합니다.
  },
});

// 파일 필터링 (이미지만 허용)
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("이미지 파일만 업로드 가능합니다."), false);
  }
};

// 파일 업로드 미들웨어 설정
const upload = multer({ storage: storage, fileFilter: fileFilter });

// 상품
router.post("/admin", upload.single("image"), createProduct); // 상품 추가 (관리자)
router.patch("/:productId/admin", modifyProducts); // 상품 수정 (관리자)
router.delete("/:productId/admin", deleteProducts); // 상품 삭제 (관리자)

router.get("/", listProducts); // 모든 상품 조회 (유저)
router.get("/:productId", detailProducts); // 특정 상품 조회 (유저)
module.exports = router;
