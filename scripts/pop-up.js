document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const closePopupButton = document.getElementById("close-popup");

    closePopupButton.addEventListener("click", () => {
        popup.style.display = "none";
    });
});