const { Order } = require("../Models");
const asyncHandler = require("../utils/asyncHandler");

const createOrder = asyncHandler(async (req, res) => {
  const { userId, receiver, orderedItems, deliveryFee, totalPrice, status } =
    req.body;

  const newOrder = new Order({
    userId,
    receiver,
    orderedItems, // 상품의 _id
    deliveryFee,
    totalPrice,
    status,
  });

  const savedOrder = await newOrder.save();
  const populatedOrder = await Order.findById(savedOrder._id)
    .populate("orderedItems.product")
    .exec();

  res.status(200).json(populatedOrder);
});

// 주문 취소
const deleteOrder = asyncHandler(async (req, res) => {
  const { orderId } = req.params;
  const order = await Order.findById(orderId);

  if (!order) {
    return res.status(404).json({ message: "주문을 찾을 수 없습니다." });
  }

  order.deletedAt = new Date(); // 현재 날짜를 deletedAt에 저장하여 주문 취소를 표시합니다.
  const result = await order.save();

  // 응답에 주문 취소 메시지 추가
  res.status(200).json({
    message: "주문이 성공적으로 취소되었습니다.",
    order: result,
  });
});
module.exports = { createOrder, deleteOrder };
