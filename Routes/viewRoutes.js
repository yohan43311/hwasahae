const express = require("express");
const path = require("path");

const router = express.Router();

//load css, js, asset
router.use("/", express.static("Views"));
router.use("/", express.static("Views/src"));

//route setting
router.use("/", express.static("Views/src/pages/Main"));
router.use("/login", express.static("Views/src/pages/SignIn/"));
router.use("/register", express.static("Views/src/pages/SignUp/"));
router.use("/products", express.static("Views/src/pages/Product/"));
router.use("/mypage", express.static("Views/src/pages/Mypage/"));

module.exports = router;
