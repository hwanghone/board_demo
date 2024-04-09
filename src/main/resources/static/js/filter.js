const searchSelectWrap = document.querySelector('.search-select-wrap');
const searchMainBtn = document.querySelector('.search-main-btn');
const searchSelect = document.querySelector('.search-select');
const rotateImg = document.querySelector('.rotate-img');
const defaltBtn = document.querySelector('.defalt');

defaltBtn.classList.add('active2');

// 버튼 및 이미지 클릭 이벤트 핸들러 추가
searchMainBtn.addEventListener('click', function(event) {
    // 클릭한 요소가 search-main-btn 내의 버튼이거나 이미지인지 확인
    if (event.target.tagName === 'BUTTON' || event.target.classList.contains('rotate-img')) {
        // search-select의 표시 여부 토글
        searchSelect.classList.toggle('visible');
        
        // 이미지 회전
        rotateImg.classList.toggle('rotated');
    }
});

// search-select의 버튼 클릭 이벤트 핸들러 추가
searchSelect.addEventListener('click', function(event) {
    // 클릭한 요소가 버튼인지 확인
    if (event.target.tagName === 'BUTTON') {
        // 선택된 옵션 버튼의 텍스트 가져오기
        const selectedOptionText = event.target.textContent;

        // search-main-btn의 버튼 텍스트 변경
        searchMainBtn.querySelector('button').textContent = selectedOptionText;

        // search-select 숨기기
        searchSelect.classList.remove('visible');
        
        // 이미지 원래대로 돌리기
        rotateImg.classList.remove('rotated');

        // 이전에 선택된 버튼에서 active 클래스 제거
        searchSelect.querySelectorAll('button').forEach(button => {
            button.classList.remove('active');
        });

        // 선택된 버튼에 active 클래스 추가
        event.target.classList.add('active');

        defaltBtn.classList.remove('active2');
    }
});

// 외부 클릭 시 선택박스 닫기
document.addEventListener('click', function(event) {
    if (!event.target.closest('.search-select-wrap')) {
        searchSelect.classList.remove('visible');
        // 이미지 원래대로 돌리기
        rotateImg.classList.remove('rotated');
    }
});