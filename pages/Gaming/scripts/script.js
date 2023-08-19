document.addEventListener("DOMContentLoaded", function () {
    const carrousel = document.querySelector(".carrousel");
    const images = carrousel.querySelectorAll("img");
    let currentImageIndex = 0;

    function nextImage() {
        images[currentImageIndex].style.opacity = 0;
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].style.opacity = 1;
    }

    const interval = setInterval(nextImage, 3000);


});
