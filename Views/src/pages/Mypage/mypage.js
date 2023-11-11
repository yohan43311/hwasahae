// 회원 이름 API 정보 가져와 화면에 뿌리는 코드
fetch("http://localhost:3000/users/my", { method: "GET" })
  .then((response) => response.json())
  .then((data) => {
    console.log("data: ", data);
    const myInfoMap = `
            <p class="member">
                ${data.name}님
            </p>
            `;

    const productContainer = document.querySelector(".user-info");
    productContainer.innerHTML = myInfoMap;
  });

//주문 API 가져오는 코드
fetch("http://localhost:3000/orders/", { method: "GET" })
  .then((response) => response.json())
  .then((data) => {
    console.log("data : ", data);
    const contents =
      data?.length === 0 || !data
        ? ` <td colspan="5">
                <div class="tb-center">주문 내역이 없습니다.</div>
            </td>`
        : data.reduce`
        <tr>
            <!-- 주문있을때 -->
            <td>
                <img src="./img/product_1.jpg" alt="상품 이미지" style="width: 100px;
                height: 100px;">
            </td>
            <td>
                <span class="product_name">${item_date.productName}</span>
            </td>
            <td>
                <input class="item_many" type="text" value="${item_su}">
            </td>
            <td><span class="item_total">${total_price()}</span>원</td>
            <td><button class="Btn"><a href="/pages/Mypage/order/order.html"></a>자세히보기</button></td>
         </tr>
            `;

    const myInfoMap = contents;

    const productContainer = document.querySelector("tbody");
    productContainer.innerHTML = myInfoMap;
  });

const createOrderList = (data) => {
  return data.reduce((prev, cur) => {
    const formattedDate = formatDate(cur.createdAt); // 변환된 날짜
    const userName = cur.userId.name; // 사용자 이름
    const formattedPhone = formatPhoneNumber(cur["receiver"].phone); // 번호 - 추가
    const formattedTotalPrice = formatCurrency(cur.totalPrice); // 단위별 , 추가
    return (
      prev +
      `
        <tr id=${cur["_id"]}>
            <td>${formattedDate}</td>
            <td>${userName}</td>
            <td>${formattedPhone}</td>
            <td>${formattedTotalPrice}</td>
            <td>${cur["receiver"].address}</td>
            <td>${cur.status}</td>
            <td><button type="button" class="btn btn-primary rounded-pill btn-sm"
                onclick="location.href='order-modify.html?orderNo=${cur._id}'"
                >수정</button></td>
        </tr>
    `
    );
  }, "");
};
