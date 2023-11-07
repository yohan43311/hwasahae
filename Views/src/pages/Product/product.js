document.addEventListener("DOMContentLoaded", function() {
    const liElements = document.querySelectorAll("#productClass .cate-wrap .class-list ul li");
  
    liElements.forEach(function(li) {
      li.addEventListener("mouseover", function() {
        // 마우스 호버 시 배경색과 테두리 색 변경
        li.classList.add("active");
      });
  
      li.addEventListener("mouseout", function() {
        // 마우스가 빠져나가면 배경색과 테두리 색을 제거하여 원래대로 돌립니다.
        li.classList.remove("active");
      });
    });
  });

//상품 템플릿화
function createProductTemplate(imageSrc, title, price) {
  const productTemplate = `
    <div class="product">
      <div class="product-image">
        <a href="">
          <img src="${imageSrc}" alt="상품 섬네일">
        </a>
      </div>
      <div class="product-info">
        <div class="product-title">${title}</div>
        <div class="product-price">
          <span>${price}</span>
        </div>
      </div>
    </div>
  `;
  return productTemplate;
}

//동적상품추가
const productContainer = document.querySelector('.product-container');

//상품 데이터 배열
const products = [
  { imageSrc: './img/shopimages/1.jpg', title: '동백 브라이트닝 광채쿠션', price: '24,000원' },
  { imageSrc: './img/shopimages/2.jpg', title: '동백 브라이트닝 광채쿠션', price: '24,000원' },
  { imageSrc: './img/shopimages/3.jpg', title: '동백 브라이트닝 광채쿠션', price: '24,000원' },
  { imageSrc: './img/shopimages/4.jpg', title: '동백 브라이트닝 광채쿠션', price: '24,000원' },
  { imageSrc: './img/shopimages/5.jpg', title: '동백 브라이트닝 광채쿠션', price: '42,000원' },
  // 다른 상품들 추가
];

// 반복해서 상품을 추가
products.forEach((productData) => {
  const productElement = createProductTemplate(productData.imageSrc, productData.title, productData.price);
  productContainer.innerHTML += productElement;
});



fetch("http://localhost:3000/products/")
  .then((response) => response.json())
  .then((data) => console.log(data));