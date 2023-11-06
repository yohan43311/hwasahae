const { Product, Category } = require("../Models");

class ProductService {
  constructor() {}

  // 상품 생성 메소드
  async createProduct(productDTO) {
    const { name, images, description, price, maker, category } = productDTO;

    // 카테고리가 이미 존재하는지 확인
    let categoryDoc = await Category.findOne({ name: category });

    // 존재하지 않으면 에러 생성
    if (!categoryDoc) {
      const error = new Error("해당 카테고리가 존재하지 않습니다.");
      error.status = 400;
      throw error;
    }

    // 새 상품 문서 생성
    const newProduct = new Product({
      name,
      images,
      description,
      price,
      maker,
      category: categoryDoc._id, // 카테고리 문서의 ID를 참조합니다.
    });

    // 상품 저장
    const savedProduct = await newProduct.save();

    return savedProduct;
  }

  // 모든 상품 목록 조회 메소드
  async listProducts() {
    const products = await Product.find({}).populate("category"); // 카테고리 정보를 포함하여 모든 상품을 조회합니다.
    return products; // 조회된 상품들을 반환합니다.
  }

  // 모든 상품 목록 조회 메소드
  async listProducts() {
    const products = await Product.find({}).populate("category"); // 카테고리 정보를 포함하여 모든 상품을 조회합니다.
    return products; // 조회된 상품들을 반환합니다.
  }

  // 특정 상품 목록 조회 메소드
  async detailProduct(productId) {
    const product = await Product.findById(productId).populate("category"); // 특정 상품을 조회합니다.
    if (!product) {
      throw new Error("해당 상품을 찾을 수 없습니다.");
    }
    return product; // 조회된 상품을 반환합니다.
  }

  // 상품 정보 수정 메소드
  async modifyProduct(productId, updateData) {
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: productId },
      updateData,
      { new: true }
    );
    if (!updatedProduct) {
      throw new Error("상품을 찾을 수 없습니다.");
    }
    return updatedProduct;
  }

  // 상품 정보 삭제 메소드
  async deleteProduct(productId) {
    const productExists = await Product.findById(productId);
    if (!productExists) {
      throw new Error("삭제할 상품을 찾을 수 없습니다.");
    }

    const currentDate = new Date();
    const delProduct = await Product.findOneAndUpdate(
      { _id: productId },
      { deletedAt: currentDate },
      { new: true }
    );

    if (!delProduct) {
      throw new Error("상품 삭제 처리 중 오류가 발생했습니다.");
    }
    return delProduct;
  }
}
module.exports = ProductService;
