//회원가입 모달창
const success = document.querySelector(".success");
success.innerHTML = `
<div id="myModal" class="modal">
  <div class="modal-content">
    <span class="close" id="closeModalButton">&times;</span>
    <p>🎉회원가입이 완료되었습니다🎉</p>
  </div>
</div>
`;

document
  .querySelector(".openModalButton")
  .addEventListener("click", function () {
    document.getElementById("myModal").style.display = "block";
  });

document
  .getElementById("closeModalButton")
  .addEventListener("click", function () {
    document.getElementById("myModal").style.display = "none";
  });
