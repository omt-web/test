// * 박스 클릭시 이모션
document.addEventListener('DOMContentLoaded', function() {
  const allBoxContainer = document.querySelector('.allBoxContainer');
  const popUpText1 = document.querySelector('.popUpText_1');
  const popUpText2 = document.querySelector('.popUpText_2');

  allBoxContainer.addEventListener('click', function() {
      // popUpText_1과 popUpText_2를 표시합니다.
      if (popUpText1) popUpText1.style.display = 'block';
      if (popUpText2) popUpText2.style.display = 'block';
  });
});

//* 박스 클릭시 이모션
document.addEventListener('DOMContentLoaded', function() {
  // 클릭 이벤트 리스너를 allBoxContainer에 추가
  document.querySelector('.allBoxContainer').addEventListener('click', function() {
      // popUpText_1 요소의 display 스타일을 block으로 변경하여 보이게 함
      document.querySelector('.popUpText_1').style.display = 'flex';
  });
});