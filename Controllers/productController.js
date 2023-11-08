const ProductService = require("../Services/ProductService");
const asyncHandler = require("../utils/asyncHandler");

const ProductServiceInstance = new ProductService();

// 모든 상품 목록 조회 (유저)
const listProducts = asyncHandler(async (req, res) => {
  const products = await ProductServiceInstance.listProducts();
  res.status(200).json(products); // 조회된 상품들을 JSON 형태로 반환합니다.
});
// 특정 상품 목록 조회 (유저)
const detailProducts = asyncHandler(async (req, res) => {
  const product = await ProductServiceInstance.detailProduct(
    req.params.productId
  );
  res.status(200).json(product);
});

module.exports = {
  listProducts,
  detailProducts,
};

// 오 session -> 취업 유리
// 털릴때 어떻게 대처할지(깊은 생각이 중요) - why, what know
// 고민하기 ( 탈모 올 수 있음 )
// 쿠키 안털리게 하는방법 - 특정경로만 사용하게 하게하면 되는
// 역으로 면접 공격적으로 받게
// 현재는 계층형 아키텍처를 진행해야한다고 생각하면됨 (클린)
// express의 미들웨어 클라이언트가 요청햇을때 요청과 응답에따라 처리하는 함수
