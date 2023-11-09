
//카테고리 추가
const addbtn = document.querySelector('.category_add')

//카테고리 수정
const modibtn = document.querySelector('.category_modi')

//카테고리 삭제
const delbtn = document.querySelector('.category_del')

const categoryTable = document.querySelector('.category-table')

window.onload =function (){
    console.log('카테고리 관리 페이지')

    var raw = "{\n    \"name\": \"11월8일1\" // 카테고리 이름\n}";

    var requestOptions = {
    method: 'POST',
    body: raw,
    redirect: 'follow'
    };

fetch("http://localhost:3000/admin/category", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log('통신 성공! 이건 카테고리',result)
    categoryTable.innerHTML = createCategoryList(result)
  })
  .catch(error => console.log('error가 발생했어요!', error),
    categoryTable.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">오류가 나타났어요🧐</h5>
      </div>
    </div>
    `
  );


  
  const createCategoryList = (data)=>{
    return data.reduce((prev,cur)=> prev+ `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${cur.name}</h5>
        <button type="button" class="btn btn-success" id="category_modi"></a>수정</button>
        <button type="button" class="btn btn-danger" id="category_del"></a>삭제</button>
      </div>
    </div>
    `,'')
}

}

CategoryDeleteBtn.forEach(delbtn => {

    delbtn.addEventListener("click", (event) => {
        const CategoryDeleteBtn = event.srcElement;

        const categoryTable = CategoryDeleteBtn.getAttribute('.category-table');

        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
          };
          
          fetch("http://localhost:3000/category/654a4712502c57bc3552dc6b/admin", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

            const target = document.querySelector(`
            <div class="card">
              <div class="card-body">
             <h5 class="card-title">${cur.name}</h5>
               <button type="button" class="btn btn-success" id="category_modi"></a>수정</button>
        <button type="button" class="btn btn-danger" id="category_del"></a>삭제</button>
      </div>
    </div>
            `);
            target.remove();
    })

})



