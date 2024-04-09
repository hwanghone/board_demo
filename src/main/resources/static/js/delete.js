// 1. 상단 삭제 버튼 클릭 시 모달창 노출

const deleteBtn = document.querySelector('.delete-btn');
const deleteModal = document.querySelector('.modal-popup-wrap');

deleteBtn.addEventListener('click', function(event){
    if (event.target.tagName === 'BUTTON') {
        deleteModal.classList.add('show');
    }
}); 

// 모달창 닫기

const closeBtn = document.querySelectorAll('.popup-btn button');

closeBtn.forEach(button => {
    button.addEventListener('click', () => {
        deleteModal.classList.remove('show');
    });
});

// 2. 답글 삭제 버튼 클릭 시 모달창 노출

const deleteBtn2 = document.querySelectorAll('.content-written-btn .delete-btn2');
const deleteModal2 = document.querySelector('.modal-popup-wrap2');

deleteBtn2.forEach(button => {
    button.addEventListener('click', function(event) {
        deleteModal2.classList.add('show');
    });
});

// 모달창 닫기

const closeBtn2 = document.querySelectorAll('.modal-popup-wrap2 .popup-btn button');

closeBtn2.forEach(button => {
    button.addEventListener('click', () => {
        deleteModal2.classList.remove('show');
    });
});