const lockBtn = document.querySelector('.before-img');
let isLocked = false;

lockBtn.addEventListener('click', () => {
    isLocked = !isLocked;
    lockBtn.src = isLocked ? '../static/img/lock3.png' : '../static/img/lock2.png';
});

// 클릭하기 전에만 이미지 변경
lockBtn.addEventListener('mouseover', () => {
    if (!isLocked) { // 클릭되지 않은 상태에서만 적용
        lockBtn.src = '../static/img/lock2.png';
    }
});

// 클릭하기 전에만 이미지 변경
lockBtn.addEventListener('mouseout', () => {
    if (!isLocked) { // 클릭되지 않은 상태에서만 적용
        lockBtn.src = '../static/img/lock2.png';
    }
});

  
  