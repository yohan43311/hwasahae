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

const info_checkBox = document.getElementById("info_checkBox");
//주문자 정보
const name1 = document.querySelector("#name1");
const phone1 = document.querySelector("#phone1");
//배송 정보
const name2 = document.querySelector("#name2");
const phone2 = document.querySelector("#phone2");
const depositorName = document.querySelector("#depositorName");
const roadAddress = document.querySelector("#sample4_roadAddress");
//상품리스트
const itemPrice = document.querySelector("#item_price");
const itemCount = document.querySelector("#item_count");
const totalPrice = document.querySelector("#total_price");
const productName = document.querySelector("#product_name");
const deliveryFee = document.querySelector("#deliveryFee");

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

//결제 버튼 눌렀을 때 동작
const paymentEvent = () => {};
const paymentBtn = document.querySelector("#paymentBtn");

/* 결제 api */
async function paymentResponse() {
  const req = {
    receiver: {
      name: name1.value,
      phone: phone1.value,
      address: roadAddress.value,
    },
    orderedItems: [
      {
        quantity: itemCount.value,
        price: itemPrice.value,
        product: productName.value,
      },
    ],
    deliveryFee: deliveryFee.value,
    totalPrice: totalPrice.value,
  };

  const response = await fetch("http://localhost:3000/payment", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
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

//취소 및 결제 버튼
// const cancelBtn = document.querySelector(".cancelBtn");
// const paymentBtn = document.querySelector(".paymentBtn");

//결제 버튼을 눌렀을 때의 동작
// document.getElementById("paymentBtn").addEventListener("click", (e) => {
//   e.preventDefault();

//결제 api 요청
// });
