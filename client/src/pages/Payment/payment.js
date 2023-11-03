//결제 폼
const payment = document.querySelector(".payment");

payment.innerHTML = ` 
<!-- 주문리스트 목록 -->
<form action="" id="payment-form">
<div class="productList box">
  <p class="title">주문리스트</p>
    <table id="orderTable">
      <tr>
        <th>이미지</th>
        <th>상품명</th>
        <th>수량</th>
        <th>가격</th>
        <th>삭제</th>
      </tr>
    </table> 
</div>

<!-- 주문자 정보 -->
<div class="customerInfo box">
  <p class="title">주문자정보</p>
    <table id="customerTable">
      <tr>
        <td>
          <span>이름</span> 
          <input type="text" id="name" placeholder="이름">
        </td>
      </tr>
      <tr>
        <td>
          <span>이메일</span> 
          <input type="email" id="email" placeholder="이메일">
        </td>
      </tr>
      <tr>
        <td>
          <span>연락처</span>
          <input type="tel" id="phone" placeholder="연락처">
        </td>
      </tr>
    </table>
</div>

<!-- 배송 정보 -->
<div class="deliveryInfo box">
  <p class="title">베송 정보
    <label type="checkbox" name="getInfo" for="" onclick="copyData()">
    </label>
  </p>
    <table id="customerTable">
      <tr>
        <td>
          <span>이름</span> 
          <input type="text" id="name" placeholder="이름">
        </td>
      </tr>
      <tr>
        <td>
          <span>연락처</span> 
          <input type="tel" id="phone" placeholder="연락처">
        </td>
      </tr>
      <tr>
        <td>
          <span>주소</span>
          <div>
            <input type="text" id="sample4_postcode" placeholder="우편번호">
            <input type="button" id="adressBtn" onclick="sample4_execDaumPostcode()" value="우편번호 찾기">
            <input type="text" id="sample4_roadAddress" placeholder="도로명주소">
            <input type="text" id="sample4_jibunAddress" placeholder="지번주소">
            <span id="guide" style="color:#999;display:none"></span>
            <input type="text" id="sample4_detailAddress" placeholder="상세주소">
            <input type="text" id="sample4_extraAddress" placeholder="참고항목">
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <span>주문메세지</span> 
          <input type="text" id="message" placeholder="메세지를 입력해주세요">
        </td>
      </tr>
      <tr>
        <td>
          <span>무통장 입금자명</span> 
          <input type="text" id="depositorName" placeholder="입금자명">
        </td>
      </tr>
    </table>
</div>

<!-- 결제 수단 보류! -->
<div class="paymentMethod box">
  <span class="title">결제 방법</span>
  <div id="payment-method"></div>
  <div id="agreement"></div> 
</div>

<!-- 최종 결제 금액 -->
<div class="totalPayment box">
  <span class="title">총 결제 금액</span>
  <table class="totalPayment-table">
    <thead>
        <tr>
            <th>상품</th>
            <th>수량</th>
            <th>가격</th>
        </tr>
    </thead>
    <tbody id="productTable">
        <!---->
    </tbody>
  </table>
  <p id="totalPrice">총 가격: 0원</p>
</div>

  <div class="btnBox">
    <button class="btn cancelBtn">주문취소</button>
    <button class="btn paymentBtn">결제하기</button>
  </div>
  <div style="clear: both;"></div>
</form>`;

//상품 리스트
//임시적으로 값을 넣은 것
const orders = [
  {
    image: "./img/product_1.jpg",
    productName: "비타민 C 화이티닝 크림 60g",
    quantity: 1,
    price: 32000,
    delete: "",
  },
  {
    image: "./img/product_2.jpg",
    productName: "카멜리아 페이스 오일",
    quantity: 1,
    price: 35000,
    delete: "",
  },
  {
    image: "./img/product_3.jpg",
    productName: "리포좀 스킨 소프너",
    quantity: 2,
    price: 29000,
    delete: "",
  },
];

const orderTable = document.getElementById("orderTable");

//주문 데이터를 테이블 추가
orders.forEach((order) => {
  const row = orderTable.insertRow();
  const imageCell = row.insertCell(0);
  const productCell = row.insertCell(1);
  const quantityCell = row.insertCell(2);
  const priceCell = row.insertCell(3);
  const deleteBtnCell = row.insertCell(4);

  //이미지
  const image = document.createElement("img");
  image.src = order.image;
  image.alt = order.productName;
  image.style.maxWidth = "100%";
  image.style.maxHeight = "80px";
  imageCell.appendChild(image);

  //삭제버튼
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtnCell.appendChild(deleteBtn);
  deleteBtn.textContent = "삭제";
  deleteBtn.style.width = "100%";
  deleteBtn.style.padding = "10px";
  deleteBtn.style.borderRadius = "10px";
  deleteBtn.style.border = "none";
  deleteBtn.style.cursor = "pointer";
  deleteBtn.onclick = function () {
    deleteRow(this);
  };

  //삭제버튼 클릭시 해당하는 상품 삭제
  function deleteRow(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }

  productCell.textContent = order.productName;
  quantityCell.textContent = order.quantity;
  priceCell.textContent = `${order.price}원`;
});

//배송 정보 -->
function copyData() {}

//총 결제 금액
const productTable = document.getElementById("productTable");

let totalPayment = 0;

orders.forEach((product) => {
  const row = productTable.insertRow();
  const productCell = row.insertCell(0);
  const quantityCell = row.insertCell(1);
  const priceCell = row.insertCell(2);

  productCell.textContent = product.productName;
  quantityCell.textContent = product.quantity;
  priceCell.textContent = product.price + "원";
});

// 총 가격 계산
const totalPriceElement = document.getElementById("totalPrice");
const total = orders.reduce((total, product) => total + product.price, 0);
totalPriceElement.textContent = "총 가격: " + total + "원";
