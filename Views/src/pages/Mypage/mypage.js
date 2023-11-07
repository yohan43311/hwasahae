// const confirmationModal = document.getElementById("confirmationModal");
// const confirmYesButton = document.getElementById("confirmYes");
// const confirmNoButton = document.getElementById("confirmNo");

// // 초기에 팝업을 숨김
// confirmationModal.style.display = "none";

// // 회원탈퇴 링크 클릭 시 모달 표시
// const withdrawLink = document.querySelector("a[href='withdraw.html']");
// withdrawLink.addEventListener("click", (event) => {
//   event.preventDefault(); // 기본 동작 막기
//   confirmationModal.style.display = "block";
// });

// // Yes 버튼 클릭 시 탈퇴 동작 수행
// confirmYesButton.addEventListener("click", () => {
//   // 여기에서 실제 탈퇴 동작을 수행하거나 페이지를 이동시킬 수 있습니다.
//   // 예를 들어, 탈퇴 동작을 수행하고 다른 페이지로 리디렉션할 수 있습니다.
//   console.log("탈퇴 동작을 수행합니다.");
//   // 탈퇴 동작을 수행한 후 페이지 이동
//   window.location.href = "withdraw.html";
// });

// // No 버튼 클릭 시 모달 닫기
// confirmNoButton.addEventListener("click", () => {
//   confirmationModal.style.display = "none";
// });


// =====================================================
// // 스크립트 중복 로드 문제 해결
// const confirmationModal = document.getElementById("confirmationModal");

// if (confirmationModal) {
//   const confirmYesButton = document.getElementById("confirmYes");
//   const confirmNoButton = document.getElementById("confirmNo");

//   // 초기에 팝업을 숨김
//   confirmationModal.style.display = "none";

//   // 회원탈퇴 링크 클릭 시 모달 표시
//   const withdrawLink = document.querySelector("a[href='withdraw.html']");
//   if (withdrawLink) {
//     withdrawLink.addEventListener("click", (event) => {
//       event.preventDefault(); // 기본 동작 막기
//       confirmationModal.style.display = "block";
//     });
//   }

//   // Yes 버튼 클릭 시 탈퇴 동작 수행
//   if (confirmYesButton) {
//     confirmYesButton.addEventListener("click", () => {
//       // 여기에서 실제 탈퇴 동작을 수행하거나 페이지를 이동시킬 수 있습니다.
//       // 예를 들어, 탈퇴 동작을 수행하고 다른 페이지로 리디렉션할 수 있습니다.
//       console.log("탈퇴 동작을 수행합니다.");
//       // 탈퇴 동작을 수행한 후 페이지 이동
//       window.location.href = "withdraw.html";
//     });
//   }

//   // No 버튼 클릭 시 모달 닫기
//   if (confirmNoButton) {
//     confirmNoButton.addEventListener("click", () => {
//       confirmationModal.style.display = "none";
//     });
//   }
// }



// 모달과 확인 버튼에 대한 참조 가져오기
const confirmationModal = document.getElementById('confirmationModal');
const confirmYesButton = document.getElementById('confirmYes');
const confirmNoButton = document.getElementById('confirmNo');

// 회원탈퇴 링크에 대한 참조 가져오기
const withdrawLink = document.querySelector('a[href="/pages/Mypage/withdraw.html"]');

// 회원탈퇴 링크에 클릭 이벤트 리스너 추가
withdrawLink.addEventListener('click', function(e) {
    e.preventDefault(); // 기본 링크 동작 방지

    // 확인 모달을 보이게 하기
    confirmationModal.style.display = 'block';
});

// 모달 내의 Yes와 No 버튼에 클릭 이벤트 리스너 추가
confirmYesButton.addEventListener('click', function() {
    // 회원탈퇴 처리를 수행합니다 (필요한 경우 여기에 코드를 추가하세요).
    //  여기에서 실제 탈퇴 동작을 수행하거나 페이지를 이동시킬 수 있습니다.
  // 예를 들어, 탈퇴 동작을 수행하고 다른 페이지로 리디렉션할 수 있습니다.
  console.log("탈퇴 동작을 수행합니다.");
  // 탈퇴 동작을 수행한 후 페이지 이동
  window.location.href = "withdraw.html";
    // 모달 닫기
    confirmationModal.style.display = 'none';
});

confirmNoButton.addEventListener('click', function() {
    // 모달 닫기
    confirmationModal.style.display = 'none';

});

