document.addEventListener("DOMContentLoaded", () => {
    const reviews = document.querySelectorAll(".review-box");
    const container = document.querySelector(".reviews-container");
    let currentIndex = 0;

    const animateReviews = () => {
        reviews.forEach((review, index) => {
            review.classList.remove("active");
            if (index === currentIndex) {
                review.classList.add("active");
            }
        });

        currentIndex = (currentIndex + 1) % reviews.length;
    };

    const submit = document.getElementById("submit");
    submit.onclick = function() {
    window.alert("Thank you! Your feedback has been submitted.");
};
    


    setInterval(animateReviews, 3000);

    animateReviews();



});