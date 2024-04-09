const searchSelectWrapn2 = document.querySelector('.search-select-wrap2');
const searchMainBtn2 = document.querySelector('.search-main-btn2');
const searchSelect2 = document.querySelector('.search-select2');
const rotateImg2 = document.querySelector('.rotate-img3');
const defaltBtn2 = document.querySelector('.defalt2');

defaltBtn2.classList.add('active2');

// 버튼 및 이미지 클릭 이벤트 핸들러 추가
searchMainBtn2.addEventListener('click', function(event) {
    // 클릭한 요소가 search-main-btn 내의 버튼이거나 이미지인지 확인
    if (event.target.tagName === 'BUTTON' || event.target.classList.contains('rotate-img3')) {
        // search-select의 표시 여부 토글
        searchSelect2.classList.toggle('visible2');
        
        // 이미지 회전
        rotateImg2.classList.toggle('rotated2');
    }
});


// search-select2의 버튼 클릭 이벤트 핸들러 추가
searchSelect2.addEventListener('click', function(event) {
    // 클릭한 요소가 버튼인지 확인
    if (event.target.tagName === 'BUTTON') {
        // 선택된 옵션 버튼의 텍스트 가져오기
        const selectedOptionText2 = event.target.textContent;

        // search-main-btn의 버튼 텍스트 변경
        searchMainBtn2.querySelector('button').textContent = selectedOptionText2;

        // search-select 숨기기
        searchSelect2.classList.remove('visible2');
        
        // 이미지 원래대로 돌리기
        rotateImg2.classList.remove('rotated2');
        // 이전에 선택된 버튼에서 active 클래스 제거
        searchSelect2.querySelectorAll('button').forEach(button => {
            button.classList.remove('active2');
        });

        // 선택된 버튼에 active 클래스 추가
        event.target.classList.add('active2');     
        
        defaltBtn2.classList.remove('active2');
    }
});

// 외부 클릭 시 선택박스 닫기
document.addEventListener('click', function(event) {
    if (!event.target.closest('.search-select-wrap2')) {
        searchSelect2.classList.remove('visible2');
        // 이미지 원래대로 돌리기
        rotateImg2.classList.remove('rotated2');
    }
});