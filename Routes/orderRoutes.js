const express = require("express");
const {
  createOrder,
  deleteOrder,
  updateOrderStatus,
} = require("../Controllers/orderController");
const router = express.Router();

router.post("/", createOrder); // 주문 등록
router.delete("/:orderId", deleteOrder); // 주문 취소
router.patch("/:orderId/status", updateOrderStatus); // 주문 상태 업데이트

module.exports = router;
