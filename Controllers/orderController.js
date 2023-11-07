const OrderService = require("../Services/OrderService");
const asyncHandler = require("../utils/asyncHandler");

const orderService = new OrderService();

// 주문 조회 (관리자)
const listOrderAdmin = asyncHandler(async (req, res) => {
  const orders = await orderService.listOrderAdmin();
  res.status(200).json(orders);
});
// 주문 수정 (관리자)
const updateOrderAdmin = asyncHandler(async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;
  const updatedOrder = await orderService.updateOrderAdmin(orderId, status);
  res.status(200).json({
    message: "주문 상태가 업데이트 되었습니다.",
    order: updatedOrder,
  });
});
// 주문 삭제 (관리자)
const deleteOrderAdmin = asyncHandler(async (req, res) => {
  const { orderId } = req.params;
  await orderService.deleteOrderAdmin(orderId);
  res.status(200).json({ message: "주문이 삭제되었습니다." });
});

// 주문 추가 (유저)
const createOrder = asyncHandler(async (req, res) => {
  const populatedOrder = await orderService.createOrder(req.body);
  res.status(200).json(populatedOrder);
});
// 주문 조회 (유저)
const listOrder = asyncHandler(async (req, res) => {
  const orders = await orderService.listOrder();
  res.status(200).json(orders);
});
// 주문 수정 (유저)
const updateOrderStatus = asyncHandler(async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  const updatedOrder = await orderService.updateOrderStatus(orderId, status);
  res.status(200).json(updatedOrder);
});
// 주문 취소 (유저)
const deleteOrder = asyncHandler(async (req, res) => {
  const { orderId } = req.params;
  const result = await orderService.deleteOrder(orderId);
  // 응답에 주문 취소 메시지 추가
  res.status(200).json({
    message: "주문이 성공적으로 취소되었습니다.",
    order: result,
  });
});
module.exports = {
  createOrder,
  listOrder,
  updateOrderStatus,
  deleteOrder,
  updateOrderAdmin,
  listOrderAdmin,
  deleteOrderAdmin,
};
