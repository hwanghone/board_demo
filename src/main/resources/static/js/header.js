document.addEventListener('DOMContentLoaded', function() {
    const currentMenu = localStorage.getItem("currentMenu");
    if (currentMenu) {
        const mb = document.getElementById(currentMenu);
        const _classList = mb.classList;
        const _menu = mb.nextElementSibling;

        _classList.add("active")
        _menu.style.maxHeight = _menu.scrollHeight+'px';
        localStorage.setItem("currentMenu", mb.id);
    }
});

function menuToggle(elements) {
    document.querySelectorAll(".menu-btn").forEach(mb => {
        const _classList = mb.classList;
        const _menu = mb.nextElementSibling;

        if (mb===elements) {
            if (_classList.toggle("active")) {
                _menu.style.maxHeight = _menu.scrollHeight+'px';
                localStorage.setItem("currentMenu", mb.id);
            } else {
                _menu.style.maxHeight = null;
                localStorage.removeItem("currentMenu");
            }
        } else {
            _classList.remove("active")
            if(_menu) _menu.style.maxHeight = null;
        }
    })
}