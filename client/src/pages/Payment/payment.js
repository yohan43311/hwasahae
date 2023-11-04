//상품 리스트
//임시적으로 값을 넣은 것
const item_date = {
  id: 1,
  image: "",
  productName: "비타민 C 화이티닝 크림 60g",
  price: 32000,
  delivery: 0,
};

//갯수
let item_su = 1;

//총 금액 = 상품금액 * 갯수
let total_price = () => {
  const total_num = item_date.price * item_su;
  return total_num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

//결제 폼
const payment = document.querySelector(".payment");

payment.innerHTML = ` 
<!-- 주문리스트 목록 -->
<form action="" id="payment-form">
<div class="productList box">
  <p class="title">주문리스트</p>
  <table id="orderTable">
    <thead>
      <tr>
        <th>번호</th>
        <th>상품 이미지</th>
        <th>상품명</th>
        <th>수량</th>
        <th>가격</th>
        <th>삭제</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${item_date.id}</td>
        <td><img src="./img/product_1.jpg" alt="상품 이미지">${item_date.image}</td>
        <td>${item_date.productName}</td>
        <td>
          <button class="minus">-</button>
            <input class="item_su" type="text" value="${item_su}">
          <button class="plus">+</button>
        </td>
        <td>${item_date.price}</td>
        <td><button class="deleteBtn" onclick="deleteRow(this)">삭제</button></td>
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
            <th>상품 이미지</th>
            <th>상품명</th>
            <th>수량</th>
            <th>배송비</th>
            <th>가격</th>
        </tr>
    </thead>
    <tbody id="productTable">
      <td><img src="./img/product_1.jpg" alt="상품 이미지">${item_date.image}</td>
      <td>${item_date.productName}</td>
      <td>${item_su}</td>
      <td>${item_date.delivery}</td>
      <td>${item_date.price}</td>
    </tbody>
  </table>
  <!-- 총결제 금액 -->
  <p id="totalPrice"></p>
</div>

  <div class="btnBox">
    <button class="btn cancelBtn">주문취소</button>
    <button class="btn paymentBtn">결제하기</button>
  </div>
  <div style="clear: both;"></div>
</form>`;

//수량
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");

// 총 가격 계산

//삭제버튼 해당 상품 삭제
function deleteRow(button) {
  let row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

//배송 정보
function copyData() {}
