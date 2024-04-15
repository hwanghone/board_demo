const setText = (selector, v) => document.querySelector(selector).textContent = v;
const getValue = (selector) => document.querySelector(selector).textContent.replace(/\D/g, '');

document.addEventListener('DOMContentLoaded', function() {
    const _currentDate = new Date();

    setText(".year-btn", _currentDate.getFullYear());
    setText(".month-btn", _currentDate.getMonth()+1+"월");

    [".year", ".month", ".hour", ".minute", ".second"].forEach(field => {
        document.getElementById(field.slice(1)).value = getValue(field + "-btn");
    });

    const $day = document.querySelector(".date-num");
    $day.classList.add("active2")
    document.getElementById("day").value = $day.value;
});


document.addEventListener('click', function(event) {
    if (!event.target.closest('.date-popup-wrap')) {
        document.querySelector('.date-popup-wrap').classList.remove('show');
    }
}, true);

function datePopupOpen(elements) {
    const $yearSelect = document.querySelector('.year.year-select');
    if ($yearSelect.children.length <= 0) {
        const _currentYear = new Date().getFullYear();
        for (let i=_currentYear-4; i<=_currentYear; i++) {
            const $newBtn = document.createElement('button');
            $newBtn.className = "year-btn"
            $newBtn.value = String(i);
            $newBtn.textContent = String(i);
            $newBtn.onclick = function () { datePick(this) };
            $yearSelect.appendChild($newBtn);
        }
    }

    elements.nextElementSibling.classList.add('show');
}

function datePopupCancel(elements) {
    const $popup = elements.parentNode.parentNode;
    $popup.classList.remove('show');
}

function selectBoxToggle(elements) {
    const _className = elements.className;
    let _selectClass = _className.replace('-btn', '-select');
    const $select = document.querySelector(`.${_selectClass}`);
    if (!$select) _selectClass = _className.replace('-btn', '');
    document.querySelector(`.${_selectClass}`).classList.toggle("show");
}

function datePick(elements) {
    const _value = elements.textContent.replace(/\D/g, '');
    const _className = elements.className.replace('-btn', '');
    const $targetElement = document.getElementById(_className);
    const $targetButton = document.querySelector(`.${_className}-btn`);

    $targetElement.value = _value;
    $targetButton.textContent = _className === 'month' ? _value + '월' : _value;
    const $select = document.querySelector(`.${_className}`);
    if (!$select) document.querySelector(`.${_className}-select`).classList.remove("show");
    else $select.classList.remove("show");
}

function dayPick(elements) {
    const _active = "active2";
    const dateNum = document.querySelectorAll('.date-num');
    dateNum.forEach(dn => {
        const _classList = dn.classList;
        if (dn===elements) {
            _classList.add(_active);
            document.getElementById("day").value = dn.value;
        } else _classList.remove(_active)
    })
}

function selectDate() {
    const [year, month, day, hour, minute, second] = [
        "year", "month", "day", "hour", "minute", "second"
    ].map(field => document.getElementById(field).value);

    const formattedDateTime = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')} ${hour.padStart(2, '0')}:${minute.padStart(2, '0')}:${second.padStart(2, '0')}`;
    console.log("formattedDateTime: " + formattedDateTime);
    document.querySelector('.date-popup-wrap')
        .previousElementSibling
        .previousElementSibling
        .value = formattedDateTime;
}

function dayArrow(direction) {
    let _value = 0;
    if(direction === "left") _value = Number(getValue(".month-btn"))-1;
    else _value = Number(getValue(".month-btn"))+1;

    setText(".month-btn", _value+"월");
    document.getElementById("month").value = _value;
}