window.onload = function () {
  console.log("카테고리 관리 페이지");

  // 카테고리테이블
  const categoryTable = document.querySelector(".row");

  // 카테고리 리스트 불러오기
  const setAddCategory = () => {
    var requestOptions = {
      method: "GET",
    };

    fetch("http://localhost:3000/category", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("통신 성공! 이건 카테고리", result);
        categoryTable.innerHTML = createCategoryList(result);
      })
      .catch((error) => {
        console.log("error가 발생했어요!", error),
          (categoryTable.innerHTML = `
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">오류가 나타났어요🧐</h5>
              </div>
            </div>
            `);
      });
  };

  const createCategoryList = (data) => {
    return data.reduce(
      (prev, cur) =>
        prev +
        `
        <div class="col-lg-3">
            <div class="card" id="${cur["_id"]}" value="${cur.name}">
              <div class="card-body">
                <h5 class="card-title">${cur.name}</h5>
                <button type="button" class="btn btn-success" id="category_modi"></a>수정</button>
                <button type="button" class="btn btn-danger" id="category_del"
                onclick="deleteCategory(event,${cur.name})"
                ></a>삭제</button>
              </div>
            </div>
         </div>
    `,
      ""
    );
  };

  setAddCategory();

  //카테고리상세페이지로 이동
  categoryTable.addEventListener("click", (event) => {
    const target = event.target;
    const parent = target.closest(".card");
    if (parent.getAttribute("class") === "card") {
      const categoryName = parent.getAttribute("value");
      const categoryId = parent.getAttribute("id");
      location.href = `category-modify.html?id=${categoryId}&categoryName=${categoryName}`;
    }
  });

  //카테고리 추가
  const addbtn = document.querySelector(".category_add");

  //카테고리 삭제
  const delbtn = document.querySelector(".category_del");

  const deleteCategory = (e, categoryName) => {
    const userSignal = confirm("이 카테고리를 삭제하시겠습니까");
    if (userSignal) {
      // 여기서 삭제 fetch 날려주기
      var requestOptions = {
        method: "DELETE",
      };

      fetch(
        "http://localhost:3000/admin/654b262458c7e8b239d796ae/category",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));

      alert(categoryName + "가 삭제되었습니다.");
      setAddCategory();
    }
  };
};
