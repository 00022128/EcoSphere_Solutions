document.addEventListener("DOMContentLoaded", () => {
    const reviews = document.querySelectorAll(".review-box");
    const container = document.querySelector(".reviews-container");
    let currentIndex = 0;

    const animateReviews = () => {
        reviews.forEach((review, index) => {
            review.classList.remove("active"); // Hide all reviews
            if (index === currentIndex) {
                review.classList.add("active"); // Show the active review
            }
        });

        // Update index
        currentIndex = (currentIndex + 1) % reviews.length;
    };

    const submit = document.getElementById("submit");
    submit.onclick = function() {
    window.alert("Thank you! Your feedback has been submitted.");
};
    


    // Start animation
    setInterval(animateReviews, 3000);

    // Initialize first review
    animateReviews();



});