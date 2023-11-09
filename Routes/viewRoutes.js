const express = require("express");
const path = require("path");
const router = express.Router();

//load css, js, asset
router.use("/", express.static("Views"));
router.use("/", express.static("Views/src"));
router.use("/", express.static("Views/src/pages/admin/"));

//route setting
router.use("/", express.static("Views/src/pages/Main"));
router.use("/item", express.static("Views/src/pages/itemPage"));

router.use("/login", express.static("Views/src/pages/SignIn")); //로그인
router.use("/find", express.static("Views/src/pages/Find_idPw")); //아이디/비번 찾기
router.use("/register", express.static("Views/src/pages/SignUp")); //회원가입
router.use(
  "/registerOk",
  express.static("Views/src/pages/SIgnUp/success_signUp/success_signUp.html")
); //회원가입 성공
router.use("/payment", express.static("Views/src/pages/Payment")); //결제
router.use(
  "/paid",
  express.static("Views/src/pages/Payment/success_payment/success_payment.html")
); //결제완료
router.use("/cart", express.static("Views/src/pages/Cart")); //장바구니
router.use("/product", express.static("Views/src/pages/Product"));
router.use("/mypage", express.static("Views/src/pages/Mypage"));
router.use("/adminPage", express.static("Views/src/pages/admin"));
router.use(
  "/adminPage/product/add",
  express.static("Views/src/pages/admin/product-add.html")
);
module.exports = router;
