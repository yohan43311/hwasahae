const express = require("express");
const {
  createOrder,
  deleteOrder,
  updateOrderStatus,
  listOrder,
} = require("../Controllers/orderController");
const router = express.Router();

// 주문
router.post("/", createOrder); // 주문 등록 (유저)
router.get("/", listOrder); // 주문 조회 (유저)
router.patch("/:orderId/status", updateOrderStatus); // 주문 수정 (유저)
router.delete("/:orderId", deleteOrder); // 주문 취소 (유저)

module.exports = router;
