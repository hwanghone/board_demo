const moreBtn = document.querySelectorAll('.more-btn');

moreBtn.forEach(btn => {
    btn.addEventListener('click', function(event) {
        // 현재 클릭한 .more-btn에 대한 처리
        const buttonSelect = this.closest('.button-select');
        const buttonBtn = buttonSelect.querySelector('.button-btn');
        if (buttonBtn) {
            // 모든 .button-btn 요소의 visible 클래스 제거
            document.querySelectorAll('.button-btn').forEach(button => {
                if (button !== buttonBtn) {
                    button.classList.remove('visible');
                }
            });

            // 현재 클릭한 .more-btn에 속한 .button-btn 토글
            buttonBtn.classList.toggle('visible');
        }

        // 이벤트 전파 방지
        event.stopPropagation();
    });
});  

// 외부 클릭 시 선택박스 닫기
document.addEventListener('click', function(event) {
    // 클릭한 요소가 .button-btn 안에 있는지 확인
    if (!event.target.closest('.button-btn')) {
        // 모든 .button-btn 요소의 visible 클래스 제거
        document.querySelectorAll('.button-btn').forEach(buttonBtn => {
            buttonBtn.classList.remove('visible');
        });
    }
});

// 모든 더보기 아이콘 요소를 가져옵니다.
const iconBtns = document.querySelectorAll('.before-img');

// 모든 아이콘에 대해 이벤트를 등록합니다.
iconBtns.forEach(iconBtn => {
    let isMore = false;

    // 클릭 이벤트를 처리합니다.
    iconBtn.addEventListener('click', () => {
        // 이 아이콘에 대한 상태를 변경합니다.
        isMore = !isMore;
        // 이미지를 변경합니다.
        iconBtn.src = isMore ? '../static/img/more2.png' : '../static/img/more.png';
        // 다른 아이콘들의 이미지를 초기화합니다.
        iconBtns.forEach(otherIconBtn => {
            if (otherIconBtn !== iconBtn) {
                otherIconBtn.src = '../static/img/more.png';
            }
        });
    });

    // 마우스 오버 이벤트를 처리합니다.
    iconBtn.addEventListener('mouseover', () => {
        if (!isMore) {
            iconBtn.src = '../static/img/more2.png';
        }
    });

    // 마우스 아웃 이벤트를 처리합니다.
    iconBtn.addEventListener('mouseout', () => {
        if (!isMore) {
            iconBtn.src = '../static/img/more.png';
        }
    });
});

// 문서 전체에 클릭 이벤트를 등록합니다.
document.addEventListener('click', (event) => {
    // 클릭한 요소가 .more-btn 안에 있는지 확인합니다.
    const moreBtn = event.target.closest('.more-btn');
    if (!moreBtn) {
        // 모든 아이콘들의 이미지를 초기화합니다.
        iconBtns.forEach(iconBtn => {
            iconBtn.src = '../static/img/more.png';
        });
    }
});

//  1) 모달창 노출

const serviceModal = document.querySelector('.modal-popup-wrap6');
const serviceModal2 = document.querySelector('.modal-popup-wrap7');
const serviceModal3 = document.querySelector('.modal-popup-wrap8');

document.querySelectorAll('.button-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        if (event.target.classList.contains('service-date-btn')) {
            serviceModal.classList.add('show');
            this.closest('.button-select').querySelector('.button-btn').classList.remove('visible');
        } else if (event.target.classList.contains('service-date-btn2')) {
            serviceModal2.classList.add('show');
            this.closest('.button-select').querySelector('.button-btn').classList.remove('visible');
        } else if (event.target.classList.contains('service-date-btn3')) {
            serviceModal3.classList.add('show');
            this.closest('.button-select').querySelector('.button-btn').classList.remove('visible');
        }

    });
});


// 서비스 기간 단일 변경 - 변경 구분 선택박스

const searchSelectWrapn3 = document.querySelector('.modal-popup-wrap6 .search-select-wrap');
const changeBtn = document.querySelector('.modal-popup-wrap6 .search-main-btn');
const changeSelect = document.querySelector('.modal-popup-wrap6 .search-select2');
const imgRotate2 = document.querySelector('.modal-popup-wrap6 .rotate-img');
const defaltBtn2 = document.querySelector('.defalt2');

defaltBtn2.classList.add('active2');

changeBtn.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON' || event.target.classList.contains('rotate-img')) {
        changeSelect.classList.toggle('visible2');
        imgRotate2.classList.toggle('rotated');
    }
});


changeSelect.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const selectedOptionText = event.target.textContent;
        changeBtn.querySelector('button').textContent = selectedOptionText;
        changeSelect.classList.remove('visible2');
        imgRotate2.classList.remove('rotated');
        // 이전에 선택된 버튼에서 active 클래스 제거
        changeSelect.querySelectorAll('button').forEach(button => {
            button.classList.remove('active');
        }); 
        
        // 선택된 버튼에 active 클래스 추가
        event.target.classList.add('active');

        defaltBtn2.classList.remove('active2');         
    }
});

// 외부 클릭 시 선택박스 닫기
document.addEventListener('click', function(event) {
    if (!event.target.closest('.modal-popup-wrap6 .search-select-wrap')) {
        changeSelect.classList.remove('visible2');
        // 이미지 원래대로 돌리기
        imgRotate2.classList.remove('rotated');
    }
});

// 서비스 기간 단일 변경 모달창 닫기

const closeBtn2 = document.querySelectorAll('.modal-popup-wrap6 .popup-btn button')

closeBtn2.forEach(button => {
    button.addEventListener('click', () => {
        serviceModal.classList.remove('show');
    });
});



//  서비스 기간 이전 모달창 닫기

const cancelClose3 = document.querySelector('.modal-popup-wrap7 .pop-border-btn');

cancelClose3.addEventListener('click', () => {
    serviceModal2.classList.remove('show');
});


//  확인 버튼 클릭 시 다음 모달창 노출

const okClose4 = document.querySelector('.modal-popup-wrap7 .pop-red-btn');
const serviceModal4 = document.querySelector('.modal-popup-wrap9')

okClose4.addEventListener('click', () => {
    serviceModal2.classList.remove('show');
    serviceModal4.classList.add('show');
});


// 다음 모달창에서 확인 버튼 누를 시 모달창 닫기

const okClose5 = document.querySelector('.modal-popup-wrap9 .pop-red-btn');

okClose5.addEventListener('click', () => {
    serviceModal4.classList.remove('show');
});



// 아이피 변경 모달창 닫기

const closeBtn4 = document.querySelectorAll('.modal-popup-wrap8 .popup-btn button')

closeBtn4.forEach(button => {
    button.addEventListener('click', () => {
        serviceModal3.classList.remove('show');
    });
});