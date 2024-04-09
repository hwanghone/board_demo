const topButton = document.querySelector('.top');

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    if (scrollY > 1) {
        topButton.style.display = 'block';
        topButton.style.bottom = '60px';
    } else {
        topButton.style.display = 'none';
        topButton.style.bottom = 'initial';
    }
});


topButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
