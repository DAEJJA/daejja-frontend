'use strict';

// 회원가입 및 로그인 페이지에서 쓰는 함수들
const loginButton = document.querySelector('.login-toggle');
const signupButton = document.querySelector('.signup-toggle');
const loginSlide = document.querySelector('.slide.login');
const signupSlide = document.querySelector('.slide.signup');

const loginForm = document.querySelector('.slide.login form');
const signupForm = document.querySelector('.slide.signup form');

// 로그인 버튼 클릭 시
loginButton.addEventListener('click', () => {
  // 로그인 슬라이드 표시, 회원가입 슬라이드 숨김
  loginSlide.style.display = 'block';
  signupSlide.style.display = 'none';
  // 버튼 색상 전환
  loginButton.classList.add('active');
  signupButton.classList.remove('active');
});

// 회원가입 버튼 클릭 시
signupButton.addEventListener('click', () => {
  // 로그인 슬라이드 숨김, 회원가입 슬라이드 표시
  loginSlide.style.display = 'none';
  signupSlide.style.display = 'block';
  // 버튼 색상 전환
  loginButton.classList.remove('active');
  signupButton.classList.add('active');
});

// 검색 페이지로 이동하는 함수
function redirectToSearchPage() {
  window.location.href = 'http://127.0.0.1:5500/page_search.html';
}

signupForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // 폼의 기본 동작을 막음

  // 필요한 입력값들을 가져오기
  const idInput = signupForm.querySelector('input[type="text"]');
  const nicknameInput = signupForm.querySelector('input[type="text"][placeholder="Nickname"]');
  const passwordInput = signupForm.querySelector('input[type="password"]');
  const confirmPasswordInput = signupForm.querySelector('input[type="password"][placeholder="Confirm Password"]');

  const id = idInput.value;
  const nickname = nicknameInput.value;
  const password = passwordInput.value;

  // 패스워드 확인
  if (password !== confirmPasswordInput.value) {
    alert('패스워드가 일치하지 않습니다.');
    return;
  }

  const userData = {
    id,
    nickname,
    password,
  };

  try {
    // 서버로 POST 요청 보내기
    const response = await fetch('https://example.com/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      // 회원가입 성공
      alert('회원가입이 완료되었습니다. 이제 로그인하세요!');
 
    } else {
      // 회원가입 실패
      alert('회원가입에 실패했습니다. 다시 시도하세요.');
    }
  } catch (error) {
    console.error('회원가입 요청 중 오류 발생:', error);
    alert('회원가입 요청 중 오류가 발생했습니다.');
  }

});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // 폼의 기본 동작을 막음

  const id = loginForm.querySelector('input[type="text"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;

   // 하드코딩된 사용자 정보 (테스트용)
   const hardcodedUser = {
    id: 'test',
    password: '1234',
  };

  if (id === hardcodedUser.id && password === hardcodedUser.password) {
    alert('로그인 성공!');
    localStorage.setItem('userId', id);
    redirectToSearchPage();
  } else {
    alert('로그인 실패. 아이디 또는 패스워드를 확인하세요.');
  }
});