document.addEventListener('DOMContentLoaded', function() {
  const menuBtns = document.querySelectorAll('.menu-btn');

  // 모든 .menu-btn 요소에 클릭 이벤트 추가
  menuBtns.forEach(btn => {
    btn.addEventListener('click', function(event) {
      const menu = this.nextElementSibling;

      // 다른 .menu-btn의 active 클래스 제거 및 다른 메뉴 닫기
      menuBtns.forEach(otherBtn => {
        if (otherBtn !== this) {
          otherBtn.classList.remove('active');
          const otherMenu = otherBtn.nextElementSibling;
          if (otherMenu) {
            otherMenu.style.maxHeight = null;
          }
        }
      });

      // 현재 버튼에 active 클래스 추가 또는 제거
      this.classList.toggle('active');

      // 현재 버튼의 다음 요소인 .menu 찾기
      if (menu) {
        // .menu의 높이값 토글
        if (menu.style.maxHeight) {
          menu.style.maxHeight = null;
        } else {
          menu.style.maxHeight = menu.scrollHeight + 'px';
        }
      }
    });
  });

  // .menu 안의 링크 클릭 시 이벤트 전파 중지
  const menuLinks = document.querySelectorAll('.menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      // 이벤트 전파 중지
      event.stopPropagation();
      
      // 현재 .menu-btn에 active 클래스 추가
      const menuBtn = this.closest('.menu').previousElementSibling;
      if (menuBtn) {
        menuBtn.classList.add('active');
        
        // 현재 .menu를 열기
        const menu = menuBtn.nextElementSibling;
        if (menu) {
          menu.style.maxHeight = menu.scrollHeight + 'px';
        }
      }
    });
  });
});