// 포인트 사용 체크박스 요소 가져오기
const pointCheckbox = document.getElementById('check4');

// 회원가입 시 지급 포인트 input 상자 요소 가져오기
const signupPointInput = document.getElementById('basic-number2');
const signupPointInput2 = document.getElementById('basic-number3');

// 포인트 사용 체크박스의 변경 이벤트에 대한 핸들러 함수 정의
function handlePointCheckboxChange() {
    // 포인트 사용 체크박스가 체크되어 있는지 확인
    if (pointCheckbox.checked) {
        // 체크되어 있다면 회원가입 시 지급 포인트 input 상자 활성화
        signupPointInput.disabled = false;
        signupPointInput2.disabled = false;
    } else {
        // 체크되어 있지 않다면 회원가입 시 지급 포인트 input 상자 비활성화
        signupPointInput.disabled = true;
        signupPointInput2.disabled = true;
    }
}

// 포인트 사용 체크박스의 변경 이벤트에 핸들러 함수 연결
pointCheckbox.addEventListener('change', handlePointCheckboxChange);

// 초기 로딩 시에도 핸들러 함수를 호출하여 상태에 따라 input 상자의 활성화/비활성화 상태 설정
handlePointCheckboxChange();