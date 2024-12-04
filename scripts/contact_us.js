document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        alert("Thank you for contacting us! We'll get back to you shortly.");

        form.reset();
    });
});