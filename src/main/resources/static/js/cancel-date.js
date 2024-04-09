function updateCountdown() {
    // 입력된 숫자 가져오기
    const inputValue = parseInt(document.getElementById('cancelDateInput').value);
    
    // span 요소 가져오기
    const countdownSpan = document.getElementById('countdownDays');
    
    // 입력된 숫자가 유효한지 확인하고, 유효하다면 업데이트
    if (!isNaN(inputValue)) {
        countdownSpan.textContent = 150 - inputValue;
    }
}