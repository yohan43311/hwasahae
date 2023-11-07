const item_date = {
  id: 1,
  image: "",
  productName: "비타민 C 화이티닝 크림 60g",
  price: 32000,
  deliveryFee: 0,
};

//갯수
let item_su = 1;

//총 상품 가격
let total_price = () => {
  const total_num = item_date.price * item_su;
  return total_num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

//장바구니 폼
const cart = document.querySelector(".cart");
cart.innerHTML = `
<form action="" id="payment-form">
  <div class="totalPayment box">
    <span class="title">주문 리스트</span>
    <table class="totalPayment-table">
      <thead>
        <tr>
          <th>상품 이미지</th>
          <th>상품명</th>
          <th>수량</th>
          <th>가격</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody id="productTable">
        <tr>
          <td><img src="./img/product_1.jpg" alt="상품 이미지" style="width: 100px;
          height: 100px;">${item_date.image}</td>
          <td>${item_date.productName}</td>
          <td>
            <button class="minus">-</button>
            <input class="item_many" type="text" value="${item_su}">
            <button class="plus">+</button></td>
            <td><span class="item_total">${total_price()}</span>원</td>
          <td><button class="deleteBtn" onclick="deleteRow(this)">삭제</button></td>
        </tr>
        <tr>
          <!-- 총결제 금액 -->
          <td colspan="5">총 금액 : <span class="item_total">${total_price()}</span>원</td>
        </tr>
      </tbody>
    </table>
  </div>
</form>
  <div class="btnBox">
    <button class="btn order"><a href="/payment">주문하기</a></button>
    <button class="btn shopping"><a href="/">계속 쇼핑하기<a></button>
    <button class="btn cartDelete">장바구니 비우기</button>
  </div>
  <div style="clear: both;"></div>`;

//장바구니 - 제품수량 증가 및 감소
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const item_many = document.querySelectorAll(".item_many");
const item_total = document.querySelectorAll(".item_total");

//가격표시
function priceCommas() {
  for (let i = 0; i < item_total.length; i++) {
    item_total[i].innerHTML = item_date.price
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
priceCommas();

//플러스 버튼
function handlePlusClick() {
  item_su = item_su + 1;
  for (let i = 0; i < item_many.length; i++) {
    item_many[i].value = item_su;
  }
  for (let i = 0; i < item_total.length; i++) {
    item_total[i].innerHTML = total_price();
  }
}
plus.addEventListener("click", (e) => {
  e.preventDefault();
  handlePlusClick();
});

//마이너스 버튼
function handleMinusClick() {
  if (item_many[0].value == 1) {
    return alert("최소수량 입니다");
  }
  item_su = item_su - 1;
  for (let i = 0; i < item_many.length; i++) {
    item_many[i].value = item_su;
  }
  for (let i = 0; i < item_total.length; i++) {
    item_total[i].innerHTML = total_price();
  }
}

minus.addEventListener("click", (e) => {
  e.preventDefault();
  handleMinusClick();
});

//삭제버튼 해당 상품 삭제
function deleteRow(button) {
  let row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

//장바구니 비우기
const cartDelete = document.querySelector(".cartDelete");
function cartDelRow() {
  const tbody = document.querySelector("table tbody");
  tbody.parentNode.removeChild(tbody);
}
cartDelete.addEventListener("click", (e) => {
  e.preventDefault();
  cartDelRow();
});

//주문하기
