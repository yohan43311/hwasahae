// CategoryService.js
const { Category } = require("../Models");

class CategoryService {
  constructor() {}

  // 카테고리 목록 조회 메소드(유저)
  async getCategories() {
    const categories = await Category.find({});
    return categories;
  }
}

module.exports = CategoryService;
