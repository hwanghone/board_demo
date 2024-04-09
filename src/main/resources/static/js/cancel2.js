// 1. 전체 취소 버튼 클릭 시 모달창 노출

const cancelAll = document.querySelector('.cancel-all');
const cancelModal = document.querySelector('.modal-popup-wrap');

cancelAll.addEventListener('click', function(event){
    if (event.target.tagName === 'BUTTON') {
        cancelModal.classList.add('show');
    }
}); 

// 모달창 닫기

const cancelClose = document.querySelector('.pop-border-btn');

cancelClose.addEventListener('click', () => {
    cancelModal.classList.remove('show');
});

// 확인 버튼 클릭 시 다음 모달창 노출

const okClose = document.querySelector('.pop-red-btn');
const cancelModal2 = document.querySelector('.modal-popup-wrap2')

okClose.addEventListener('click', () => {
    cancelModal.classList.remove('show');
    cancelModal2.classList.add('show');
});


// 다음 모달창에서 확인/취소 버튼 누를 시 모달창 닫기

const closeBtn = document.querySelectorAll('.modal-popup-wrap2 .popup-btn button')

closeBtn.forEach(button => {
    button.addEventListener('click', () => {
        cancelModal2.classList.remove('show');
    });
});




// 2. 부분 취소 버튼 클릭 시 모달창 노출


const partCancel = document.querySelector('.part-cancel');
const partModal = document.querySelector('.modal-popup-wrap3');

partCancel.addEventListener('click', function(event){
    if (event.target.tagName === 'BUTTON') {
        partModal.classList.add('show');
    }
}); 

// 모달창 닫기

const closeBtn2 = document.querySelectorAll('.modal-popup-wrap3 .popup-btn button')

closeBtn2.forEach(button => {
    button.addEventListener('click', () => {
        partModal.classList.remove('show');
    });
});

