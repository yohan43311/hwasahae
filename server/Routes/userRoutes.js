const express = require("express");
const {
  registerUser,
  loginUser,
  getUserInfo,
} = require("../Controllers/userControlloer");
const {
  validate,
  userRegisterValidator,
  userLoginValidator,
} = require("../error/userValidator");
const authJWT = require("../utils/authJWT");
const router = express.Router();

router.post("/register", userRegisterValidator(), validate, registerUser);
router.post("/login", userLoginValidator(), validate, loginUser);
router.get("/my", authJWT, getUserInfo);

module.exports = router;
