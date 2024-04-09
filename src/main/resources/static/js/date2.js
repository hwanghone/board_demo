
// 이미지 회전
const yearSelectButtons2 = document.querySelectorAll('.date-popup-wrap2 .date-year-select-wrap > div > button');


yearSelectButtons2.forEach(button => {
    button.addEventListener('click', () => {
        const rotateImg2 = button.nextElementSibling.querySelector('.rotate-img');
        rotateImg2.style.transform += ' rotate(180deg)';
    });
});

const timeSelectButtons2 = document.querySelectorAll('.date-popup-wrap2 .date-time > div > button');

timeSelectButtons2.forEach(button => {
    button.addEventListener('click', () => {
        const rotateImg2 = button.nextElementSibling.querySelector('.rotate-img');
        rotateImg2.style.transform += ' rotate(180deg)';
    });
});


// 클릭시 해당 옵션값 노출
const dateYearButton2 = document.querySelector('.date-popup-wrap2 .date-year-select-wrap div:nth-child(1) button');
const monthButton2 = document.querySelector('.date-popup-wrap2 .date-year-select-wrap div:nth-child(2) button');
const dateTimeButton4 = document.querySelector('.date-popup-wrap2 .date-time div:nth-of-type(1) button');
const dateTimeButton5 = document.querySelector('.date-popup-wrap2 .date-time div:nth-of-type(2) button');
const dateTimeButton6 = document.querySelector('.date-popup-wrap2 .date-time div:nth-of-type(3) button');
const yearSection2 = document.querySelector('.date-popup-wrap2 .year');
const monthSection2 = document.querySelector('.date-popup-wrap2 .month');
const hourSection2 = document.querySelector('.date-popup-wrap2 .hour');
const minuteSection2 = document.querySelector('.date-popup-wrap2 .minute');
const secondSection2 = document.querySelector('.date-popup-wrap2 .second');

dateYearButton2.addEventListener('click', () => {
    yearSection2.classList.toggle('show');
    monthSection2.classList.remove('show');
    hourSection2.classList.remove('show');
    minuteSection2.classList.remove('show');
    secondSection2.classList.remove('show');
});

monthButton2.addEventListener('click', () => {
    monthSection2.classList.toggle('show');
    yearSection2.classList.remove('show');
    hourSection2.classList.remove('show');
    minuteSection2.classList.remove('show');
    secondSection2.classList.remove('show');
});

dateTimeButton4.addEventListener('click', () => {
    hourSection2.classList.toggle('show');
    yearSection2.classList.remove('show');
    monthSection2.classList.remove('show');
    minuteSection2.classList.remove('show');
    secondSection2.classList.remove('show');
});

dateTimeButton5.addEventListener('click', () => {
    minuteSection2.classList.toggle('show');
    yearSection2.classList.remove('show');
    monthSection2.classList.remove('show');
    hourSection2.classList.remove('show');
    secondSection2.classList.remove('show');
});

dateTimeButton6.addEventListener('click', () => {
    secondSection2.classList.toggle('show');
    minuteSection2.classList.remove('show');
    yearSection2.classList.remove('show');
    monthSection2.classList.remove('show');
    hourSection2.classList.remove('show');
});




// yearSection 안에 있는 button 요소들을 선택합니다.
const yearSectionButtons2 = document.querySelectorAll('.date-popup-wrap2 .year button');

// 각 버튼을 클릭할 때마다 해당 텍스트로 변경되는 이벤트 리스너를 추가합니다.
yearSectionButtons2.forEach(button => {
    button.addEventListener('click', () => {
        const selectedText2 = button.textContent; // 클릭된 버튼의 텍스트를 가져옵니다.

        // 선택된 텍스트를 dateYearButton의 텍스트로 설정합니다.
        dateYearButton2.textContent = selectedText2;
        // yearSection을 감춥니다.
        yearSection2.classList.remove('show');
        // yearSection을 감추고 회전한 이미지를 다시 회전시킵니다.
        const rotateImg2 = dateYearButton2.nextElementSibling.querySelector('.rotate-img');
        rotateImg2.classList.toggle('rotate');        
    });
});

// monthSection 안에 있는 button 요소들을 선택합니다.
const monthSectionButtons2 = document.querySelectorAll('.date-popup-wrap2 .month button');

// 각 버튼을 클릭할 때마다 해당 텍스트로 변경되는 이벤트 리스너를 추가합니다.
monthSectionButtons2.forEach(button => {
    button.addEventListener('click', () => {
        const selectedText2 = button.textContent; // 클릭된 버튼의 텍스트를 가져옵니다.

        // 선택된 텍스트를 monthButton의 텍스트로 설정합니다.
        monthButton2.textContent = selectedText2;
        // monthSection을 감춥니다.
        monthSection2.classList.remove('show');
        const rotateImg2 = monthButton2.nextElementSibling.querySelector('.rotate-img');
        rotateImg2.classList.toggle('rotate');
    });
});

// hourSection 안에 있는 button 요소들을 선택합니다.
const hourSectionButtons2 = document.querySelectorAll('.date-popup-wrap2 .hour button');

// 각 버튼을 클릭할 때마다 해당 텍스트로 변경되는 이벤트 리스너를 추가합니다.
hourSectionButtons2.forEach(button => {
    button.addEventListener('click', () => {
        const selectedText2 = button.textContent; // 클릭된 버튼의 텍스트를 가져옵니다.

        // 선택된 텍스트를 dateTimeButton1의 텍스트로 설정합니다.
        dateTimeButton4.textContent = selectedText2;
        // hourSection을 감춥니다.
        hourSection2.classList.remove('show');
        const rotateImg2 = dateTimeButton4.nextElementSibling.querySelector('.rotate-img');
        rotateImg2.classList.toggle('rotate');
    });
});

// minuteSection 안에 있는 button 요소들을 선택합니다.
const minuteSectionButtons2 = document.querySelectorAll('.date-popup-wrap2 .minute button');

// 각 버튼을 클릭할 때마다 해당 텍스트로 변경되는 이벤트 리스너를 추가합니다.
minuteSectionButtons2.forEach(button => {
    button.addEventListener('click', () => {
        const selectedText2 = button.textContent; // 클릭된 버튼의 텍스트를 가져옵니다.

        // 선택된 텍스트를 dateTimeButton2의 텍스트로 설정합니다.
        dateTimeButton5.textContent = selectedText2;
        // minuteSection을 감춥니다.
        minuteSection2.classList.remove('show');
        const rotateImg2 = dateTimeButton5.nextElementSibling.querySelector('.rotate-img');
        rotateImg2.classList.toggle('rotate');
    });
});

// secondSection 안에 있는 button 요소들을 선택합니다.
const secondSectionButtons2 = document.querySelectorAll('.date-popup-wrap2 .second button');

// 각 버튼을 클릭할 때마다 해당 텍스트로 변경되는 이벤트 리스너를 추가합니다.
secondSectionButtons2.forEach(button => {
    button.addEventListener('click', () => {
        const selectedText2 = button.textContent; // 클릭된 버튼의 텍스트를 가져옵니다.

        // 선택된 텍스트를 dateTimeButton3의 텍스트로 설정합니다.
        dateTimeButton6.textContent = selectedText2;
        // secondSection을 감춥니다.
        secondSection2.classList.remove('show');
        const rotateImg2 = dateTimeButton6.nextElementSibling.querySelector('.rotate-img');
        rotateImg2.classList.toggle('rotate');
    });
});



