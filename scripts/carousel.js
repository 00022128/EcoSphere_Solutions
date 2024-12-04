document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".carousel-dots .dot");

    let currentIndex = 0;
    const totalSlides = slides.length;

    const updateCarousel = () => {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentIndex].classList.add("active");
    };

    const autoCycle = () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    };

    dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            currentIndex = parseInt(e.target.dataset.index);
            updateCarousel();
        });
    });

    updateCarousel();

    setInterval(autoCycle, 5000);
});
