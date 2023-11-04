const login_Btn = document.querySelector("#login-btn");
const joinUs_Btn = document.querySelector("#joinUs-btn");
const IdPW_Btn = document.querySelector("#findIdPw-btn");

//로그인 폼
const signIn = document.querySelector(".signIn");

signIn.innerHTML = ` 
<form method="" action="">
    <div class="containerLogin">
      <div class="signInForm">
        <h3>회원 로그인</h3>
        <input type="email" id="email" placeholder="이메일을 입력해주세요.">
        <p class="msg" id="email-message"></p>
        <input type="password" placeholder="비밀번호를 입력해주세요." id="pwd">
        <p id="pw-message" class="msg"></p>
        <button id="login-btn">로그인</button><br>
        <input type="checkbox">보안접속
      </div>
      
      <div class="signUpForm">
        <h3>회원가입</h3>
        <p class="explain">
          아직 회원이 아니신가요?<br>
          회원가입을 하시면 다양한 혜택을 편리하게 이용하실 수 있습니다.
        </p>
        <button id="joinUs-btn" onclick="signUpLink()">회원가입</button><br>
        <p class="explain">
          아이디 혹은 비밀번호를 잊으셨나요?<br>
          간단한 정보를 입력 후 잃어버린 정보를 찾으실 수 있습니다.
        </p>
        <button id="findIdPw-btn">아이디/비번 찾기</button><br>
      </div>
    </div>
    <div style="clear: both;"></div>
  </form>

  <div class="socialBtn">
    <button>카카오 로그인</button>
    <button>네이버 로그인</button>
  </div>`;

//로그인 버튼을 눌렀을 때의 동작
document.getElementById("login-btn").addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const pwd = document.querySelector("#pwd").value;

  if (!email && !pwd) {
    return alert("이메일, 비번을 입력하지 않으셨습니다!");
  }

  function signUpLink() {
    link = "/pages/SignUp/signUp.html";
    window.location.href = link;
  }
  //로그인 api 요청
});
