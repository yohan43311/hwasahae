const confirmationModal = document.getElementById("confirmationModal");
const confirmYesButton = document.getElementById("confirmYes");
const confirmNoButton = document.getElementById("confirmNo");

// 초기에 팝업을 숨김
confirmationModal.style.display = "none";

// 회원탈퇴 링크 클릭 시 모달 표시
const withdrawLink = document.querySelector("a[href='withdraw.html']");
withdrawLink.addEventListener("click", (event) => {
  event.preventDefault(); // 기본 동작 막기
  confirmationModal.style.display = "block";
});

// Yes 버튼 클릭 시 탈퇴 동작 수행
confirmYesButton.addEventListener("click", () => {
  // 여기에서 실제 탈퇴 동작을 수행하거나 페이지를 이동시킬 수 있습니다.
  // 예를 들어, 탈퇴 동작을 수행하고 다른 페이지로 리디렉션할 수 있습니다.
  console.log("탈퇴 동작을 수행합니다.");
  // 탈퇴 동작을 수행한 후 페이지 이동
  window.location.href = "withdraw.html";
});

// No 버튼 클릭 시 모달 닫기
confirmNoButton.addEventListener("click", () => {
  confirmationModal.style.display = "none";
});
