const express = require("express");
const path = require("path");
const router = express.Router();

//load css, js, asset
router.use("/", express.static("Views"));
router.use("/", express.static("Views/src"));

//route setting
router.use("/", express.static("Views/src/pages/Main"));
router.use("/login", express.static("Views/src/pages/SignIn/signIn.html"));
router.use("/register", express.static("Views/src/pages/SignUp/signUp.html"));
router.use("/item", express.static("Views/src/pages/itemPage"));

module.exports = router;
