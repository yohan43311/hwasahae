const AdminService = require("../Services/AdminService");
const asyncHandler = require("../utils/asyncHandler");

const categoryService = new AdminService();
const orderService = new AdminService();
const ProductService = new AdminService();

// category
// 카테고리 추가 (관리자)
const createCategoryAdmin = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const userRole = res.locals.userInfo.role;
  const result = await categoryService.createCategory(name, userRole);
  res.status(200).json(result);
});
// 카테고리 수정
const updateCategoryAdmin = asyncHandler(async (req, res) => {
  const { categoryId } = req.params;
  const { newName } = req.body;
  const userRole = res.locals.userInfo.role;
  const updatedCategory = await categoryService.updateCategory(
    categoryId,
    newName,
    userRole
  );
  res.status(200).json({
    message: "카테고리가 수정되었습니다.",
    category: updatedCategory,
  });
});
// 카테고리 삭제
const deleteCategoryAdmin = asyncHandler(async (req, res) => {
  const { categoryId } = req.params;
  const userRole = res.locals.userInfo.role;
  await categoryService.deleteCategory(categoryId, userRole);
  res.status(200).json({ message: "카테고리가 삭제되었습니다." });
});

// order
// 주문 조회 (관리자)
const listOrderAdmin = asyncHandler(async (req, res) => {
  // const userRole = res.locals.userInfo.role;
  const orders = await orderService.listOrderAdmin();
  res.status(200).json(orders);
  // try {
  //   const orders = await orderService.listOrderAdmin(); // 'role' 매개변수를 제거합니다.
  //   res.status(200).json({ data: orders }); // 응답을 { data: orders } 형태로 구성합니다.
  // } catch (error) {
  //   res.status(500).json({ message: error.message }); // 오류 응답도 객체 형태로 구성합니다.
  // }
});
// 주문 수정 (관리자)
const updateOrderAdmin = asyncHandler(async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;
  const userRole = res.locals.userInfo.role;
  const updatedOrder = await orderService.updateOrderAdmin(
    orderId,
    status,
    userRole
  );

  res.status(200).json({
    message: "주문 상태가 업데이트 되었습니다.",
    order: updatedOrder,
  });
});
// 주문 삭제 (관리자)
const deleteOrderAdmin = asyncHandler(async (req, res) => {
  const { orderId } = req.params;
  const userRole = res.locals.userInfo.role;
  await orderService.deleteOrderAdmin(orderId, userRole);
  res.status(200).json({ message: "주문이 삭제되었습니다." });
});

// product
// 상품 추가 (관리자)
const createProductAdmin = asyncHandler(async (req, res) => {
  const userRole = res.locals.userInfo.role;
  const product = await ProductService.createProduct(
    req.body,
    req.file,
    userRole
  );
  res.status(200).json(product);
});
// 상품 정보 수정 (관리자)
const modifyProductsAdmin = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const userRole = res.locals.userInfo.role;
  const updateData = req.body; // 수정할 정보를 담은 객체
  const updatedProduct = await ProductService.modifyProduct(
    productId,
    updateData,
    userRole
  );
  res.status(200).json(updatedProduct);
});
// 상품 삭제 (관리자)
const deleteProductsAdmin = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const userRole = res.locals.userInfo.role;
  const deletedProduct = await ProductService.deleteProduct(
    productId,
    userRole
  );
  res.json({
    message: "상품이 성공적으로 삭제되었습니다.",
    product: deletedProduct,
  });
});

module.exports = {
  createCategoryAdmin,
  updateCategoryAdmin,
  deleteCategoryAdmin,
  updateOrderAdmin,
  listOrderAdmin,
  deleteOrderAdmin,
  createProductAdmin,
  modifyProductsAdmin,
  deleteProductsAdmin,
};
