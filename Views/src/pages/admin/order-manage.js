// 주문 내역 테이블
const order_table = document.querySelector('.order_table')

window.onload =function (){
  console.log('주문 관리 페이지')
// 5000 


const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};


//주문조회
fetch("http://localhost:3000/admin/order", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log('통신 성공! 이건 주문한 내역',result)
    order_table.innerHTML = createOrderList(result)
  })
  .catch(error => {
    console.log('error가 발생했어요!', error)
    order_table.innerHTML = `  
    <td colspan='6' align="center">오류가 발생했어요 😨  </td>`
    +`<tr>
    <td>test</td>
    <td>test</td>
    <td>test</td>
    <td>test</td>
    <td>test</td>
    <td><button type="button" class="btn btn-primary rounded-pill"
      onclick="clickModify(event)"
      >수정</button></td>
  </tr>`
  });
}
// on load ~

const clickModify = (e)=>{
  console.log('xpxpxpxpxp테스트',e)
  location.href='order-modify.html?orderNo=123&orderUserId=vision'
}

const postDeleteData = () => {
  var requestOptions = {
      method: 'DELETE',
      redirect: 'follow'
    };
    
    fetch("http://localhost:3000/admin/6549203c9c4dcd231ee139bc/order", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    window.onload();
}

const createOrderList = (data)=>{
  return data.reduce((prev,cur)=> prev+ `
  <tr>
                        <td>${cur.createdAt}</td>
                        <td>${cur.userId}</td>
                        <td>${cur["receiver"].phone}</td>
                        <td>${cur.totalPrice}</td>
                        <td>${cur["receiver"].address}</td>
                        <td>${cur.status}</td>
                        <td><button type="button" class="btn btn-primary rounded-pill"
                          onclick="location.href='order-modify.html?orderNo=${cur.totalPrice}&orderUserId=${cur.userId}'"
                          >수정</button></td>
                          <button type="delete" class="btn btn-danger" id="delete_button" onclick="postDeleteData()">삭제</button>
                      </tr>
  `,'')
 }// location.href='order-modify.html'


