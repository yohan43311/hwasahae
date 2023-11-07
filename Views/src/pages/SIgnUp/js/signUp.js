//회원가입 폼
const signUp = document.querySelector(".signUp");
signUp.innerHTML = `    
<form action="" method="">
<div class="form-white">
  <h1 class="title">회원정보 입력</h1>

  <!-- 이름 -->
  <div class="w-100">
    <div>
      <label for="name" class="detail_title">이름</label>
      <input class="form-input" type="text" id="name">
    </div>
  </div>

  <!-- 이메일 -->
  <div class="w-100">
    <div>
      <label for="email" class="detail_title">이메일</label>
      <input class="form-input" type="email" id="email" placeholder="email@naver.com">
      <p class="msg" id="email-message"></p>
    </div>
  </div>

  <!-- 비밀번호 -->
  <div class="w-100">
    <div>
      <label for="pwd" class="detail_title">비빌번호</label>
      <input class="form-input" type="password" id="pwd">
      <p class="msg" id="pw-message"></p>
    </div>
  </div>

  <!-- 비밀번호 확인 -->
  <div class="w-100">
    <div>
      <label for="rePwd" class="detail_title">비밀번호 확인</label>
      <input class="form-input" type="password" id="rePwd">
      <p class="msg" id="confirmPw-message"></p>
    </div>
  </div>

  <!--휴대폰 번호-->
  <div class="w-100">
    <div>
      <label for="rePwd" class="detail_title">휴대폰 번호</label>
      <input type="text" class="form-input" oninput="oninputPhone(this)" maxlength="11" id="phonNumber">
    </div>
  </div>

  <!-- 주소 -->
  <div class="w-100">
    <div>
      <label for="address" class="detail_title">주소</label>
      <div>
        <input type="text" id="sample4_postcode" placeholder="우편번호">
        <input type="button" class="btn" id="addressBtn" onclick="sample4_execDaumPostcode()" value="우편번호 찾기">
        <input type="text" class="address-input" id="sample4_roadAddress" placeholder="도로명주소">
        <input type="text" class="address-input" id="sample4_jibunAddress" placeholder="지번주소">
        <span id="guide" style="color:#999;display:none"></span>
        <input type="text" class="address-input" id="sample4_detailAddress" placeholder="상세주소">
        <input type="text" class="address-input" id="sample4_extraAddress" placeholder="참고항목">
      </div>
    </div>
  </div>

  <!-- 생년월일 -->
  <div class="info" id="info__birth">
    <p class="birth_content detail_title">생년월일</p>
    <select class="box" id="birth-year">
      <option disabled selected>출생 연도</option>
    </select>
    <select class="box" id="birth-month">
      <option disabled selected>월</option>
    </select>
    <select class="box" id="birth-day">
      <option disabled selected>일</option>
    </select>
  </div>

  <div>
    <button type="submit" class="btn openModalButton" id="submit">회원가입</button>
  </div>
</form>
</div>`;

//회원가입 버튼을 눌렀을 때의 동작
document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();

  // const name = document.querySelector("#name").value;
  // const phonNumber = document.querySelector("#phonNumber").value;
  // const postcode = document.querySelector("#sample4_postcode").value;
  // const roadAddress = document.querySelector("#sample4_roadAddress").value;
  // const jibunAddress = document.querySelector("#sample4_jibunAddress").value;
  // const detailAddress = document.querySelector("#sample4_detailAddress").value;
  // const extraAddress = document.querySelector("#sample4_extraAddress").value;
  // const birth_year = document.querySelector("#birth-year").value;
  // const birth_month = document.querySelector("#birth-month").value;
  // const birth_day = document.querySelector("#birth-day").value;
  const email = document.querySelector("#email").value;
  const pwd = document.querySelector("#pwd").value;
  const rePwd = document.querySelector("#rePwd").value;

  if (!email) {
    return alert("이메일 형식이 맞지 않습니다!");
  }

  if (!(pwd === rePwd)) {
    return alert("비밀번호가 일치하지 않습니다.");
  }

  //회원가입 api 요청
});
