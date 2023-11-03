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
  
  // 템플릿 정의
  const productTemplate = `
    <div class="tb-center">
      <div class="box">
        <div class="thumb salebox">
          <a href="">
            <img class="MS_prod_img_m" src="{{imageSrc}}" alt="{{productName}}">
          </a>
        </div>
        <ul class="info">
          <li class="dsc">{{productName}}</li>
          <li class="pdt12">
            <span class="consumer">{{consumerPrice}}원</span>
            <span class="price">{{price}}원</span>
          </li>
        </ul>
      </div>
    </div>
  `;
  
  const products = [
    {
      imageSrc: "./img/shopimages/1.jpg",
      productName: "동백 브라이트닝 광채쿠션",
      consumerPrice: "24,000",
      price: "24,000",
    },
    {
      imageSrc: "./img/shopimages/2.jpg",
      productName: "NEW 비타민C 화이트닝 2종 세트상품",
      consumerPrice: "106,000",
      price: "24,000",
    },
  ];
  
  const productContainer = document.querySelector(".items");
  
  // 상품 데이터를 반복하여 템플릿을 적용하고 웹 페이지에 추가
  products.forEach((product) => {
    const productHTML = productTemplate
      .replace("{{imageSrc}}", product.imageSrc)
      .replace("{{productName}}", product.productName)
      .replace("{{consumerPrice}}", product.consumerPrice)
      .replace("{{price}}", product.price);
  
    // 새로운 상품 행을 생성하고 템플릿을 추가
    const newRow = document.createElement("tr");
    newRow.innerHTML = productHTML;
  
    // 웹 페이지에 상품 추가
    productContainer.appendChild(newRow);
  });
  