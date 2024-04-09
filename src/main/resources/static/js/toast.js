const toastMouseList = document.querySelectorAll('.toast-mouse');
const toastList = document.querySelectorAll('.toast');

toastMouseList.forEach((toastMouse, index) => {
    const toast = toastList[index];

    // 마우스가 toast-mouse에 진입하면 해당하는 toast를 표시
    toastMouse.addEventListener('mouseenter', function() {
        toast.style.display = 'block';
    });

    // 마우스가 toast-mouse에서 떠나면 해당하는 toast를 숨김
    toastMouse.addEventListener('mouseleave', function() {
        toast.style.display = 'none';
    });
});