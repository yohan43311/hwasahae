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
// let item_su = 1;

//총 금액 = 상품금액 * 갯수
let total_price = (price) => {
  // const total_num = item_date.price * item_su;
  return total_num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

//주문 리스트 - 제품수량 증가 및 감소
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const item_many = document.querySelectorAll(".item_many");
const item_total = document.querySelectorAll(".item_total");

//가격표시
// function priceCommas() {
//   for (let i = 0; i < item_total.length; i++) {
//     item_total[i].innerHTML = item_date.price
//       .toString()
//       .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   }
// }
// priceCommas();

//플러스 버튼
// function handlePlusClick() {
//   item_su = item_su + 1;
//   for (let i = 0; i < item_many.length; i++) {
//     item_many[i].value = item_su;
//   }
//   for (let i = 0; i < item_total.length; i++) {
//     item_total[i].innerHTML = total_price();
//   }
// }
// plus.addEventListener("click", (e) => {
//   e.preventDefault();
//   handlePlusClick();
// });

//마이너스 버튼
// function handleMinusClick() {
//   if (item_many[0].value == 1) {
//     return alert("최소수량 입니다");
//   }
//   item_su = item_su - 1;
//   for (let i = 0; i < item_many.length; i++) {
//     item_many[i].value = item_su;
//   }
//   for (let i = 0; i < item_total.length; i++) {
//     item_total[i].innerHTML = total_price();
//   }
// }

// function testFunc(params) {
//   document.querySelector(`#${params}`).value++;
// }

// minus.addEventListener("click", (e) => {
//   e.preventDefault();
//   handleMinusClick();
// });

//주문자 정보
const name1 = document.querySelector("#name1");
const email1 = document.querySelector("#email1");
const phone1 = document.querySelector("#phone1");
//배송 정보
const name2 = document.querySelector("#name2");
const phone2 = document.querySelector("#phone2");
const depositorName = document.querySelector("#depositorName");
const roadAddress = document.querySelector("#sample4_roadAddress");
const jibunAddress = document.querySelector("#sample4_jibunAddress");
const detailAddress = document.querySelector("#sample4_detailAddress");
//상품리스트
const itemPrice = document.querySelector("#item_price");
const itemCount = document.querySelector("#item_count");
const totalPrice = document.querySelector("#total_price");
const productName = document.querySelector("#product_name");
const deliveryFee = document.querySelector("#deliveryFee");
//회원가입한 사용자는 주문자 정보와 배송 정보의 값이 바로 들어오게 해야함

/**
 * 회원가입 한 주문자 정보, 배송 정보 가져오기
 * 비회원일 시에는 직접 입력해야함
 * 전화번호는 직접 작성해줘야함 -> input값에 필수인 것을 입력하지 않았을 경우
 * alert알려주고 필수 입력을 다 했을 경우는 결제하기 버튼을 눌렀을 때 결제가 넘어가게 하기
 */
window.onload = function () {
  // 로컬스토리지에서 사용자 정보 가져오기
  const storedUserInfo = localStorage.getItem("userInfo");

  if (storedUserInfo) {
    // 저장된 사용자 정보가 있다면 결제 페이지의 입력 필드에 자동으로 채우기
    const userInfo = JSON.parse(storedUserInfo);

    //주문자 정보 가져오기
    name1.value = userInfo.name;
    email1.value = userInfo.email;

    //배송 정보
    name2.value = userInfo.name;
    roadAddress.value = userInfo.roadAddress;
    jibunAddress.value = userInfo.jibunAddress;
    detailAddress.value = userInfo.detailAddress;
  }
};

const info_checkBox = document.getElementById("info_checkBox");

/*체크박스 정보*/
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

const productNumbers = [
  { name: "product1", price: "32000" },
  { name: "product2", price: "32000" },
  { name: "product3", price: "32000" },
];

const testValue = 32000;

const productTables = document.querySelector("#productTable");
productTables.innerHTML = ``;
productNumbers.forEach((element) => {
  console.log(element);
  productTables.innerHTML += `<tr><td><img src="./img/product_1.jpg" style="width: 100px;
  height: 100px;" alt="상품 이미지"></td>
        <td><span id="product_name">${item_date.productName}</span></td>
        <td>
          <button type="button" class="minus" onClick="document.querySelector('#${element.name}_count').value--; document.querySelector('#${element.name}_price').textContent -= ${element.price};">-</button>
          <input class="item_many" type="text" id="${element.name}_count" value=1>
          <button type="button" class="plus" onClick="document.querySelector('#${element.name}_count').value++; document.querySelector('#${element.name}_price').textContent += ${element.price};">+</button>
        </td>
        <td><span class="item_total" id="${element.name}_price">${element.price}</span> 원</td></tr>`;
});

/* 결제 api */
async function paymentResponse(e) {
  e.preventDefault();
  const payment_URL = "http://localhost:3000/orders/";
  const req = {
    receiver: {
      name: name1.value,
      phone: phone1.value,
      address: roadAddress.value,
    },
    //
    orderedItems: [
      {
        quantity: itemCount.value,
        price: itemPrice.value,
        product: productName.value,
      },
    ],
    //총 결제 금액
    deliveryFee: deliveryFee.value,
    totalPrice: totalPrice.value,
  };

  const option = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  };

  await fetch(payment_URL, {
    ...option,
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/paid"; //결제성공
      } else {
        if (res.err) {
          return alert("결제 실패");
        }
      }
    });
}

paymentResponse();

//결제 버튼
const paymentBtn = document.querySelector("#paymentBtn");
paymentBtn.addEventListener("click", () => {
  const productList = localStorage.getItem("cart");

  if (productList) {
    alert("결제가 성공되었습니다!");
    location.href = "/paid";
  } else {
    alert("결제가 실패되었습니다!");
  }
});

//로컬스토리지에서 사용자 정보 가져오기

//취소 및 결제 버튼
// const cancelBtn = document.querySelector(".cancelBtn");
// const paymentBtn = document.querySelector(".paymentBtn");
