// CategoryService.js
const { Category, Product } = require("../Models");

class CategoryService {
  constructor() {}

  // 모든 카테고리 목록 조회 메소드(유저)
  async getCategories() {
    const categories = await Category.find({});
    return categories;
  }
  // 특정 카테고리 목록 조회 메소드 (유저)
  async getProductsByCategoryName(categoryName) {
    // 먼저 카테고리를 찾습니다.
    const category = await Category.findOne({ name: categoryName });
    if (!category) {
      throw new Error(`${categoryName} 카테고리를 찾을 수 없습니다.`);
    }
    // 해당 카테고리에 속한 상품들을 조회합니다.
    const products = await Product.find({ category: category._id }).populate(
      "category"
    );
    return products;
  }
}

module.exports = CategoryService;
