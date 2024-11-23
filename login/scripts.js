document.getElementById('signup-button').addEventListener('click', function () {
  document.getElementById('login-page').style.display = 'none';
  document.getElementById('signup-page').style.display = 'block';
});
  
document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const id = document.getElementById('signup-id').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const email = document.getElementById('email').value;
  
    if (id.length < 8 || id.length > 20) {
      alert('아이디는 8~20자로 입력하세요.');
      return;
    }
    
    if (password.length < 8 || password.length > 20) {
      alert('비밀번호는 8~20자로 입력하세요.');
      return;
    }
    
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
  
    if (!email.includes('@')) {
      alert('올바른 이메일을 입력하세요.');
      return;
    }
  
    alert('회원가입 성공!');
    document.getElementById('signup-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'block';
});
  
  document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const id = document.getElementById('login-id').value;
    const password = document.getElementById('login-password').value;
  
    if (id === 'test' && password === '1234') {
      alert('로그인 성공!');
      document.getElementById('login-page').style.display = 'none';
      document.getElementById('calendar-page').style.display = 'block';
    } else {
      alert('아이디 또는 비밀번호가 잘못되었습니다.');
    }
  });
  
  document.getElementById('logout-button').addEventListener('click', function () {
    document.getElementById('calendar-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'block';
  });
  