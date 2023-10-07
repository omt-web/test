//! 페이지가 스크롤될 때 발생하는 이벤트 리스너를 추가합니다.
window.addEventListener("scroll", () => {
    const menuIcon = document.querySelector(".logoImg");
    const menu = document.querySelector(".menu");

    if (window.scrollY > 0) {
        menuIcon.classList.add("fixed");
    } else {
        menuIcon.classList.remove("fixed");
    }
});

//! 스크롤 된 위치로 이동. 배포 후에는 이거 없이도 작동. 
//* https://example.com/#section-to-scroll 이런식으로 주소를 달면 될 것. 
document.querySelector('a[href="#scroll-to-section"]').addEventListener('click', function(e) {
    e.preventDefault(); // 기본 링크 이벤트 제거
    // 스크롤을 원하는 앵커 위치로 이동
    const target = document.querySelector('#scroll-to-section');
    window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth' // 부드러운 스크롤 애니메이션
    });
});


