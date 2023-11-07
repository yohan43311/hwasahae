const express = require("express");
const {
  createOrder,
  deleteOrder,
  updateOrderStatus,
  listOrder,

  updateOrderAdmin,
  listOrderAdmin,
  deleteOrderAdmin,
} = require("../Controllers/orderController");
const router = express.Router();

router.get("/admin", listOrderAdmin); // 주문 조회 (관리자)
router.patch("/:orderId/admin", updateOrderAdmin); // 주문 수정 (관리자)
router.delete("/:orderId/admin", deleteOrderAdmin); // 주문 삭제 (관리자)

router.post("/", createOrder); // 주문 등록 (유저)
router.get("/", listOrder); // 주문 조회 (유저)
router.patch("/:orderId/status", updateOrderStatus); // 주문 수정 (유저)
router.delete("/:orderId", deleteOrder); // 주문 취소 (유저)

module.exports = router;
