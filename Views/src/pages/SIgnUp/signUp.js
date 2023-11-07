/* 요소모음 */
const name1 = document.querySelector("#name1");
const email1 = document.querySelector("#email1");
const pwd1 = document.querySelector("#pwd1");
const rePwd1 = document.querySelector("#rePwd1");
const postcode1 = document.querySelector("#sample4_postcode1");
const roadAddress1 = document.querySelector("#sample4_roadAddress1");
const jibunAddress1 = document.querySelector("#sample4_jibunAddress1");
const detailAddress1 = document.querySelector("#sample4_detailAddress1");
// const extraAddress1 = document.querySelector("#sample4_extraAddress1");
// const submit = document.querySelector("#submit");

/* 회원가입 통신 */
async function registerResponse() {
  const req = {
    name: name1.value,
    email: email1.value,
    password: pwd1.value,
    zipcode: jibunAddress1.value,
    address: roadAddress1.value,
    detailAddress: detailAddress1.value,
    role: "",
  };

  const response = await fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        if (res.err) {
          return alert(res.err);
          alert(res.msg);
        }
      }
    });
}

registerResponse();
