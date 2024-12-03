document.addEventListener("DOMContentLoaded", () => {
    const basketTotal = document.getElementById("total-items");
    const resetButton = document.getElementById("reset");
    const payButton = document.getElementById("pay-now");
    const productCards = document.querySelectorAll(".product-card");

    let totalItems = 0;

    productCards.forEach(card => {
        const incrementButton = card.querySelector(".increment");
        const decrementButton = card.querySelector(".decrement");
        const quantityDisplay = card.querySelector(".product-quantity");

        incrementButton.addEventListener("click", () => {
            let currentQuantity = parseInt(quantityDisplay.textContent);
            currentQuantity++;
            quantityDisplay.textContent = currentQuantity;
            totalItems++;
            basketTotal.textContent = totalItems;
        });

        decrementButton.addEventListener("click", () => {
            let currentQuantity = parseInt(quantityDisplay.textContent);
            if (currentQuantity > 0) {
                currentQuantity--;
                quantityDisplay.textContent = currentQuantity;
                totalItems--;
                basketTotal.textContent = totalItems;
            }
        });
    });

    resetButton.addEventListener("click", () => {
        totalItems = 0;
        basketTotal.textContent = totalItems;
        productCards.forEach(card => {
            const quantityDisplay = card.querySelector(".product-quantity");
            quantityDisplay.textContent = "0";
        });
    });

    payButton.addEventListener("click", () => {
        alert(`You have selected ${totalItems} items. Proceeding to payment!`);
        totalItems = 0;
    });
});
