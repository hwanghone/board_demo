const consultings = document.querySelectorAll('.consulting-hover');
const consultingModal = document.querySelector('.modal-popup-wrap5');

consultings.forEach((consulting) => {
    consulting.addEventListener('click', function(event) {
        if (event.target.tagName === 'P') {
            consultingModal.classList.add('show');
        }
    });
});

// 모달창 닫기
const modalCloseBtns = document.querySelectorAll('.pop-red-btn');

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener('click', () => {
        consultingModal.classList.remove('show');
    });
});


// 상담 추가 textarea 토글
document.addEventListener('DOMContentLoaded', function() {
    const addWriteButtons = document.querySelectorAll('.add-write');
    const consultingText = document.querySelector('.consulting-text');

    addWriteButtons.forEach(addWriteButton => {
        let isClicked = false; // 클릭 여부를 저장하는 변수

        addWriteButton.addEventListener('click', () => {
            // consulting-text 클래스 토글
            consultingText.classList.toggle('show');

            // 이미지 변경
            const imgElement = addWriteButton.querySelector('img');
            const imgSrc = consultingText.classList.contains('show') ? '../static/img/close.png' : '../static/img/edit.png';
            imgElement.src = imgSrc;

            // 클릭된 상태로 변경
            isClicked = true;
        });

        // before-img에 마우스를 올렸을 때 이미지 변경 (클릭하기 전에만 적용)
        const beforeImg = addWriteButton.querySelector('.before-img');
        beforeImg.addEventListener('mouseover', () => {
            if (!isClicked) { // 클릭되지 않은 상태에서만 적용
                beforeImg.src = '../static/img/edit2.png';
            }
        });

        // before-img에서 마우스가 벗어났을 때 이미지 원래대로 복원 (클릭하기 전에만 적용)
        beforeImg.addEventListener('mouseout', () => {
            if (!isClicked) { // 클릭되지 않은 상태에서만 적용
                beforeImg.src = '../static/img/edit.png';
            }
        });   

        // before-img를 클릭하여 이미지 변경
        beforeImg.addEventListener('click', () => {
            const imgElement = addWriteButton.querySelector('img');
            imgElement.src = '../static/img/close.png';

            // 클릭된 상태로 변경
            isClicked = true;
        });     
    });
});

// textarea에 텍스트 작성시 check 아이콘 생성

document.addEventListener('DOMContentLoaded', function() {
    const consultingTextArea = document.getElementById('consultingTextArea');
    const addWriteButton = document.getElementById('addWriteButton');
    const imgElement = addWriteButton.querySelector('img');

    consultingTextArea.addEventListener('input', function() {
        if (consultingTextArea.value.trim() !== '') {
            // 텍스트가 입력되면 이미지를 변경
            imgElement.src = '../static/img/ok.png';
        } else {
            // 텍스트가 없으면 이미지를 원래대로 변경
            imgElement.src = '../static/img/close.png';
        }
    });
});
