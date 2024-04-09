const tableSelectWrap2 = document.querySelector('.table-select-wrap2');
const tableMainBtn2 = document.querySelector('.table-main-btn2');
const tableSelect2 = document.querySelector('.table-select2');
const rotateImg3 = document.querySelector('.rotate-img3');
const defaltBtn4 = document.querySelector('.defalt4');


defaltBtn4.classList.add('active4');

// 버튼 및 이미지 클릭 이벤트 핸들러 추가
tableMainBtn2.addEventListener('click', function(event) {
    // 클릭한 요소가 table-select-wrap 내의 버튼이거나 이미지인지 확인
    if (event.target.tagName === 'BUTTON' || event.target.classList.contains('rotate-img3')) {
        // table-select의 표시 여부 토글
        tableSelect2.classList.toggle('visible3');

        // 이미지 회전
        rotateImg3.classList.toggle('rotated2');
    }
});

// table-select의 버튼 클릭 이벤트 핸들러 추가
tableSelect2.addEventListener('click', function(event) {
    // 클릭한 요소가 버튼인지 확인
    if (event.target.tagName === 'BUTTON') {
        // 선택된 옵션 버튼의 텍스트 가져오기
        const selectedOptionText = event.target.textContent;

        // table-select-wrap의 버튼 텍스트 변경
        tableMainBtn2.querySelector('button').textContent = selectedOptionText;

        // table-select 숨기기
        tableSelect2.classList.remove('visible3');

        // 이미지 원래대로 돌리기
        rotateImg3.classList.remove('rotated2');

        // 이전에 선택된 버튼에서 active 클래스 제거
        tableSelect2.querySelectorAll('button').forEach(button => {
            button.classList.remove('active2');
        });

        // 선택된 버튼에 active 클래스 추가
        event.target.classList.add('active2');     
        
        defaltBtn4.classList.remove('active4');
    }
});

// 외부 클릭 시 선택박스 닫기
document.addEventListener('click', function(event) {
    // 클릭한 요소가 table-select-wrap 내부 요소가 아니면, 즉 table-select-wrap 영역 외부를 클릭한 경우
    if (!event.target.closest('.table-select-wrap2')) {
        // table-select를 숨김
        tableSelect2.classList.remove('visible3');
        // 이미지 원래대로 돌리기
        rotateImg3.classList.remove('rotated2');
    }
});
