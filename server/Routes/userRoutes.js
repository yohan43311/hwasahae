const express = require("express");
const {
  registerUser,
  loginUser,
  getUserInfo,
  updateUserInfo,
  removeUserInfo,
  getUsers,
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
router.get("/users/my", authJWT, getUserInfo);
router.patch("/users/my", authJWT, updateUserInfo);
router.delete("/users/my", authJWT, removeUserInfo);
router.get("/users", authJWT, getUsers);

module.exports = router;
