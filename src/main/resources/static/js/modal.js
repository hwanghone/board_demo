// 관리자 등급/비밀번호 변경 버튼 클릭 시 모달창 노출

const changeBtn = document.querySelectorAll('.change-btn');
const alertModal = document.querySelector('.modal-popup-wrap');

changeBtn.forEach(button => {
    button.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') { 
            alertModal.classList.add('show');
        }
    });
});

// 모달창 닫기
const closeBtn = document.querySelectorAll('.popup-btn button')

closeBtn.forEach(button => {
    button.addEventListener('click', () => {
        alertModal.classList.remove('show');
    });
});


// 삭제 아이콘 클릭 시 모달창 노출

const deleteBtn = document.querySelectorAll('.icon-button');
const deleteModal = document.querySelector('.modal-popup-wrap2');

deleteBtn.forEach(button => {
    button.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            deleteModal.classList.add('show');
        }
    });
});


// 삭제 모달창 닫기

const closeBtn2 = document.querySelectorAll('.popup-btn button')

closeBtn2.forEach(button => {
    button.addEventListener('click', () => {
        deleteModal.classList.remove('show');
    });
});

