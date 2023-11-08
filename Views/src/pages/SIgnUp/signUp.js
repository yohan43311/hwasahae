/* 요소모음 */
// console.log("들어오나?");
const name1 = document.querySelector("#name");
const email1 = document.querySelector("#email");
const pwd1 = document.querySelector("#pwd");
const rePwd1 = document.querySelector("#rePwd");
const roadAddress1 = document.querySelector("#sample4_roadAddress");
const jibunAddress1 = document.querySelector("#sample4_jibunAddress");
const detailAddress1 = document.querySelector("#sample4_detailAddress");
const role1 = document.querySelector("#role");
// const postcode1 = document.querySelector("#sample4_postcode1");
// const extraAddress1 = document.querySelector("#sample4_extraAddress1");

//회원가입 버튼이 눌렸을 때 동작
const submitEvent = () => {
  const submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", registerResponse);
};

/* 회원가입 api */
const registerResponse = async (e) => {
  e.preventDefault();
  // console.log("안녕5555555");
  const register_URL = "http://localhost:3000/register";

  const formData = new FormData();
  formData.append("name", name1?.value);
  formData.append("email", email1?.value);
  formData.append("password", pwd1?.value);
  formData.append("zipcode", jibunAddress1?.value);
  formData.append("address", roadAddress1?.value);
  formData.append("detailAddress", detailAddress1?.value);
  formData.append("role", role1?.value);

  const option = {
    method: "POST",
    body: formData,
  };

  await fetch(register_URL, {
    ...option,
  })
    .then((res) => res.json())
    .then((res) => {
      if (!res?.result) {
        location.href = "/registerOk";
      } else {
        if (res?.result === "fail") {
          console.log("res", res);
          return alert("회원가입 실패");
        }
      }
    });
};

submitEvent();
