    // 첫 번째 체크 박스 클릭 시 나머지 체크 박스들이 자동으로 체크되도록 이벤트 처리
    function autoCheckOthers(mainCheckboxId, otherCheckboxIds) {
        const mainCheckbox = document.getElementById(mainCheckboxId);
        const otherCheckboxes = otherCheckboxIds.split(' ');

        mainCheckbox.addEventListener('change', function() {
            otherCheckboxes.forEach(id => {
                const checkbox = document.getElementById(id);
                if (checkbox) {
                    checkbox.checked = this.checked;
                }
            });
        });
    }

    autoCheckOthers('check', 'check2 check3 check4 check5');
    autoCheckOthers('check6', 'check7 check8 check9 check10');