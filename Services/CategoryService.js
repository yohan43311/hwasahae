// CategoryService.js
const { Category } = require("../Models");

class CategoryService {
  constructor() {}
  // 카테고리 생성/등록 메소드
  async createCategory(name) {
    const newCategory = new Category({ name });
    const result = await newCategory.save();
    return result;
  }
  // 카테고리 목록 가져오기 메소드
  async getCategories() {
    const categories = await Category.find({});
    return categories;
  }
}

module.exports = CategoryService;
