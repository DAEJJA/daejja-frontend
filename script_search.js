'use strict';

const apiKey = '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';
const apiEndpoint = 'https://api.openai.com/v1/chat/completions'
const userInput = document.querySelector('#queryInput');
const sendButton = document.querySelector('.search-form button');

// ChatGPT API 요청
async function fetchAIResponse(prompt) {
  const requestOptions = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
              {
                  role: "system",
                  content: "JSON 형식(day, location_name, address, longitude, latitude)의 여행 일정을 추천해주세요."
              },
              {
                  role: "user",
                  content: ` ${prompt}`, // 특수 문자로 감싼 사용자 질문
              },
          ],
      }),
  };

    // API 요청후 응답 처리
    try {
        const response = await fetch(apiEndpoint, requestOptions);
        if (!response.ok) {
            throw new Error('ChatGPT API 오류');
        }
        const data = await response.json();
        const aiResponse = data.choices[0].message.content;
        console.log('ChatGPT 답변:', aiResponse); // 답변을 콘솔에 출력
    } catch (error) {
        console.error('OpenAI API 호출 중 오류 발생:', error);
    }
}

// 전송 버튼 클릭 이벤트 처리
sendButton.addEventListener('click', async (event) => {
    event.preventDefault(); // 폼 제출 기본 동작 막기
    // 사용자가 입력한 메시지
    const message = userInput.value.trim();
    // 메시지가 비어있으면 리턴
    if (message.length === 0) return;
    // ChatGPT API 요청후 답변을 콘솔에서 확인
    await fetchAIResponse(message);
    userInput.value = '';
});

// 사용자 입력 필드에서 Enter 키 이벤트를 처리
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});
