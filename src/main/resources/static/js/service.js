// 1. 기간 일괄 변경 버튼 클릭 시 모달창 노출

const bulkChange = document.querySelector('.bulk-change');
const bulkModal = document.querySelector('.modal-popup-wrap');

bulkChange.addEventListener('click', function(event){
    if (event.target.tagName === 'BUTTON') {
        bulkModal.classList.add('show');
    }
}); 


// 기간 일괄 변경 선택박스

const searchSelectWrapn2 = document.querySelector('.search-select-wrap');
const searchMainBtn = document.querySelector('.search-main-btn');
const searchSelect = document.querySelector('.search-select2');
const rotateImg = document.querySelector('.rotate-img3');
const defaltBtn = document.querySelector('.defalt');

defaltBtn.classList.add('active2');

searchMainBtn.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON' || event.target.classList.contains('rotate-img3')) {
        searchSelect.classList.toggle('visible2');
        rotateImg.classList.toggle('rotated');
    }
});

// search-select의 버튼 클릭 이벤트 핸들러 추가
searchSelect.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const selectedOptionText = event.target.textContent;
        searchMainBtn.querySelector('button').textContent = selectedOptionText;
        searchSelect.classList.remove('visible2');
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
        searchSelect.classList.remove('visible2');
        // 이미지 원래대로 돌리기
        rotateImg.classList.remove('rotated');
    }
});


// 모달창 닫기

const cancelClose = document.querySelector('.pop-border-btn');

cancelClose.addEventListener('click', () => {
    bulkModal.classList.remove('show');
});


// 확인 버튼 클릭 시 다음 모달창 노출

const okClose = document.querySelector('.pop-red-btn');
const bulkModal2 = document.querySelector('.modal-popup-wrap4')

okClose.addEventListener('click', () => {
    bulkModal.classList.remove('show');
    bulkModal2.classList.add('show');
});


// 다음 모달창에서 확인 버튼 누를 시 모달창 닫기

const closeBtn = document.querySelectorAll('.modal-popup-wrap4 .popup-btn button')

closeBtn.forEach(button => {
    button.addEventListener('click', () => {
        bulkModal2.classList.remove('show');
    });
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 2. 기간 일괄 이전 버튼 클릭 시 모달창 노출

const bulkTransfer = document.querySelector('.bulk-transfer');
const transferModal = document.querySelector('.modal-popup-wrap2');

bulkTransfer.addEventListener('click', function(event){
    if (event.target.tagName === 'BUTTON') {
        transferModal.classList.add('show');
    }
}); 


// 기간 일괄 이전 선택박스

const targetSelectWrap = document.querySelector('.target-search-wrap');
const targetMainBtn = document.querySelector('.target-main-btn');
const targetInput = document.querySelector('.target-search input');
const targetSelect = document.querySelector('.target-select');
const targetBtns = document.querySelectorAll('.target-btn');
const imgRotate = document.querySelector('.img-rotate');
const defaltBtn4 = document.querySelector('.defalt2');

defaltBtn4.classList.add('active');

targetMainBtn.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON' || event.target.classList.contains('img-rotate')) {
        targetSelect.classList.toggle('visible');
        imgRotate.classList.toggle('rotated');
    }
});


targetSelect.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const selectedOptionText = event.target.textContent;
        targetMainBtn.querySelector('button').textContent = selectedOptionText;
        targetSelect.classList.remove('visible');
        imgRotate.classList.remove('rotated');
        // 이전에 선택된 버튼에서 active 클래스 제거
        targetSelect.querySelectorAll('button').forEach(button => {
            button.classList.remove('active');
        });
        // 선택된 버튼에 active 클래스 추가
        event.target.classList.add('active');

        defaltBtn4.classList.remove('active');              
    }
});

targetBtns.forEach(btn => {
    btn.addEventListener('click', function(event) {
        const clickedBtn = event.currentTarget;
        const buttonText = clickedBtn.querySelector('p').textContent;
        targetInput.value = buttonText;

        // 이전에 선택된 target-btn의 active 클래스 제거
        targetBtns.forEach(btn => {
            btn.classList.remove('active');
        });

        // 현재 선택된 target-btn에 active 클래스 추가
        clickedBtn.classList.add('active');
    });
});


// 외부 클릭 시 선택박스 닫기
document.addEventListener('click', function(event) {
    if (!event.target.closest('.target-search-wrap')) {
        targetSelect.classList.remove('visible');
        // 이미지 원래대로 돌리기
        imgRotate.classList.remove('rotated');
    }
});

// 모달창 닫기


const cancelClose2 = document.querySelector('.modal-popup-wrap2 .pop-border-btn');

cancelClose2.addEventListener('click', () => {
    transferModal.classList.remove('show');
});


// 확인 버튼 클릭 시 다음 모달창 노출

const okClose2 = document.querySelector('.modal-popup-wrap2 .pop-red-btn');
const transferModal2 = document.querySelector('.modal-popup-wrap5')

okClose2.addEventListener('click', () => {
    transferModal.classList.remove('show');
    transferModal2.classList.add('show');
});


// 다음 모달창에서 확인 버튼 누를 시 모달창 닫기

const okClose3 = document.querySelector('.modal-popup-wrap5 .pop-red-btn');

okClose3.addEventListener('click', () => {
    transferModal2.classList.remove('show');
});








