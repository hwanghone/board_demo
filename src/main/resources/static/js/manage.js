const manageSelectWrap = document.querySelectorAll('.manage-select-wrap');
const manageBtnWrap = document.querySelectorAll('.manage-main-btn');
const manageOptions = document.querySelectorAll('.manage-option');
const rotateImgs = document.querySelectorAll('.img-rotate');
const defaltBtn2 = document.querySelectorAll('.defalt2');

// 모든 defaltBtn2에 active3 클래스 추가
defaltBtn2.forEach(btn => {
    btn.classList.add('active3');
});

// 각 버튼 클릭 이벤트 핸들러 추가
manageBtnWrap.forEach((btnWrap, index) => {
    btnWrap.addEventListener('click', function(event) {
        const manageOption = this.nextElementSibling;
        const rotateImg = rotateImgs[index];
        
        // 클릭한 요소가 버튼인지 이미지인지 확인
        if (event.target.tagName === 'BUTTON' || event.target.classList.contains('img-rotate')) {
            // 다른 manageOptions 숨기기
            manageOptions.forEach(option => {
                if (option !== manageOption) {
                    option.classList.remove('visible3');
                }
            });

            // manage-option의 표시 여부 토글
            manageOption.classList.toggle('visible3');

            // 이미지 회전
            rotateImg.classList.toggle('rotated3');       
        }
    });
});


// 각 manage-option 안의 버튼 클릭 이벤트 핸들러 추가
Array.from(manageOptions).forEach(option => {
    option.addEventListener('click', function(event) {
        // 클릭한 요소가 버튼인지 확인
        if (event.target.tagName === 'BUTTON') {
            // 선택된 옵션 버튼의 텍스트 가져오기
            const selectedOptionText = event.target.textContent;

            // 해당 버튼 영역에 있는 버튼 텍스트 변경
            const btnWrap = this.parentElement;
            const mainBtn = btnWrap.querySelector('button');
            mainBtn.textContent = selectedOptionText;

            // 현재 manage-option 숨기기
            this.classList.remove('visible3');

            // 이미지 원래대로 돌리기
            const rotateImg = btnWrap.querySelector('.img-rotate');
            rotateImg.classList.remove('rotated3');  

            // 이전에 선택된 버튼에서 active 클래스 제거
            Array.from(manageOptions).forEach(button => {
                if (button !== this) {
                    button.classList.remove('active2');
                }
            });        

            // 선택된 버튼에 active 클래스 추가
            event.target.classList.add('active2');   
            
            // 모든 defaltBtn2에서 active3 클래스 추가
            defaltBtn2.forEach(btn => {
                btn.classList.add('active3');
            });

            // 현재 선택된 버튼의 defaltBtn2에서 active3 클래스 제거
            const currentDefaltBtn2 = event.target.closest('.manage-select-wrap').querySelector('.defalt2');
            currentDefaltBtn2.classList.remove('active3');            
        }
    });
});

// 외부 클릭 시 선택박스 닫기
document.addEventListener('click', function(event) {
    manageSelectWrap.forEach((selectWrap, index) => {
        const manageOption = selectWrap.querySelector('.manage-option.visible3');
        const rotateImg = rotateImgs[index];

        // 클릭한 요소가 manage-select-wrap 내부 요소가 아니면, 즉 선택박스 외부를 클릭한 경우
        if (!event.target.closest('.manage-select-wrap')) {
            // 현재 열려 있는 선택박스 닫기
            if (manageOption) {
                manageOption.classList.remove('visible3');
            }
            if (rotateImg) {
                rotateImg.classList.remove('rotated3');
            }
        }
    });
});