const express = require("express");
const { createOrder, deleteOrder } = require("../Controllers/orderController");
const router = express.Router();

router.post("/", createOrder); // 주문 등록
router.delete("/:orderId", deleteOrder); // 주문 취소

module.exports = router;
