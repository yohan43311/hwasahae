document.addEventListener('DOMContentLoaded', function () {
    const deleteForm = document.getElementById('deleteForm');
    const resultDiv = document.getElementById('result');
  
    deleteForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const password = document.getElementById('password').value;
  
      const requestBody = {
        password: password
      };
  
      fetch('http://kdt-sw-7-team04.elicecoding.com:3000/users/my', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          if (data && data.deletedAt) {
            // 회원 탈퇴 성공 시
            resultDiv.innerHTML = `<p>User successfully deleted at: ${data.deletedAt}</p>`;
          } else {
            // 서버 응답이 예상과 다를 경우
            resultDiv.innerHTML = `<p>Unexpected server response</p>`;
          }
        })
        .catch((error) => {
          // 실패 시
          resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
        });
    });
  });