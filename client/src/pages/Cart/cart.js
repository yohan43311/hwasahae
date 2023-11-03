const orders = {
  id: 1,
  image: "",
  productName: "비타민 C 화이티닝 크림 60g",
  quantity: 1,
  price: 32000,
};

//갯수
let item_su = 1;

//총 상품 가격
let total_price = () => {
  const total_num = orders.price * item_su;
  return total_num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

//장바구니 폼
const cart = document.querySelector(".cart");
cart.innerHTML = ` 
<form action="" method=""> 
<div class="productList box">
  <p class="title">장바구니</p>
  <table id="orderTable">
    <tr>
      <th>번호</th>
      <th>이미지</th>
      <th>상품명</th>
      <th>수량</th>
      <th>가격</th>
      <th>삭제</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${orders.id}</td>
      <td><img src="./img/product_1.jpg" alt="상품 이미지">${orders.image}</td>
      <td>${orders.productName}</td>
      <td><button class="minus">-</button>${orders.quantity}<button class="plus">+</button></td>
      <td>${orders.price}</td>
      <td><button class="deleteBtn">삭제</button></td>
    </tr>
  </tbody>
  </table> 
  <!-- 최종 결제 금액 -->
  <div class="totalPayment box">
    <p id="totalPrice">${orders.price}원</p>
  </div>
</div>
</form>`;

//제품수량 증가 및 감소

// 총 가격 계산

//삭제 버튼
//삭제버튼 클릭시 해당하는 상품 삭제
const deleteBtn = document.querySelector(".deleteBtn");
deleteBtn.addEventListener("click", (DelBtn) => {
  let row = DelBtn.parentNode.parentNode;
  row.parentNode.removeChild(row);
  console.log(DelBtn);
});
