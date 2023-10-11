//! 아코디언 
document.addEventListener('DOMContentLoaded', function () {
  var toggleButton = document.querySelector('.toggle-button');
  var content = document.querySelector('.content');

  // 초기 높이 설정
  var initialHeight = 50; // CSS에서 설정한 max-height 값과 동일하게 설정합니다.
  var isExpanded = false; // 내용이 현재 확장되었는지 나타내는 플래그

  toggleButton.addEventListener('click', function () {
      isExpanded = !isExpanded; // 상태 토글

      if (isExpanded) {
          // 내용을 확장
          content.style.maxHeight = content.scrollHeight + "px";
      } else {
          // 내용을 접음
          content.style.maxHeight = initialHeight + "px";
      }
  });
});
