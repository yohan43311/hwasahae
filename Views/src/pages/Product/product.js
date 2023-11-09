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
// function createProductTemplate(imageSrc, title, price) {
//   const productTemplate = `
//     <div class="product">
//       <div class="product-image">
//         <a href="">
//           <img src="${imageSrc}" alt="상품 섬네일">
//         </a>
//       </div>
//       <div class="product-info">
//         <div class="product-title">${title}</div>
//         <div class="product-price">
//           <span>${price}원</span>
//         </div>
//       </div>
//     </div>
//   `;
//   return productTemplate;
// }

//동적상품추가
const productContainer = document.querySelector('.product-container');

//상품 데이터 배열
const products = [
  { imageSrc: './img/shopimages/1.jpg', title: '동백 브라이트닝 광채쿠션', price: '24,000' },
  { imageSrc: './img/shopimages/2.jpg', title: '동백 브라이트닝 광채쿠션', price: '24,000' },
  { imageSrc: './img/shopimages/3.jpg', title: '동백 브라이트닝 광채쿠션', price: '24,000' },
  { imageSrc: './img/shopimages/4.jpg', title: '동백 브라이트닝 광채쿠션', price: '24,000' },
  { imageSrc: './img/shopimages/5.jpg', title: '동백 브라이트닝 광채쿠션', price: '42,000' },
  // 다른 상품들 추가
];

// //반복해서 상품을 추가
// products.forEach((productData) => {
//   const productElement = createProductTemplate(productData.imageSrc, productData.title, productData.price);
//   productContainer.innerHTML += productElement;
// });

//-=================================================

fetch("http://localhost:3000/products/")
  .then((response) => response.json())
  .then((data) => {
        console.log(data)
        mdItem = data;
        const mdItemMap = mdItem.map(item =>` 
        <div class="product">
        <div class="product-image">
          <a href="/item?id=${item._id}">
            <img src="${item.images[0]}" alt="상품 섬네일">
          </a>
        </div>
        <div class="product-info">
          <div class="product-title">${item.name}</div>
          <div class="product-price">
            <span>${item.price}원</span>
          </div>
        </div>
      </div>
    `).join('')

    const productContainer = document.querySelector('.product-container');
    productContainer.innerHTML = mdItemMap
  });





//  // API로부터 데이터를 가져와서 화면에 표시하는 함수
//  function fetchProducts() {
//   fetch('http://localhost:3000/products/')
//       .then(response => response.json())
//       .then(data => {
//           const productContainer = document.querySelector('.product-container');
          
//           // API에서 받은 데이터를 반복 처리하여 상품을 생성하고 표시
//           data.forEach(product => {
//               const productElement = createProductTemplate(product.images[0], product.name, product.price);
//               productContainer.innerHTML += productElement;
//           });
//       })
//       .catch(error => {
//           console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
//       });
// }

// // 페이지 로드 시 API로부터 상품 데이터 가져오기
// fetchProducts();
// });

//===============================================

// document.addEventListener("DOMContentLoaded", function() {
//   const liElements = document.querySelectorAll("#productClass .cate-wrap .class-list ul li");

//   liElements.forEach(function(li) {
//     li.addEventListener("mouseover", function() {
//       // 마우스 호버 시 배경색과 테두리 색 변경
//       li.classList.add("active");
//     });

//     li.addEventListener("mouseout", function() {
//       // 마우스가 빠져나가면 배경색과 테두리 색을 제거하여 원래대로 돌립니다.
//       li.classList.remove("active");
//     });
//   });

//   // 상품 템플릿화
//   function createProductTemplate(imageSrc, title, price) {
//     const productTemplate = `
//       <div class="product">
//         <div class="product-image">
//           <a href="">
//             <img src="${imageSrc}" alt="상품 섬네일">
//           </a>
//         </div>
//         <div class="product-info">
//           <div class="product-title">${title}</div>
//           <div class="product-price">
//             <span>${price}원</span>
//           </div>
//         </div>
//       </div>
//     `;
//     return productTemplate;
//   }

//   // 동적 상품 추가
//   const productContainer = document.querySelector('.product-container');

//   // API로부터 데이터를 가져와서 화면에 표시하는 함수
//   function fetchProducts() {
//     fetch('http://localhost:3000/products/')
//       .then(response => response.json())
//       .then(data => {
//         // 기존 상품 데이터 초기화
//         productContainer.innerHTML = '';

//         // API에서 받은 데이터를 반복 처리하여 상품을 생성하고 표시
//         data.forEach(product => {
//           const productElement = createProductTemplate(product.images[0], product.name, product.price);
//           productContainer.innerHTML += productElement;
//         });
//       })
//       .catch(error => {
//         console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
//       });
//   }

//   // 페이지 로드 시 API로부터 상품 데이터 가져오기
//   fetchProducts();
// });