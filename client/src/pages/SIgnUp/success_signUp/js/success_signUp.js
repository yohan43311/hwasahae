//회원가입 모달창
const success_signUp = document.querySelector(".success_signUp");
success_signUp.innerHTML = `
<h1>🎉회원가입이 완료되었습니다!🎉</h1>
<button id="backToHomeButton">홈으로 돌아가기</button>
`;

document
  .getElementById("backToHomeButton")
  .addEventListener("click", function () {
    //window.location.href = 'URL';
  });
