//name
const name = document.querySelector("#name");

//email
const email = document.querySelector("#email");
const email_message = document.querySelector("#email-message");

//password
const pwd = document.querySelector("#pwd");
const validationMessage = document.querySelector("#pw-message");
const rePwd = document.querySelector("#rePwd");
const confirmPw_message = document.querySelector("#confirmPw-message");

//birth
const birthYearEl = document.querySelector("#birth-year");
const birthMontEl = document.querySelector("#birth-month");
const birthDayEl = document.querySelector("#birth-day");

//회원가입 버튼
const submit = document.querySelector(".send");

/**
 * 이메일
 */
function validateEmail() {
  let emailVal = email.value;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailRegex.test(emailVal)) {
    email_message.textContent = "올바른 이메일 주소 형식이 아닙니다!";
    email_message.style.color = "red";
  } else {
    email_message.textContent = "유효한 이메일 주소입니다!";
    email_message.style.color = "green";
  }
}
email.addEventListener("input", validateEmail);

/**
 * 비밀번호
 */
function validatePassword() {
  let password = pwd.value;
  const regex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  if (!regex.test(password)) {
    validationMessage.textContent =
      "8글자 이상, 영문, 숫자, 특수문자 사용해주세요!";
    validationMessage.style.color = "red";
  } else {
    validationMessage.textContent = "비밀번호가 안전합니다!";
    validationMessage.style.color = "green";
  }
}
pwd.addEventListener("input", validatePassword);

/**
 * 비밀번호 확인
 */
function validateRePassword() {
  let password = pwd.value;
  let rePassword = rePwd.value;

  if (password === rePassword) {
    confirmPw_message.textContent = "비밀번호가 일치합니다!";
    confirmPw_message.style.color = "green";
  } else {
    confirmPw_message.textContent = "비밀번호가 일치하지 않습니다!";
    confirmPw_message.style.color = "red";
  }
}
rePwd.addEventListener("input", validateRePassword);

/**
 * 폰 번호
 */
function oninputPhone(target) {
  target.value = target.value
    .replace(/[^0-9]/g, "")
    .replace(/(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{4})([0-9]{4})/g, "$1-$2-$3");
}

/**
 * Birth 출생연도
 */
//year
isYearOptionExisted = false;
birthYearEl.addEventListener("focus", function () {
  if (!isYearOptionExisted) {
    isYearOptionExisted = true;
    for (var i = 1940; i <= 2023; i++) {
      const YearOption = document.createElement("option");
      YearOption.setAttribute("value", i);
      YearOption.innerText = i;

      this.appendChild(YearOption);
    }
  }
});

//month
isMonthOptionExisted = false;
birthMontEl.addEventListener("focus", function () {
  if (!isMonthOptionExisted) {
    isMonthOptionExisted = true;
    for (var i = 1; i <= 12; i++) {
      const DayOption = document.createElement("option");
      DayOption.setAttribute("value", i);
      DayOption.innerText = i;

      this.appendChild(DayOption);
    }
  }
});

//day
isDayOptionExisted = false;
birthDayEl.addEventListener("focus", function () {
  if (!isDayOptionExisted) {
    isDayOptionExisted = true;
    for (var i = 1; i <= 31; i++) {
      // option element 생성
      const DayOption = document.createElement("option");
      DayOption.setAttribute("value", i);
      DayOption.innerText = i;
      // birthYearEl의 자식 요소로 추가
      this.appendChild(DayOption);
    }
  }
});

/**
 * 회원가입 버튼
 */
window.onload = function () {};
