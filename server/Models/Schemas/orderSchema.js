const mongoose = require("mongoose");
const { Schema } = mongoose;

// 주문
const orderSchema = new Schema(
  {
    // 주문한 유저(고객)
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    // 수령인
    reciver: {
      name: { type: String, required: true },
      phone: { type: Number, required: false },
      address: { type: String, required: true },
    },

    // 주문 상품 리스트 (임베디드? 레퍼런스?) - 레퍼런스!!!!!!
    // price / quantity는 꼭 저장(유기적이기때문에)
    // 데이터를 수정 할 경우가 많냐 (하나냐 백만개냐)
    // 임베디드 - 조회할때 빠름
    orderedItems: [
      {
        quantity: { type: Number, required: true },
        Price: { type: Number, required: true },
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    ],
    // 배송비 얼마나 드는지
    delivertFee: { type: Number, required: true, default: 3000 },

    // 유저딴에서 삭제 -> 왜 없어졌냐?에 대한 근거
    deletedAt: { type: Date, required: false },

    // 주문 총 금액
    totalPrice: { type: Number, required: true },

    // 주문 배송 상태 ( 배송준비 중 일때 취소 가능 / 배송중일때 취소 불가능 ) + 정책
    // 주문접수 , 배송 준비중, 배송중, 배송완료
    status: {
      type: String,
      enum: ["주문접수", "배송 준비중", "배송중", "배송 완료"],
      default: "주문접수",
    },
  },
  {
    // 주문 날짜
    timestamps: true,
  }
);

module.exports = orderSchema;
