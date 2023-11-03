const { Order } = require("../Models");
const { Product } = require("../Models");
const asyncHandler = require("../utils/asyncHandler");

const createOrder = asyncHandler(async (req, res) => {
  const { userId, receiver, orderedItems, deliveryFee, totalPrice, status } =
    req.body;

  // 상품의 _id를 사용하여 상품 정보를 불러옵니다.
  const populatedItems = await Promise.all(
    orderedItems.map(async (item) => {
      const product = await Product.findById(item.product); // 상품 정보를 불러옵니다.

      if (!product) {
        throw new Error("상품을 찾을 수 없습니다.");
      }

      return {
        quantity: item.quantity || 1, // 수량이 없다면 기본값으로 1을 설정합니다.
        price: product.price || 0, // 상품의 가격 정보를 가져옵니다. 없다면 기본값으로 0을 설정합니다.
        product: item.product, // 상품의 _id를 설정합니다.
      };
    })
  );

  const newOrder = new Order({
    userId,
    receiver,
    orderedItems: populatedItems,
    deliveryFee,
    totalPrice,
    status,
  });

  const result = await newOrder.save();
  res.status(200).json(result);
});

// 주문 취소
const deleteOrder = asyncHandler(async (req, res) => {
  const orderId = req.params.id;
  const order = await Order.findById(orderId);

  if (!order) {
    return res.status(404).json({ message: "주문을 찾을 수 없습니다." });
  }

  order.deletedAt = new Date(); // 현재 날짜를 deletedAt에 저장하여 주문 취소를 표시합니다.
  const result = await order.save();

  res.status(200).json(result);
});
module.exports = { createOrder, deleteOrder };
