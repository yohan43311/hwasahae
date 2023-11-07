const CategoryService = require("../Services/CategoryService");
const asyncHandler = require("../utils/asyncHandler");

const categoryService = new CategoryService();

// 카테고리 추가 (관리자)
const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const result = await categoryService.createCategory(name);
  res.status(200).json(result);
});
// 카테고리 수정
const updateCategory = asyncHandler(async (req, res) => {
  const { categoryId } = req.params;
  const { newName } = req.body;

  const updatedCategory = await categoryService.updateCategory(
    categoryId,
    newName
  );
  res.status(200).json({
    message: "카테고리가 수정되었습니다.",
    category: updatedCategory,
  });
});
// 카테고리 삭제
const deleteCategory = asyncHandler(async (req, res) => {
  const { categoryId } = req.params;
  await categoryService.deleteCategory(categoryId);
  res.status(200).json({ message: "카테고리가 삭제되었습니다." });
});

// 모든 카테고리 목록 조회 (유저)
const getCategory = asyncHandler(async (req, res) => {
  const categories = await categoryService.getCategories();
  res.status(200).json(categories);
});

module.exports = {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
};
