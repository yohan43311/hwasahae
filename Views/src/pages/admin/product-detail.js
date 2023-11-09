window.onload = function () {
  console.log("상품 상세 페이지");

  const form = document.querySelector("#detailForm");
  const urlSearch = new URLSearchParams(location.search);
  const productId = urlSearch.get("id");

  console.log("form,", form);
  var req_orders = {
    method: "GET",
    redirect: "follow",
  };

  //상품 조회
  fetch(`http://localhost:3000/products/${productId}`, req_orders)
    .then((response) => response.json())
    .then((result) => {
      console.log("통신 성공!", result);

      form.name.value = result.name;
      const number = Number(result.price);
      form.price.value = number;
      form.maker.value = result.maker;
      form.description.value = result.description;

      // 카테고리 세팅
      const categoryOption = document.createElement("option");
      categoryOption.value = result?.category;
      categoryOption.innerHTML = result?.category;
      form.category.append(categoryOption);

      //이미지
      const img = document.querySelector(".card-img-top");
      img.src = result?.images[0];
    })
    .catch((error) => {
      console.log("error가 발생했어요!", error);
      alert(`에러메시지 : ${error.message}`);
    });
};
