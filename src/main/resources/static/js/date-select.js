// 날짜 아이콘 클릭 시 달력 팝업 노출
const dateButton1 = document.querySelector('.date-popup-btn');
const datePopup1 = document.querySelector('.date-popup');
const datePopupWrap = document.querySelector('.date-popup-wrap');

dateButton1.addEventListener('click', () => {
    datePopup1.classList.toggle('show');
    datePopupWrap.classList.toggle('show');
    // 모달이 열릴 때 현재 날짜와 시간으로 버튼을 설정합니다.
    setCurrentDateTime();
});

// 확인 또는 취소 버튼 클릭 시 달력 팝업 닫기
const closePopup = document.querySelectorAll('.date-btn button');

closePopup.forEach(button => {
    console.log("close invoke")
    button.addEventListener('click', () => {
        datePopup1.classList.remove('show');
        datePopupWrap.classList.remove('show');
    });
});


// 팝업창 외부 클릭 시 팝업 닫기

// 모달 외부를 클릭했을 때 모달을 닫도록 이벤트를 추가합니다.
document.addEventListener('click', function(event) {
    // 클릭한 요소가 모달의 자식 요소인 경우에는 모달을 닫지 않습니다.
    if (!event.target.closest('.date-popup-wrap')) {
        // 모달 외부를 클릭한 경우 모달을 닫습니다.
        datePopup1.classList.remove('show');
        datePopupWrap.classList.remove('show');
        rotateImg.classList.remove('rotate');
    }
}, true); // 이벤트 캡처링을 활성화합니다.

// 현재 날짜와 시간으로 버튼을 설정하는 함수
function setCurrentDateTime() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.
    let currentDay = currentDate.getDate();
    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    let currentSecond = currentDate.getSeconds();
    let firstDayOfMonth = new Date(currentYear, currentMonth - 1, 1).getDay();
    let lastDateofMonth = new Date(currentYear, currentMonth, 0).getDate();

    const yearButton = document.querySelector('.date-year-select-wrap > div:nth-child(1) button');
    yearButton.textContent = currentYear;

    const monthButton = document.querySelector('.date-year-select-wrap > div:nth-child(2) button');
    monthButton.textContent = currentMonth + '월';

    const dayList = document.querySelector('.date-table ul:nth-child(2)');
    dayList.innerHTML = ''; // 기존의 날짜를 모두 지우고 다시 생성합니다.

    let dateCounter = 1;
    let startIndex = firstDayOfMonth; // 월의 첫째 날의 요일을 시작 인덱스로 설정
    for (let i = 0; i < startIndex; i++) {
        const li = document.createElement('li');
        li.textContent = ''; // 이전 월의 빈 칸
        dayList.appendChild(li);
    }
    for (let i = 1; i <= lastDateofMonth; i++) {
        const li = document.createElement('li');
        li.textContent = i;
        if (i === currentDay) {
            li.classList.add('active2'); // 오늘의 날짜에 'active2' 클래스 추가
        }
        dayList.appendChild(li);
        dateCounter++;
    }

    // 날짜가 표시되지 않은 부분 초기화
    while (dateCounter <= lastDateofMonth) {
        const li = document.createElement('li');
        li.textContent = ''; // 다음 월의 빈 칸
        dayList.appendChild(li);
        dateCounter++;
    }

    const hourButton = document.querySelector('.date-time > div:nth-of-type(1) button');
    hourButton.textContent = currentHour;

    const minuteButton = document.querySelector('.date-time > div:nth-of-type(2) button');
    minuteButton.textContent = currentMinute;

    const secondButton = document.querySelector('.date-time > div:nth-of-type(3) button');
    secondButton.textContent = currentSecond;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

let clickCount = 0; // 이전 달 이동 횟수를 저장하는 변수

// 이전 월로 이동 버튼 클릭 이벤트 설정
const previousMonthButton = document.querySelector('.date-left');

// date-left 클릭 이벤트 핸들러 함수
previousMonthButton.addEventListener('click', () => {
  clickCount++; // 이전 달 이동 횟수 증가
  goToPreviousMonth(); // 이전 월로 이동
});

// 이전 월로 이동하는 함수
function goToPreviousMonth() {
    // 현재 날짜 정보 가져오기
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.
  
    // 이전 달로 설정
    currentMonth -= clickCount; // 이전 달 이동 횟수만큼 현재 월에서 감산
  
    // 1월보다 작으면 12월로 이동
    if (currentMonth < 1) {
      currentMonth = 12;
      currentYear--;
    }
  
    // 이전 월로 설정된 날짜로 표시 업데이트
    setCurrentMonthDates(currentYear, currentMonth);
  
    // 이전 월로 변경된 텍스트로 버튼 업데이트
    const monthButton = document.querySelector('.date-year-select-wrap > div:nth-child(2) button');
    monthButton.textContent = currentMonth + '월';
  
    // 이전 월로 변경된 텍스트로 연도 버튼 업데이트
    const yearButton = document.querySelector('.date-year-select-wrap > div:nth-child(1) button');
    yearButton.textContent = currentYear;
  }


let clickCountRight = 0; // .date-right 클릭 횟수를 저장하는 변수

// 다음 월로 이동 버튼 클릭 이벤트 설정
const nextMonthButton = document.querySelector('.date-right');

// date-right 클릭 이벤트 핸들러 함수
nextMonthButton.addEventListener('click', () => {
    clickCountRight++; // 클릭 횟수 증가
    goToNextMonth(); // 다음 월로 이동
});

// 다음 월로 이동하는 함수
function goToNextMonth() {
    // 현재 날짜 정보 가져오기
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.

    // 클릭 횟수에 따라 다음 월 설정
    currentMonth += clickCountRight; // 클릭 횟수만큼 현재 월에 추가
    while (currentMonth > 12) { // 다음 월이 12월보다 클 경우
        currentMonth -= 12; // 다음 년도 1월로 이동
        currentYear++; // 다음 년도로 설정
    }

    // 이전에 date-left 버튼을 클릭하여 이전 달로 이동한 경우 clickCount 변수를 고려합니다.
    currentMonth -= clickCount; // 현재 월에 클릭 횟수만큼 감산합니다.
    if (currentMonth < 1) { // 현재 월이 1월보다 작을 경우
        currentMonth = 12; // 12월로 설정
        currentYear--; // 전년도로 설정
    }

    // 다음 월로 설정된 날짜로 표시 업데이트
    setCurrentMonthDates(currentYear, currentMonth);

    // 다음 월로 변경된 텍스트로 버튼 업데이트
    const monthButton = document.querySelector('.date-year-select-wrap > div:nth-child(2) button');
    monthButton.textContent = currentMonth + '월';   

    // 다음 월로 변경된 텍스트로 연도 버튼 업데이트
    const yearButton = document.querySelector('.date-year-select-wrap > div:nth-child(1) button');
    yearButton.textContent = currentYear;
}


// 해당 월의 날짜를 설정하는 함수
function setCurrentMonthDates(currentYear, currentMonth) {
    // 현재 날짜 정보 가져오기
    let currentDate = new Date();
    let currentDay = currentDate.getDate();
  
    // 해당 월의 첫째 날을 구합니다.
    const firstDayOfMonth = new Date(currentYear, currentMonth - 1, 1);
  
    // 해당 월의 마지막 날을 구합니다.
    const previousMonthLastDate = new Date(currentYear, currentMonth - 2, 0).getDate();
  
    // 달력의 날짜를 가져옵니다.
    const dateList = document.querySelectorAll('.date-table ul:nth-child(2) li');
  
    // 날짜를 초기화합니다.
    dateList.forEach(date => {
      date.textContent = '';
      date.classList.remove('active2');
    });
  
    // 해당 월의 첫째 날이 무슨 요일인지 가져옵니다. (0: 일요일, 1: 월요일, ..., 6: 토요일)
    const firstDayOfWeek = firstDayOfMonth.getDay();
  
    // 달력의 날짜를 설정합니다.
    let dateCounter = 1;
    for (let i = 0; i < dateList.length; i++) {
      if (i >= firstDayOfWeek && dateCounter <= previousMonthLastDate) {
        dateList[i].textContent = dateCounter;
        // dateCounter 변수를 1씩 증가시킵니다.
        dateCounter++;
      }
    }
  }