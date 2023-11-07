const loginButton = document.getElementById('login-button');
const usernameInput = document.getElementById('yourUsername');
const passwordInput = document.getElementById('yourPassword');
const errorDisplay = document.getElementById('error-display');

loginButton.addEventListener('click', () => {
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === 'admin' && password === 'password') {
    // 로그인 성공 시 관리자 페이지로 이동
    window.location.href = '/index';
  } else {
    // 로그인 실패 시 에러 메시지 표시
    errorDisplay.textContent = '올바른 사용자 이름과 비밀번호를 입력해주세요.';
  }
});