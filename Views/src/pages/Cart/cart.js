const getItems = JSON.parse(localStorage.getItem("cart")) || [];
console.log(getItems);
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

      // if(getItems.count !== 1){
      //   data.__v = getItems.count

      // }else{
      //   data.__v = 1
      // }

      const MapItem = `
    <tr data-index="${index}">
      <td><img src="./img/product_1.jpg" alt="상품 이미지" style="width: 100px; height: 100px;"></td>
      <td><span class="product_name">${data.name}</span></td>
      <td>
        <button class="minus" data-index="${index}">-</button>
        <input class="item_many" type="text" value="${item_su}" data-index="${index}">
        <button class="plus" data-index="${index}">+</button>
      </td>
      <td><span class="item_total">${total_price()}</span>원</td>
      <td><button class="deleteBtn" data-index="${index}">삭제</button></td>
    </tr>
  `;

      const pageSleeted = document.querySelector("#productTable");
      pageSleeted.innerHTML += MapItem;

      // 장바구니 - 제품수량 증가 및 감소
      const plusBtns = document.querySelectorAll(".plus");
      const minusBtns = document.querySelectorAll(".minus");
      const deleteBtns = document.querySelectorAll(".deleteBtn");
      const item_many = document.querySelectorAll(".item_many");
      const item_total = document.querySelectorAll(".item_total");

      plusBtns.forEach((plusBtn, index) => {
        plusBtn.addEventListener("click", (e) => {
          e.preventDefault();
          handlePlusClick(index);
        });
      });
      minusBtns.forEach((minusBtn, index) => {
        minusBtn.addEventListener("click", (e) => {
          e.preventDefault();
          handleMinusClick(index);
        });
      });
      deleteBtns.forEach((deleteBtn, index) => {
        deleteBtn.addEventListener("click", (e) => {
          e.preventDefault();
          handleDeleteClick(index);
        });
      });

      // 삭제 버튼
      const handleDeleteClick = (index) => {
        // 해당 인덱스의 상품 삭제
        getItems.splice(index, 1);

        // 로컬 스토리지에서도 삭제
        localStorage.setItem("cart", JSON.stringify(getItems));

        // 해당 행 삭제
        const tableRow = document.querySelector(
          `#productTable tr[data-index="${index}"]`
        );
        tableRow.parentNode.removeChild(tableRow);
        location.reload();
      };

      // 플러스 버튼
      const handlePlusClick = (index) => {
        getItems[index].count = (getItems[index].count || 1) + 1;
        fetch(`http://localhost:3000/products/${getItems[index].id}`) // 데이터가 필요한가? 필요없을지도?
          .then((response) => response.json())
          .then((data) => {
            item_su = getItems[index].count;

            item_many[index].value = item_su;
            item_total[index].innerHTML = total_price();
            console.log(item_many[index].value);

            // 수량 업데이트용 로컬 스토리지에서 데이터 가져오기 ? 왜 원래 맨위에 서 가져와서는 안될까?
            const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
            if (cartItems[index]) {
              cartItems[index].count = item_many[index].value;
              //로컬스토리지 업데이트된 데이터 저장
              localStorage.setItem("cart", JSON.stringify(cartItems));
            }
            // priceCommas();
          });
      };

      // 마이너스 버튼
      const handleMinusClick = (index) => {
        getItems[index].count = (getItems[index].count || 1) - 1;

        // 수량이 1보다 작으면 최소값을 1로 설정
        if (getItems[index].count < 1) {
          getItems[index].count = 1;
        }

        fetch(`http://localhost:3000/products/${getItems[index].id}`)
          .then((response) => response.json())
          .then((data) => {
            item_su = getItems[index].count;

            item_many[index].value = item_su;
            item_total[index].innerHTML = total_price();
            console.log(item_many[index].value);

            // 수량 업데이트용 로컬 스토리지에서 데이터 가져오기
            const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
            if (cartItems[index]) {
              cartItems[index].count = item_many[index].value;
              // 로컬 스토리지 업데이트된 데이터 저장
              localStorage.setItem("cart", JSON.stringify(cartItems));
            }
            // priceCommas();
          });
      };

      // //가격표시
      // const priceCommas = () => {
      //   for (let i = 0; i < item_total.length; i++) {
      //     item_total[i].innerHTML = data.price
      //       .toString()
      //       .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      //   }
      // }
    });
});

// module.exports = cart;
