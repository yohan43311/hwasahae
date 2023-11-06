const { Product } = require("../Models");
const { Category } = require("../Models");
const asyncHandler = require("../utils/asyncHandler");

// 상품 생성/등록
const createProduct = asyncHandler(async (req, res) => {
  const { name, images, description, price, maker, category } = req.body;

  // 카테고리가 이미 존재하는지 확인
  let categoryDoc = await Category.findOne({ name: category });

  // 존재하지 않으면 에러 반환
  if (!categoryDoc) {
    return res
      .status(400)
      .json({ error: "해당 카테고리가 존재하지 않습니다." });
  }
  const newProduct = new Product({
    name,
    images,
    description,
    price,
    maker,
    category: categoryDoc.name,
  });
  const result = await newProduct.save();
  res.status(200).json(result);
});
// 모든 상품 목록 조회
const listProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}); // 모든 상품을 조회합니다.
  res.status(200).json(products); // 조회된 상품들을 JSON 형태로 반환합니다.
});
// 특정 상품 목록 조회
const detailProducts = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findById(productId);
  res.status(200).json(product);
});
// 상품 정보 수정
const modifyProducts = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const { name, images, description, price, maker } = req.body;
  const modiProduct = await Product.findOneAndUpdate(
    { _id: productId },
    { name, images, description, price, maker },
    { new: true }
  );
  res.json(modiProduct);
});
// 상품 삭제 (유저측)
const deleteProducts = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const currentDate = new Date();
  const delProduct = await Product.findOneAndUpdate(
    { _id: productId },
    { deletedAt: currentDate },
    { new: true }
  );

  if (delProduct) {
    res.json({ message: "상품이 성공적으로 삭제되었습니다." });
  } else {
    res.json({ message: "상품 삭제에 실패하였습니다." });
  }
});

module.exports = {
  createProduct,
  listProducts,
  detailProducts,
  modifyProducts,
  deleteProducts,
};

// 오 session -> 취업 유리
// 털릴때 어떻게 대처할지(깊은 생각이 중요) - why, what know
// 고민하기 ( 탈모 올 수 있음 )
// 쿠키 안털리게 하는방법 - 특정경로만 사용하게 하게하면 되는
// 역으로 면접 공격적으로 받게
// 현재는 계층형 아키텍처를 진행해야한다고 생각하면됨 (클린)
// express의 미들웨어 클라이언트가 요청햇을때 요청과 응답에따라 처리하는 함수
