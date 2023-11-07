// CategoryService.js
const { Category } = require("../Models");

class CategoryService {
  constructor() {}
  // 카테고리 추가 메소드(관리자)
  async createCategory(name) {
    const newCategory = new Category({ name });
    const result = await newCategory.save();
    return result;
  }
  // 카테고리 수정 메소드 (관리자)
  async updateCategory(categoryId, newName) {
    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      { name: newName },
      { new: true } // 이 옵션은 업데이트된 문서를 반환하도록 설정합니다.
    );

    if (!updatedCategory) {
      throw new Error("해당 카테고리를 찾을 수 없습니다.");
    }

    return updatedCategory;
  }

  // 카테고리 삭제 메소드 (관리자)
  async deleteCategory(categoryId) {
    const deletedCategory = await Category.findByIdAndRemove(categoryId);

    if (!deletedCategory) {
      throw new Error("해당 카테고리를 찾을 수 없습니다.");
    }

    return deletedCategory;
  }
  // 카테고리 목록 조회 메소드(유저)
  async getCategories() {
    const categories = await Category.find({});
    return categories;
  }
}

module.exports = CategoryService;
