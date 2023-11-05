const iframeVideo = document.getElementById('iframeVideo');
iframeVideo.src = "https://www.youtube.com/embed/NlDdZgbio5Y?autoplay=1&loop=1&playlist=NlDdZgbio5Y";

// 페이지 로드 시 자동으로 비디오 재생
window.onload = function() {
    iframeVideo.style.display = 'block';
}