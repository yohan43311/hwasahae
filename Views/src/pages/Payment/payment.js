//상품금액

//배송비
let deliveryPrice = 3000;
const deliveryFee = document.querySelector("#deliveryFee");
deliveryFee.innerHTML = `${deliveryPrice
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`;

//총 금액

// const PriceTotal = 10000; //총 금액

//바로구매 - localStorage에 담겨진 상품 가져오기
const buyItems = JSON.parse(localStorage.getItem("buyItem"));

//장바구니의 주문리스트 그대로 가져오는 로직 start
const getItems = JSON.parse(localStorage.getItem("cart")) || [];
// id의 끝자리 값을 기준으로 아이템 정렬
const sortedItems = getItems.sort((a, b) => {
  const lastDigitA = a.id % 10;
  const lastDigitB = b.id % 10;
  return lastDigitA - lastDigitB;
});

const itemMap = sortedItems.forEach((item, index) => {
  fetch(`http://localhost:3000/products/${item.id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      //갯수
      let item_su = item.count || 1; // 수량이 없으면 1로 설정

      //총 상품 가격
      let total_price = () => {
        const total_num = data.price * item_su;
        return total_num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };

      const MapItem = `
    <tr data-index="${index}">
      <td><img src="./img/product_1.jpg" alt="상품 이미지" style="width: 100px; height: 100px;"></td>
      <td><span class="product_name">${data.name}</span></td>
      <td>
        <input class="item_many" type="text" value="${item_su}" data-index="${index}">
      </td>
      <td><span class="item_total">${total_price()}</span>원</td>
    </tr>
  `;

      const pageSleeted = document.querySelector("#productTable");
      pageSleeted.innerHTML += MapItem;
    });
});
//장바구니의 주문리스트 그대로 가져오는 로직 end

let totalPrice = 0; //총가격 초기

// 각 fetch 요청을 저장할 배열 만들기.
const fetchPromises = getItems.map(async (item) => {
  const response = await fetch(`http://localhost:3000/products/${item.id}`);
  return await response.json();
});
console.log(fetchPromises);

// fetch 요청으로 위에서 만든 리절트쪽에 있는 데이터를 프로미스 올로 사용.
Promise.all(fetchPromises).then((productDataArray) => {
  getItems.forEach((index) => {
    const data = productDataArray[index]; //각 배열순서에맞는 데이터를 담는다.
    console.log(data);

    const MapItem = ``;

    console.log("totalPrice", totalPrice);

    const pageSleeted = document.querySelector("#productTable");
    pageSleeted.innerHTML += MapItem; //html

    const totalElement = () => {
      const totalBox = document.getElementById("totalPrice");
      totalBox.innerHTML = `총 가격: ${totalPrice
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`;
    }; // 총 가격을 표시할 위치에 id="totalPrice"인 요소를 추가
    totalElement();
  });
});

//회원가입한 사용자는 주문자 정보와 배송 정보의 값이 바로 들어오게 해야함

/**
 * 회원가입 한 주문자 정보, 배송 정보 가져오기
 * 비회원일 시에는 직접 입력해야함
 * 전화번호는 직접 작성해줘야함 -> input값에 필수인 것을 입력하지 않았을 경우
 * alert알려주고 필수 입력을 다 했을 경우는 결제하기 버튼을 눌렀을 때 결제가 넘어가게 하기
 */
// 로컬스토리지에서 사용자 정보 가져오기
const storedUserInfo = localStorage.getItem("userInfo");
if (storedUserInfo) {
  // 저장된 사용자 정보가 있다면 결제 페이지의 입력 필드에 자동으로 채우기
  const userInfo = JSON.parse(storedUserInfo);

  //주문자 정보 가져오기
  document.querySelector("#name1").value = userInfo.name;
  document.querySelector("#email1").value = userInfo.email;

  //배송 정보
  document.querySelector("#name2").value = userInfo.name;
  document.querySelector("#sample4_postcode").value = userInfo.zipcode;
  document.querySelector("#sample4_roadAddress").value = userInfo.address;
  document.querySelector("#sample4_detailAddress").value =
    userInfo.detailAddress;
}

const info_checkBox = document.getElementById("info_checkBox");

/*체크박스 정보*/
function getCheckboxValue() {
  if (info_checkBox.checked) {
    name2.value = name1.value;
    phone2.value = phone1.value;
  } else {
    name2.value = "";
    phone2.value = "";
  }
}

info_checkBox.addEventListener("change", () => {
  getCheckboxValue();
});

/* 결제 api */
async function paymentResponse(e) {
  e.preventDefault();
  const payment_URL = "http://localhost:3000/orders/";
  const req = {
    receiver: {
      name: name1,
      phone: phone1,
      address: roadAddress,
    },
    //
    orderedItems: [
      {
        quantity: itemCount,
        price: itemPrice,
        product: productName,
      },
    ],
    //총 결제 금액
    deliveryFee: deliveryFee,
    totalPrice: totalPrice,
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

//결제 버튼
// const paymentBtn = document.querySelector("#paymentBtn");
// paymentBtn.addEventListener("click", () => {
//   const productList = localStorage.getItem("cart");

//   if (productList) {
//     alert("결제가 성공되었습니다!");
//     location.href = "/paid";
//   } else {
//     alert("결제가 실패되었습니다!");
//   }
// });

//취소 및 결제 버튼
const cancelBtn = document.querySelector(".cancelBtn");
const paymentBtn = document.querySelector(".paymentBtn");

paymentBtn.addEventListener("click", function () {
  const cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
  const buyItem = JSON.parse(localStorage.getItem("buyItem"));

  if (cartProducts.length > 0 || buyItem.length > 0) {
    alert("결제가 성공적으로 완료되었습니다");
    localStorage.removeItem("cart"); //결제가 성공했으므로 로컬스토리지 장바구니에 담긴 상품 비우기
    localStorage.removeItem("buyItem"); //결제가 성공했으므로 로컬스토리지에 바로구매 상품 비우기
    location.href = "/paid";
    paymentResponse(); //결제 버튼 눌렀을 때 주문을 조회할 수 있도록
  } else {
    alert("결제가 성공되지 않으셨습니다");
  }
});
