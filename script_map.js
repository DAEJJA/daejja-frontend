'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const mypageButton = document.getElementById('mypageButton');

  mypageButton.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5500/mypage.html'; 
  });
});

// 카드 요소 선택
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');

// 카드 클릭 이벤트 리스너 추가
card1.addEventListener('click', () => handleCardClick(card1));
card2.addEventListener('click', () => handleCardClick(card2));
card3.addEventListener('click', () => handleCardClick(card3));

function handleCardClick(clickedCard) {
  // 모든 카드의 스타일 초기화
  card1.classList.remove('selected-card');
  card2.classList.remove('selected-card');
  card3.classList.remove('selected-card');

  // 클릭한 카드에 선택된 카드 스타일 추가
  clickedCard.classList.add('selected-card');
  
  // 여기에서 지도 업데이트 로직을 추가할 수 있습니다.
  card1.addEventListener('click', function () {
    // 클릭 이벤트 핸들러 내에서 지도를 업데이트 (예: 다른 위치로 이동)
    map.setCenter(new kakao.maps.LatLng(33.450701, 126.570667));
  });

  card2.addEventListener('click', function () {
    // 클릭 이벤트 핸들러 내에서 지도를 업데이트 (예: 다른 위치로 이동)
    map.setCenter(new kakao.maps.LatLng(34.000000, 127.000000));
  });

  card3.addEventListener('click', function () {
    // 클릭 이벤트 핸들러 내에서 지도를 업데이트 (예: 다른 위치로 이동)
    map.setCenter(new kakao.maps.LatLng(35.000000, 128.000000));
  });
  // 예를 들어, 클릭한 카드에 대한 정보를 기반으로 지도를 업데이트할 수 있습니다.
  // map.setCenter(...) 또는 다른 지도 API 호출을 여기에 추가하세요.
}


document.addEventListener('DOMContentLoaded', () => {
  const newSearchForm = document.querySelector('.search-form');
  const saveTravelButton = document.querySelector('.saveTravelButton');
  const travelForm = document.querySelector('#travelForm');
  const submitTravelButton = document.querySelector('#submitTravel');

  // 여행 저장하기 버튼 클릭 이벤트 처리
  saveTravelButton.addEventListener('click', () => {
    // 폼이 현재 표시되는 상태인지 확인
    const isFormVisible = travelForm.style.display === 'block';

    // 폼 토글 (표시 상태를 반대로 설정)
    travelForm.style.display = isFormVisible ? 'none' : 'block';
  });

  // 여행 정보 입력 폼 제출 이벤트 처리
  submitTravelButton.addEventListener('click', () => {
    const travelTitle = document.querySelector('#travelTitle').value;
    const travelDescription = document.querySelector('#travelDescription').value;

    // 여행 정보 입력 폼 숨기기
    travelForm.style.display = 'none';

    // 여기에서 저장된 정보를 서버로 보내거나 활용할 수 있습니다.
    /*
    try {
      const response = await fetch('/api/save-travel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: travelTitle, description: travelDescription }),
      });

      if (response.ok) {
        // 여행 정보가 성공적으로 저장된 경우, 마이페이지로 이동
        window.location.href = '/mypage'; // 마이페이지 URL로 이동
      } else {
        console.error('여행 정보 저장 실패:', response.status);
        // 저장 실패 처리
      }
    } catch (error) {
      console.error('오류 발생:', error);
      // 오류 처리
    }*/
  });
});

