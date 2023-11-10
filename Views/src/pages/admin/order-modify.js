window.onload = function () {
  const receivedData = location.href.split("?")[1];
  console.log("주문 수정 페이지", typeof receivedData, receivedData);
  let params = receivedData.split("&");
  console.log("파람^^ ", params);
  const requestParameter = params.reduce((prev, cur) => {
    const v = cur.split("=");
    console.log("브이 ", v, v[0], v[1]);
    prev[v[0]] = v[1];
    return prev;
  }, {});
  console.log(
    "주문 관리 페이지로 부터 받아온 수정할 데이터 (백엔드로 넘겨줘야할 데이터) : ",
    typeof requestParameter,
    requestParameter
  );

  // 1. fetch 해서 수정 할 주문 정보 가져오기!
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  //주문 정보를 하나씩하는 주문을 추가해주세요 수정할 데이터로 활용하게
  fetch("http://localhost:3000/orders/", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  // fetch
  //

  // input 태그 안에 value로 매핑
  const orderDate = document.getElementById("orderDate");
  orderDate.value = "";
};

const moditybutton = document.querySelector(".modify_button");
const deletebutton = document.querySelector(".delete_button");

// 매핑된 정보를 수정 완료하기 기능
// 현재 input 태그안에 있는 value를 백엔드로 보내는 fetch 작성
const postModifiedData = () => {
  var requestOptions = {
    method: "PATCH",
    redirect: "follow",
  };

  fetch(
    "http://localhost:3000/products/6544b441b25cf1e3d2e406f8",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

const postDeleteData = () => {
  var requestOptions = {
    method: "DELETE",
    redirect: "follow",
  };

  fetch(
    "http://localhost:3000/admin/6549203c9c4dcd231ee139bc/order",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
