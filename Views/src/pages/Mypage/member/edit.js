// API 정보 가져와 화면에 뿌리는 코드
fetch("http://kdt-sw-7-team04.elicecoding.com:3000/users/my")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    myInfo = data;
    const myInfoMap = myInfo.map(item =>`
      <!-- 이름 -->
      <div class="w-100">
        <div>
          <label for="name" class="detail_title">이름</label>
          <span class="form-input" id="name">${item.name}</span>
        </div>
      </div>
      <!-- 아이디 -->
      <div class="w-100">
        <div>
          <label for="name" class="detail_title">아이디</label>
          <span class="form-input" id="id">${item.id}</span>
        </div>
      </div>
      <!-- 이메일 -->
      <div class="w-100">
        <div>
          <label for="email" class="detail_title">이메일</label>
          <input class="form-input" type="email" id="email" placeholder="email@naver.com" value="${item.email}">
          <p class="msg" id="email-message"></p>
        </div>
      </div>
      <!-- 주소 -->
      <div class="w-100">
        <div>
          <label for="address" class="detail_title">주소</label>
          <div>
            <input type="text" id="sample4_postcode" placeholder="" value="${item.zipcode}">
            <input type="button" class="btn" id="addressBtn" onclick="sample4_execDaumPostcode()" value="우편번호 찾기">
            <input type="text" class="address-input" id="sample4_roadAddress" placeholder="" value="${item.address}">
            <input type="text" class="address-input" id="sample4_detailAddress" placeholder="" value="${item.detailAddress}">
          </div>
        </div>
      </div>
    `).join('');

    const productContainer = document.querySelector('.title');
    productContainer.innerHTML = myInfoMap;

    // 수정 버튼이 눌렸을 때 동작
    const submitBtn = document.getElementById("submit");
    submitBtn.addEventListener("click", submitForm);
  });

// 수정된 함수로 API 요청 수행
const submitForm = () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').textContent;
    const password = document.getElementById('pwd').value;
    const zipcode = document.getElementById('sample4_postcode').value;
    const address = document.getElementById('sample4_roadAddress').value;
    const detailAddress = document.getElementById('sample4_detailAddress').value;

    const requestBody = {
      name: name,
      password: password,
      zipcode: zipcode,
      address: address,
      detailAddress: detailAddress,
    };

    fetch('http://kdt-sw-7-team04.elicecoding.com:3000/users/my', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('회원 정보 수정 성공:', data);
        // 성공 시 추가적인 로직을 여기에 작성하세요.
        alert('회원 정보가 성공적으로 수정되었습니다.');
      })
      .catch((error) => {
        console.error('회원 정보 수정 실패:', error);
        // 실패 시 추가적인 로직을 여기에 작성하세요.
        alert('회원 정보 수정에 실패했습니다. 다시 시도해주세요.');
      });
  });
};
