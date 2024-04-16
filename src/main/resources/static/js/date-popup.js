/** 툭정 Element의 텍스트 값 입력 하는 함수 */
const setText = (s, v) => document.querySelector(s).textContent = v;

/** 툭정 Element의 텍스트 출력 하는 함수 (숫자를 제외한 모든 문자 제거 됨) */
const getValue = (s) => document.querySelector(s).textContent.replace(/\D/g, '');

/** date-popup 값 초기화 */
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

/** popup 영역을 제외한 나머지 영역 클릭 시 팝업 닫힘 */
document.addEventListener('click', function(event) {
    if (!event.target.closest('.date-popup-wrap')) {
        document.querySelector('.date-popup-wrap').classList.remove('show');
    }
}, true);

/** 팝업을 열때 연도를 현재 연도 기준 5개까지 버튼 생성 */
function datePopupOpen(elements) {
    const $wrapper = elements.previousElementSibling;
    const $popup = elements.nextElementSibling;
    const $yearSelect = document.querySelector('.year.year-select');
    const $monthSelect = document.querySelector('.month.year-select');
    if ($wrapper.value) {
        console.log("$wrapper.value 있음")
    } else {
        console.log("$wrapper.value 없음")
    }


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

/** 팝업 닫기  */
function datePopupCancel(elements) {
    const $popup = elements.parentNode.parentNode;
    $popup.classList.remove('show');
}

/** 팝업의 모든 셀렉트 박스 토글 */
function selectBoxToggle(elements) {
    const _className = elements.className;
    let _selectClass = _className.replace('-btn', '-select');
    const $select = document.querySelector(`.${_selectClass}`);
    if (!$select) _selectClass = _className.replace('-btn', '');
    document.querySelector(`.${_selectClass}`).classList.toggle("show");
}

/** 날짜에서 일(day)를 제외한 모든 버튼 적용 */
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

/** 일(day)에 대한 입력 값 버튼 적용 */
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

/** 최종 입력 된 날짜를 format에 맞게 input에 출력 후 팝업 닫기 */
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
    document.querySelector('.date-popup-wrap').classList.remove("show")
}

/** 회살표 버튼 월 차감/증가 버튼 */
function dayArrow(direction) {
    let _value = 0;
    if(direction === "left") _value = Number(getValue(".month-btn"))-1;
    else _value = Number(getValue(".month-btn"))+1;

    setText(".month-btn", _value+"월");
    document.getElementById("month").value = _value;
}