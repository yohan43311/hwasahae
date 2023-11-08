/* 요소모음 */
const email = document.querySelector("#email");
const pwd = document.querySelector("#pwd");

//로그인 버튼이 눌렸을 때 동작
const loginEvent = () => {
  const loginBtn = document.getElementById("login-btn");
  loginBtn.addEventListener("click", loginResponse);
};

// document.addEventListener("DOMContentLoaded", function () {
//   const accessToken = localStorage.getItem("accessToken");

//   if (!accessToken) {
//     alert("로그인 후 이용 가능합니다");
//     window.location.href = "/login"; // 로그인 페이지로 리다이렉트
//   }
// });

/* 로그인 api */
const loginResponse = async (e) => {
  e.preventDefault();
  console.log("안녕5555555");
  const login_URL = "http://localhost:3000/login";

  const formData = new FormData();
  formData.append("name", name1?.value);
  formData.append("email", email?.value);
  formData.append("password", pwd?.value);

  const option = {
    method: "POST",
    body: formData,
  };

  await fetch(login_URL, {
    ...option,
  })
    .then((res) => res.json())
    .then((res) => {
      if (!res?.result) {
        //userInfo(email, name, address)
        localStorage.setItem("name", formData.name1.value);
        localStorage.setItem("name", formData.email.value);
        alert("로그인이 되셨습니다!");
        location.href = "/";
      } else {
        if (res?.result === "fail") {
          console.log("res", res);
          return alert("이메일, 비번을 입력하지 않으셨습니다!");
        }
      }
    });
};

loginEvent();

//로그인 버튼을 눌렀을 때의 동작
// document.getElementById("login-btn").addEventListener("click", (e) => {
//   e.preventDefault();

//   const email = document.querySelector("#email").value;
//   const pwd = document.querySelector("#pwd").value;

//   if (!email && !pwd) {
//     return alert("이메일, 비번을 입력하지 않으셨습니다!");
//   }

//   function signUpLink() {
//     link = "/pages/SignUp/signUp.html";
//     window.location.href = link;
//   }
//   //로그인 api 요청
// });
