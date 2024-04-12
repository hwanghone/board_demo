document.addEventListener('click', function(event) {
    console.log("event target: ", event.target);
    if (!event.target.closest('.date-popup-wrap') && !event.target.classList.contains('date-popup-btn'))
        console.log("event.target invoke!")
        document.querySelector('.date-popup-wrap').classList.remove('show');
}, true);

function datePopup(elements) {
    const popup = elements.nextElementSibling;
    const show = popup.classList.toggle('show');
    console.log('show: ', show);
}

function dayPick(elements) {
    const dateNum = document.querySelectorAll('.date-num');
    dateNum.forEach(dn => {
        const _classList = dn.classList;
        (dn===elements) ? _classList.toggle("active2") : _classList.remove("active2")
    })
}