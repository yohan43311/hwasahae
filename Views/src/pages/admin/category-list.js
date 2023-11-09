
//카테고리 추가
const addbtn = document.querySelector('.category_add')

//카테고리 수정
const modibtn = document.querySelector('.category_modi')

//카테고리 삭제
const delbtn = document.querySelector('.category_del')

const categoryTable = document.querySelector('.category-table')

window.onload =function (){
    console.log('주문 관리 페이지')

    var raw = "{\n    \"name\": \"11월8일1\" // 카테고리 이름\n}";

    var requestOptions = {
    method: 'POST',
    body: raw,
    redirect: 'follow'
    };

fetch("http://localhost:3000/admin/category", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log('통신 성공! 이건 주문한 내역',result)
    categoryTable.innerHTML = createCategoryList(result)
  })
  .catch(error => console.log('error가 발생했어요!', error));


  
  const createCategoryList = (data)=>{
    return data.reduce((prev,cur)=> prev+ `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${cur.name}</h5>
      </div>
    </div>
    `,'')
}

}
