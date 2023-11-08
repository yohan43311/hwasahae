// 상품 테이블
const products_table = document.querySelector(".align-items-top");

window.onload = function () {
  console.log("상품 관리 페이지");

  var req_orders = {
    method: "GET",
    redirect: "follow",
  };

  //상품조회
  fetch("http://localhost:3000/products", req_orders)
    .then((response) => response.json())
    .then((result) => {
      console.log("통신 성공!", result);
      products_table.innerHTML = createProductsList(result);
    })
    .catch((error) => {
      console.log("error가 발생했어요!", error);
    });

  const createProductsList = (data) => {
    return data.reduce(
      (prev, cur) =>
        prev +
        `
  <div class="col-lg-3">
    <div class="card">
      <img src="${cur["images"][0]}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${cur["name"]}</h5>
        <p class="card-text">${cur["price"]}</p>
        <p class="card-text"><a href="#" class="btn btn-primary">수 정</a></p>
      </div>
    </div>
  </div>
  `,
      ""
    );
  };
};
