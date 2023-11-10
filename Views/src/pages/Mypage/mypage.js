// 회원 이름 API 정보 가져와 화면에 뿌리는 코드
fetch("http://localhost:3000/users/my", { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
        console.log("data: ", data)
        const myInfoMap = `
            <p class="member">
                ${data.name}님
            </p>
            `;

        const productContainer = document.querySelector('.user-info');
        productContainer.innerHTML = myInfoMap;
    });

//주문 API 가져오는 코드
fetch("http://localhost:3000/orders/", { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
        console.log("data: ", data)
        const myInfoMap = `
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
        <!-- <td><button class="Btn" onclick="deleteRow(this)"><a href="/pages/Mypage/order/order.html"></a>자세히보기</button></td> -->
        <td><button class="Btn"><a href="/pages/Mypage/order/order.html"></a>자세히보기</button></td>
    </tr>
            `;

        const productContainer = document.querySelector('.user-info');
        productContainer.innerHTML = myInfoMap;
    });


