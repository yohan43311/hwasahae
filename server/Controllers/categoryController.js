const { Category } = require("../Models");

const asyncHandler = require("../utils/asyncHandler");

// 카테고리 생성/등록
const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const newCategory = new Category({ name });
  const result = await newCategory.save();
  res.status(200).json(result);
});

// 카테고리 목록 가져오기
const getCategory = asyncHandler(async (req, res) => {
  const result = await Category.find({});
  res.status(200).json(result);
});

module.exports = { createCategory, getCategory };
