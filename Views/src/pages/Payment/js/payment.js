//상품 리스트
//임시적으로 값을 넣은 것
const item_date = {
  id: 1,
  image: "",
  productName: "비타민 C 화이티닝 크림 60g",
  price: 32000,
  deliveryFee: 0,
};

//갯수
let item_su = 1;

//총 금액 = 상품금액 * 갯수
let total_price = () => {
  const total_num = item_date.price * item_su;
  return total_num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

//총 결제 금액 = 상품금액 * 갯수 + 배송비

//결제 폼
const payment = document.querySelector(".payment");

payment.innerHTML = ` 
<!-- 주문리스트 목록 -->
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
        </tr>
    </thead>
    <tbody id="productTable">
    <tr>
      <td><img src="./img/product_1.jpg" style="width: 100px;
      height: 100px;" alt="상품 이미지">${item_date.image}</td>
      <td>${item_date.productName}</td>
      <td>
        <button type="button" class="minus">-</button>
          <input class="item_many" type="text" value="${item_su}">
        <button type="button" class="plus">+</button></td>
      <td><span class="item_total"></span> 원</td>
    </tr>
    </tbody>
  </table>
</div>

<!-- 주문자 정보 -->
<div class="customerInfo box">
  <p class="title">주문자정보</p>
    <table id="customerTable">
      <tr>
        <td>
          <label for="name1">이름</label> 
          <input type="text" class="input-text" id="name1" placeholder="이름">
        </td>
      </tr>
      <tr>
        <td>
          <label for="email1">이메일</label> 
          <input type="email" id="email1" placeholder="이메일">
          <p class="msg" id="email-message"></p>
        </td>
      </tr>
      <tr>
        <td>
          <label for="phone1">연락처</label>
          <input type="tel" oninput="oninputPhone(this)" maxlength="11" id="phone1" placeholder="전화번호를 입력해주세요.">
        </td>
      </tr>
    </table>
</div>

<!-- 배송 정보 -->
<div class="deliveryInfo box">
  <p class="title">베송 정보</p>
  <span class="infoSame-box">
    <input type="checkbox" id="info_checkBox"/> 
    <label for="info_checkBox">위 정보와 같음</label>
  </span>
    <table id="customerTable">
      <tr>
        <td>
          <label for="name2">이름</label> 
          <input type="text" class="input-text" id="name2" placeholder="이름">
        </td>
      </tr>
      <tr>
        <td>
          <label for="phone2">연락처</label> 
          <input type="tel" oninput="oninputPhone(this)" maxlength="11" id="phone1" placeholder="전화번호를 입력해주세요.">
        </td>
      </tr>
      <tr>
        <td>
          <label>주소</label>
          <div style="margin-top: 20px;">
            <input type="text" class="input-text" id="sample4_postcode" placeholder="우편번호">
            <input type="button" id="addressBtn" onclick="sample4_execDaumPostcode()" value="우편번호 찾기">
            <input type="text" class="input-text" id="sample4_roadAddress" placeholder="도로명주소">
            <input type="text" class="input-text" id="sample4_jibunAddress" placeholder="지번주소">
            <span id="guide" style="color:#999;display:none"></span>
            <input type="text" class="input-text" id="sample4_detailAddress" placeholder="상세주소">
            <input type="text" class="input-text" id="sample4_extraAddress" placeholder="참고항목">
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <label for="message">주문메세지</label> 
          <input type="text" class="input-text" id="message" placeholder="메세지를 입력해주세요">
        </td>
      </tr>
      <tr>
        <td>
          <label for="depositorName">무통장 입금자명</label> 
          <input type="text" class="input-text" id="depositorName" placeholder="입금자명">
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
        <th>상품 이미지</th>
        <th>상품명</th>
        <th>수량</th>
        <th>배송비</th>
        <th>가격</th>
      </tr>
    </thead>
    <tbody id="productTable2">
      <tr>
        <td>
        <img src="./img/product_1.jpg" style="width: 100px;
        height: 100px;" alt="상품 이미지">
        ${item_date.image}
        </td>
        <td>${item_date.productName}</td>
        <td><input class="item_many" type="text" value="${item_su}"></td>
        <td>${item_date.deliveryFee}</td>
        <td><span class="item_total">${total_price()}</span>원</td>
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
    <button class="btn cancelBtn">주문취소</button>
    <button class="btn paymentBtn">결제하기</button>
  </div>
  <div style="clear: both;"></div>
`;

//주문 리스트 - 제품수량 증가 및 감소
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

/**
 * 체크박스 정보 가져오기
 */
const info_checkBox = document.getElementById("info_checkBox");
//주문자 정보
const name1 = document.querySelector("#name1");
const phone1 = document.querySelector("#phone1");
//배송 정보
const name2 = document.querySelector("#name2");
const phone2 = document.querySelector("#phone2");
const depositorName = document.querySelector("#depositorName");

function getCheckboxValue() {
  if (info_checkBox.checked) {
    name2.value = name1.value;
    phone2.value = phone1.value;
    depositorName.value = name1.value;
  } else {
    name2.value = "";
    phone2.value = "";
    depositorName.value = "";
  }
}

info_checkBox.addEventListener("change", () => {
  getCheckboxValue();
});

//취소 및 결제 버튼
// const cancelBtn = document.querySelector(".cancelBtn");
// const paymentBtn = document.querySelector(".paymentBtn");

//결제 버튼을 눌렀을 때의 동작
// document.getElementById("paymentBtn").addEventListener("click", (e) => {
//   e.preventDefault();

//결제 api 요청
// });
