


window.onload = function () {
  console.log("주문 수정 페이지");

  const form = document.querySelector("#orderForm");
  const urlSearch = new URLSearchParams(location.search);
  const orderId = urlSearch.get("orderNo");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  //상품 조회
  fetch(`http://localhost:3000/admin/${orderId}/order`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log("통신 성공!", result);


      form.date.value = result.date;
      form.name.value = result.name;
      form.phone.value = result.phone;
      form.price.value = result.price;
      form.address.value = result.address;
      form.status.value = result.address;
      

    })
    .catch((error) => {
      console.log("error가 발생했어요!", error);
      alert(`에러메시지 : ${error.message}`);
    });

  //상품 수정
  const editOrder = async (e) => {
    e.preventDefault();
    const input = document.querySelectorAll("input[required]");

    // 유효성 검증
    for (let i = 0; i < input.length; i++) {
      if (input[i].value === "") return alert("필수 입력사항을 채워주세요.");
    }

    const form = document.querySelector("#detailForm");
    const formData = new FormData(form);

    const order_add_URL = `http://localhost:3000/admin/${orderId}`;

    const option = {
      method: "PATCH",
      body: formData,
    };

    await fetch(order_add_URL, {
      ...option,
    })
      .then((res) => res.json())
      .then((res) => {
        alert("상품이 성공적으로 수정되었습니다.");
        location.href = `/admin/order?id=${res?._id}`;
        if (res?.result === "fail") {
          alert(`에러메시지 : ${res.error}`);
        }
      })
      .catch((err) => {
        console.log(" err: ", err);
        alert(`에러메시지 : ${err.error}`);
      });
  };

  const editEvent = () => {
    const orderEditButton = document.querySelector("#modify");
    orderEditButton.addEventListener("click", editOrder);
  };

  editEvent();




  //주문 삭제
  const OrderProduct = async (e) => {
    e.preventDefault();

    const confirm = window.confirm("정말로 주문을 삭제하시겠습니까?");

    if (!confirm) return;

    const order_delete_URL = `http://localhost:3000/admin/${orderId}/order`;

    const option = {
      method: "DELETE",
    };

    await fetch(order_delete_URL, option)
      .then((res) => res.json())
      .then((res) => {
        alert("상품이 성공적으로 삭제되었습니다.");
        location.href = `/admin//order-manage.html`;
        if (res?.result === "fail") {
          alert(`에러메시지 : ${res.error}`);
        }
      })
      .catch((err) => {
        console.log(" err: ", err);
        alert(`에러메시지 : ${err.error}`);
      });
  };

  const deleteEvent = () => {
    const orderDeleteButton = document.querySelector("#delete");
    orderDeleteButton.addEventListener("click", OrderProduct);
  };

  deleteEvent();

};
