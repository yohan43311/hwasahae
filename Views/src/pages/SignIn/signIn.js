/* 요소모음 */
const email = document.querySelector("#email");
const pwd = document.querySelector("#pwd");

//로그인 버튼이 눌렸을 때 동작
const loginEvent = () => {
  const loginBtn = document.getElementById("login-btn");
  loginBtn.addEventListener("click", loginResponse);
};

/* 로그인 api */
const loginResponse = async (e) => {
  e.preventDefault();
  const login_URL = "http://localhost:3000/login";

  const formData = new FormData();
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
        localStorage.setItem("userInfo", JSON.stringify(res));
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
