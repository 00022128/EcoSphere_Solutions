document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission to a server

        // Display success message
        alert("Thank you for contacting us! We'll get back to you shortly.");

        // Clear the form inputs
        form.reset();
    });
});