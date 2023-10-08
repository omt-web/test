//! 나브 바 로고 - 스크롤하면 왼쪽으로 이동
window.addEventListener("scroll", () => {
    const menuIcon = document.querySelector(".logoImg");
    const menu = document.querySelector(".menu");

    if (window.scrollY > 0) {
        menuIcon.classList.add("fixed");
    } else {
        menuIcon.classList.remove("fixed");
    }
});

//! 나브 바 아이콘 숨기기 보이기
$(document).ready(function() {
    const navIcon = $("#nav-icon");
    const navMenu = $("#nav-menu");

    // 나브 메뉴를 초기에 숨김
    navIcon.show();
    navMenu.hide();

    // 나브 아이콘을 클릭했을 때 이벤트 처리
    navIcon.click(function() {
        // 나브바 항목의 보이기/숨기기를 토글
        navMenu.toggle();
    });
});
