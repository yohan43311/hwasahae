const login_Btn = document.querySelector("#login-btn");
const joinUs_Btn = document.querySelector("#joinUs-btn");
const IdPW_Btn = document.querySelector("#findIdPw-btn");

function signUpLink() {
  link = "/pages/SignUp/signUp.html";
  window.location.href = link;
}

//회원가입 폼
const signIn = document.querySelector(".signIn");

signIn.innerHTML = ` 
<form method="" action="">
    <div class="containerLogin">
      <div class="signInForm">
        <h3>회원 로그인</h3>
        <input type="email" id="email" placeholder="MEMBER ID">
        <p class="msg" id="email-message"></p>
        <input type="password" placeholder="PASSWORD" id="pwd">
        <p id="pw-message" class="msg"></p>
        <button id="login-btn">LOG-IN</button><br>
        <input type="checkbox">보안접속
      </div>
      
      <div class="signUpForm">
        <h3>회원가입</h3>
        <p class="explain">
          아직 회원이 아니신가요?<br>
          회원가입을 하시면 다양한 혜택을 편리하게 이용하실 수 있습니다.
        </p>
        <button id="joinUs-btn" onclick="signUpLink()">JOIN-US</button><br>
        <p class="explain">
          아이디 혹은 비밀번호를 잊으셨나요?<br>
          간단한 정보를 입력 후 잃어버린 정보를 찾으실 수 있습니다.
        </p>
        <button id="findIdPw-btn">ID/PASSWORD</button><br>
      </div>
    </div>
    <div style="clear: both;"></div>
  </form>

  <div class="socialBtn">
    <button>카카오 로그인</button>
    <button>구글 로그인</button>
  </div>`;
