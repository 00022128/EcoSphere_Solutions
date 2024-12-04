document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', function() {
            navUl.classList.toggle('show');
            menuToggle.setAttribute('aria-expanded', navUl.classList.contains('show'));
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navUl.contains(event.target) && !menuToggle.contains(event.target)) {
                navUl.classList.remove('show');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Add keyboard accessibility
        menuToggle.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                menuToggle.click();
            }
        });
    }
});

