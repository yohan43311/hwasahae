//결제 폼
const success_payment = document.querySelector(".success_payment");

success_payment.innerHTML = `
  <h1>결제가 완료되었습니다</h1>
  <p>결제가 성공적으로 처리되었습니다. 주문 번호: <span id="orderNumber">123456</span></p>
  <button id="backToHomeButton">홈으로 돌아가기</button>
`;

document
  .getElementById("backToHomeButton")
  .addEventListener("click", function () {
    //window.location.href = 'URL';
  });
