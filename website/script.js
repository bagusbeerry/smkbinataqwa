document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    toggleButton.addEventListener('click', function() {
        toggleButton.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
});
