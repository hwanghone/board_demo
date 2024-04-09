// 이미지 회전

// date-year-select-wrap 안에 있는 button 요소들을 선택합니다.
const yearSelectButtons = document.querySelectorAll('.date-year-select-wrap > div > button');

// 각 버튼을 클릭할 때마다 이미지를 회전시키는 이벤트 리스너를 추가합니다.
yearSelectButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const rotateImg = button.nextElementSibling.querySelector('.rotate-img');
        rotateImg.classList.toggle('rotate');
    });
});


const timeSelectButtons = document.querySelectorAll('.date-time > div > button');

timeSelectButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const rotateImg = button.nextElementSibling.querySelector('.rotate-img');
        rotateImg.classList.toggle('rotate');
    });
});


// 클릭시 해당 옵션값 노출
const dateYearButton = document.querySelector('.date-year-select-wrap div:nth-child(1) button');
const monthButton = document.querySelector('.date-year-select-wrap div:nth-child(2) button');
const dateTimeButton1 = document.querySelector('.date-time div:nth-of-type(1) button');
const dateTimeButton2 = document.querySelector('.date-time div:nth-of-type(2) button');
const dateTimeButton3 = document.querySelector('.date-time div:nth-of-type(3) button');
const yearSection = document.querySelector('.year');
const monthSection = document.querySelector('.month');
const hourSection = document.querySelector('.hour');
const minuteSection = document.querySelector('.minute');
const secondSection = document.querySelector('.second');

dateYearButton.addEventListener('click', () => {
    yearSection.classList.toggle('show');
    monthSection.classList.remove('show');
    hourSection.classList.remove('show');
    minuteSection.classList.remove('show');
    secondSection.classList.remove('show');
});
monthButton.addEventListener('click', () => {
    monthSection.classList.toggle('show');
    yearSection.classList.remove('show');
    hourSection.classList.remove('show');
    minuteSection.classList.remove('show');
    secondSection.classList.remove('show');
});
dateTimeButton1.addEventListener('click', () => {
    hourSection.classList.toggle('show');
    yearSection.classList.remove('show');
    monthSection.classList.remove('show');
    minuteSection.classList.remove('show');
    secondSection.classList.remove('show');
});
dateTimeButton2.addEventListener('click', () => {
    minuteSection.classList.toggle('show');
    yearSection.classList.remove('show');
    monthSection.classList.remove('show');
    hourSection.classList.remove('show');
    secondSection.classList.remove('show');
});
dateTimeButton3.addEventListener('click', () => {
    secondSection.classList.toggle('show');
    minuteSection.classList.remove('show');
    yearSection.classList.remove('show');
    monthSection.classList.remove('show');
    hourSection.classList.remove('show');
});


// yearSection 안에 있는 button 요소들을 선택합니다.
const yearSectionButtons = document.querySelectorAll('.year button');
// 각 버튼을 클릭할 때마다 해당 텍스트로 변경되는 이벤트 리스너를 추가합니다.
yearSectionButtons.forEach(button => { 
    button.addEventListener('click', () => {
        const selectedText = button.textContent; // 클릭된 버튼의 텍스트를 가져옵니다.
        // 선택된 텍스트를 dateYearButton의 텍스트로 설정합니다.
        dateYearButton.textContent = selectedText;
        // yearSection을 감춥니다.
        yearSection.classList.remove('show');
        // yearSection을 감추고 회전한 이미지를 다시 회전시킵니다.
        const rotateImg = dateYearButton.nextElementSibling.querySelector('.rotate-img');
        rotateImg.classList.toggle('rotate');
    });
});
// monthSection 안에 있는 button 요소들을 선택합니다.
const monthSectionButtons = document.querySelectorAll('.month button');
monthSectionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedText = button.textContent; 
        monthButton.textContent = selectedText;
        monthSection.classList.remove('show');
        const rotateImg = monthButton.nextElementSibling.querySelector('.rotate-img');
        rotateImg.classList.toggle('rotate');
    });
});
// hourSection 안에 있는 button 요소들을 선택합니다.
const hourSectionButtons = document.querySelectorAll('.hour button');
hourSectionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedText = button.textContent;
        dateTimeButton1.textContent = selectedText;
        hourSection.classList.remove('show');
        const rotateImg = dateTimeButton1.nextElementSibling.querySelector('.rotate-img');
        rotateImg.classList.toggle('rotate');
    });
});
// minuteSection 안에 있는 button 요소들을 선택합니다.
const minuteSectionButtons = document.querySelectorAll('.minute button');
minuteSectionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedText = button.textContent;
        dateTimeButton2.textContent = selectedText;
        minuteSection.classList.remove('show');
        const rotateImg = dateTimeButton2.nextElementSibling.querySelector('.rotate-img');
        rotateImg.classList.toggle('rotate');
    });
});
// secondSection 안에 있는 button 요소들을 선택합니다.
const secondSectionButtons = document.querySelectorAll('.second button');
secondSectionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedText = button.textContent;
        dateTimeButton3.textContent = selectedText;
        secondSection.classList.remove('show');
        const rotateImg = dateTimeButton3.nextElementSibling.querySelector('.rotate-img');
        rotateImg.classList.toggle('rotate');
    });
});
