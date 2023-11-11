
const categoryNav = document.querySelector('.list')
let linkName = []
// 카테고리 데이터로 불러와서 만들기.
async function fetchData() {
  try {
    const response = await fetch('http://localhost:3000/category');
    const data = await response.json();
    console.log(data);

    const category_item_nav = data.map((item, index) => `
      <li><a href="" class="linkName" data-name="${item.name}">${item.name}</a></li>
    `).join('');
    categoryNav.innerHTML = category_item_nav;

    const linkBtns = document.querySelectorAll('.linkName');

    linkBtns.forEach(linkBtn => {
      linkBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const dataNameValue = linkBtn.getAttribute('data-name');
        alert(dataNameValue);
        linkName = []
        linkName.push(dataNameValue);

        listHtml(linkName)
      });
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchData();

// const koreanText = '스킨'; // 여기에 실제로 사용하려는 한글 텍스트를 넣어주세요
// fetch(`http://localhost:3000/category/products/${koreanText}`).then((response) => response.json()).then((data)=>console.log(data))

const listHtml = async (link) => {
  console.log(link);
  const encodedLink = encodeURIComponent(link);
  let notLink;

  if (link) {
    notLink = fetch(`http://localhost:3000/category/products/${encodedLink}`);
  } else {
    notLink = fetch(`http://localhost:3000/category/products/스킨`);
  }

  const response = await notLink;
  const items = await response.json();
  console.log(items);
  // 상품 템플릿화
  function createProductTemplate(imageSrc, title, price, id) {
    const productTemplate = `
          <div class="product">
            <div class="product-image">
              <a href="/item?id=${id}">
                <img src="${imageSrc}" alt="상품 섬네일">
              </a>
            </div>
            <div class="product-info">
              <div class="product-title">${title}</div>
              <div class="product-price">
                <span>${price} 원</span>
              </div>
            </div>
          </div>
        `;
    return productTemplate;
  }
  // 동적 상품 추가
  const productContainer = document.querySelector('.product-container');
  // 반복해서 상품을 추가
  productContainer.innerHTML = '';
  items.forEach((item) => {
    const productElement = createProductTemplate(item.images[0], item.name, item.price, item._id);
    productContainer.innerHTML += productElement;
  });
};

// 예시 사용법:
listHtml();


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


