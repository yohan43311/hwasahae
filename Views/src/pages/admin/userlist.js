//회원목록 테이블
const user_table = document.querySelector('.user_table')

window.onload =function (){
  console.log('회원관리 페이지')
}


var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://localhost:3000/users", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => {
    console.log('error가 발생했어요!', error)
    user_table.innerHTML = createUserList(test_user_data)
  });

  const createUserList = (data)=>{
    return data.reduce((prev,cur)=> prev+ `
    <tr>
                      <th scope="row">${cur['id']}</th>
                      <td>${cur['name']}</td>
                      <td>${cur['email']}</td>
                      <td>${cur['zipcode']}</td>
                      <td>${cur['address']}</td>
                    </tr>
    `,'')
  }

  //test 유저데이터
const test_user_data = [
  {
    index : 2,
    name : '실패 천비전',
    email : 'ess@naver.com',
    zipcode : '12121',
    address : '서울시 강남구',
  },
  {
    index : 3,
    name : '실패 호호홍',
    email : 'mdid@naver.com',
    zipcode : '44444',
    address : '서울시 관악구',
  }
]