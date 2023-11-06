const OrderService = require("../Services/OrderService");
const asyncHandler = require("../utils/asyncHandler");

const orderService = new OrderService();

// 주문 생성
const createOrder = asyncHandler(async (req, res) => {
  const populatedOrder = await orderService.createOrder(req.body);
  res.status(200).json(populatedOrder);
});
// 주문 취소
const deleteOrder = asyncHandler(async (req, res) => {
  const { orderId } = req.params;
  const result = await orderService.deleteOrder(orderId);
  // 응답에 주문 취소 메시지 추가
  res.status(200).json({
    message: "주문이 성공적으로 취소되었습니다.",
    order: result,
  });
});
// 주문 상태 업데이트
const updateOrderStatus = asyncHandler(async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  const updatedOrder = await orderService.updateOrderStatus(orderId, status);
  res.status(200).json(updatedOrder);
});
module.exports = { createOrder, deleteOrder, updateOrderStatus };
