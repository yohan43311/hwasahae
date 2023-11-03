const login_Btn = document.querySelector("#login-btn");
const joinUs_Btn = document.querySelector("#joinUs-btn");
const IdPW_Btn = document.querySelector("#findIdPw-btn");

function signUpLink() {
  link = "/pages/SignUp/signUp.html";
  window.location.href = link;
}

//회원가입 폼
const signIn = document.querySelector(".signIn");

const signIn_date = {
  email: "",
  password: "",
  phone: "",
};

signIn.innerHTML = ` 
<form method="" action="">
    <div class="containerLogin">
      <div class="signInForm">
        <h2>아이디 찾기</h2>
        <input type="text" placeholder="이름을 입력해주세요."><br>
        <input type="text" oninput="oninputPhone(this)" maxlength="11" id="phonNumber" id="phonNumber" placeholder="전화번호를 입력해주세요."><br>
        <button id="login-btn">아이디 찾기</button><br>
        <button id="login-btn">로그인</button>
      </div>

      <div class="signUpForm">
        <h3>임시 비밀번호 발급</h3>
        <input type="email" id="email" placeholder="이메일을 입력해주세요." >
        <p id="email-message"></p>
        <input type="text" oninput="oninputPhone(this)" maxlength="11" id="phonNumber" placeholder="전화번호를 입력해주세요." id="phonNumber">
        <button id="login-btn">임시 비밀번호 발급</button><br>
        <button id="login-btn">로그인</button>
      </div>
    </div>
    <div style="clear: both;"></div>
  </form>

  <div class="socialBtn">
    <button>카카오 로그인</button>
    <button>구글 로그인</button>
  </div>`;
