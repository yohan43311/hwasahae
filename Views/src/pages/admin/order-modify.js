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

  // input 태그 안에 value로 매핑
};

const moditybutton = document.querySelector(".modify_button");
const deletebutton = document.querySelector(".delete_button");

// 매핑된 정보를 수정 완료하기 기능
// 현재 input 태그안에 있는 value를 백엔드로 보내는 fetch 작성
const postModifiedData = () => {};
