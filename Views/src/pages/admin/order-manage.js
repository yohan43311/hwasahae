// 주문 내역 테이블
const order_table = document.querySelector('.order_table')
// 카테고리 목록
const category_sidebar = document.querySelector('.nav-content')

window.onload =function (){
  console.log('주문 관리 페이지')
// 5000 


var req_orders = {
  method: 'GET',
  redirect: 'follow'
};


//주문조회
fetch("http://localhost:3000/admin/order", req_orders)
  .then(response => response.text())
  .then(result => {
    console.log('통신 성공! 이건 주문한 내역',result)
  console.log(result)
  })
  .catch(error => {
    console.log('error가 발생했어요!', error)
    order_table.innerHTML = createOrderList(test_order_data)
    
  });


// var req_category = {
//   method: 'GET',
//   redirect: 'follow'
// };
// //카테고리
// fetch("http://localhost:3000/category/", req_category)
//   .then(response => response.text())
//   .then(result => {
//     console.log('통신 성공! 이건 카테고리 목록',result)
    
//   })
//   .catch(error => {
//     console.log('error가 발생했어요!', error)
//     category_sidebar.innerHTML = createSidebar(test_category_data)
//   });

// }


const createOrderList = (data)=>{
  return data.reduce((prev,cur)=> prev+ `
  <tr>
                        <th scope="row">${cur['_id']}</th>
                        <td>${cur['name']}</td>
                        <td>${cur['phone']}</td>
                        <td>${cur['address']}</td>
                        <td><button type="button" class="btn btn-light rounded-pill"
                          onclick="location.href='order-modify.html' "
                          >수정</button></td>
                      </tr>
  `,'')
 }

// const createSidebar = (data)=>{
//  return data.reduce((prev,cur)=> prev+ `
//  <li>
//  <a href="${cur['route']}">
//    <i class="bi bi-circle"></i><span>${cur['name']}</span>
//  </a>
//  </li>
//  `,'')
// }

const test_category_data = [
  {
    route : "components-cards-1.html",
    name : "실패한 기초화장품"
  },
  {
    route : "components-cards-2.html",
    name : "실패한 색조"
  },
  {
    route : "components-cards-3.html",
    name : "실패한 립"
  }
]


const test_order_data = [
  {
    index : 3,
    category : '실패한 스킨로션',
    order_owner : '실패한 홍댕',
    order_status :'실패한 상품준비중',
  },
  {
    index : 2,
    category : '실패한 헤어',
    order_owner : '실패한 홍댕',
    order_status :'실패한 배송준비중',
  },
  {
    index : 1,
    category : '실패한 색조',
    order_owner : '실패한 홍댕',
    order_status :'실패한 배송완료',
  }
]


// kdt-sw-7-team04.elicecoding.com


// curl --location 'http://localhost:3000/products/