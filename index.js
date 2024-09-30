const images = document.querySelectorAll('#main_section article img');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}
showNextImage();
setInterval(showNextImage, 4000); // 3초마다 이미지 변경
