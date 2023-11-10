
//카테고리 추가
const addbtn = document.querySelector('.category_add')

//카테고리 수정
const modibtn = document.querySelector('.category_modi')

//카테고리 삭제
const delbtn = document.querySelector('.category_del')

function winPopup(categoryName) {
    const popUrl = `category-modify.html?categoryName=${name}`
    const popOption = "top=10, left=10, width=500, height=500, status=no, menubar=no, resizable=no"
    window.open(popUrl, popOption);
    
  }

  
window.onload =function (){

    // const categoryTable = document.querySelector('#category-table')
    setAddCategory()
  

}

const setAddCategory = ()=>{
    const categoryTable = document.querySelector('.row')

    console.log('카테고리 관리 페이지')
    var raw = "";

    var requestOptions = {
        method: 'GET',
    };

fetch("http://localhost:3000/category", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log('통신 성공! 이건 카테고리',result)
    categoryTable.innerHTML = createCategoryList(result)
  })
  .catch(error => {console.log('error가 발생했어요!', error),
    categoryTable.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">오류가 나타났어요🧐</h5>
      </div>
    </div>
    `
});

}
const createCategoryList = (data)=>{
    return data.reduce((prev,cur)=> prev+ `

    <div class="col-lg-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${cur.name}</h5>
            <button type="button" class="btn btn-success" id="category_modi" onclick="winPopup('${cur.name}');"></a>수정</button>
            <button type="button" class="btn btn-danger" id="category_del"
            onclick="deleteCategory(event,${cur.name})"
            ></a>삭제</button>
          </div>
        </div>
      </div>
    `,'')
}

const setDeleteCategory = (e,categoryName)=>{
   const userSignal = confirm('이 카테고리를 삭제하시겠습니까') 
   if(userSignal){
    // 여기서 삭제 fetch 날려주기
    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };
      
      fetch("http://localhost:3000/admin/654b262458c7e8b239d796ae/category", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        alert(categoryName+'가 삭제되었습니다.')
        setAddCategory()
   }
}


