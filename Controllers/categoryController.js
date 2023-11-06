const CategoryService = require("../Services/CategoryService");
const asyncHandler = require("../utils/asyncHandler");

const categoryService = new CategoryService();

// 카테고리 생성/등록
const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const result = await categoryService.createCategory(name);
  res.status(200).json(result);
});
// 카테고리 목록 가져오기
const getCategory = asyncHandler(async (req, res) => {
  const categories = await categoryService.getCategories();
  res.status(200).json(categories);
});

module.exports = { createCategory, getCategory };
