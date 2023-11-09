document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const password = document.getElementById('pwd').value;
      const zipcode = document.getElementById('sample4_postcode').value;
      const address = document.getElementById('sample4_roadAddress').value;
      const detailAddress = document.getElementById('sample4_detailAddress').value;
  
      const requestBody = {
        name: name,
        password: password,
        zipcode: zipcode,
        address: address,
        detailAddress: detailAddress,
      };
  
      fetch('http://kdt-sw-7-team04.elicecoding.com:3000/users/my', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('회원 정보 수정 성공:', data);
          // 성공 시 추가적인 로직을 여기에 작성하세요.
        })
        .catch((error) => {
          console.error('회원 정보 수정 실패:', error);
          // 실패 시 추가적인 로직을 여기에 작성하세요.
        });
    });
  });
  