document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    toggleButton.addEventListener('click', function () {
        navList.classList.toggle('show');
        aboutUs.classList.remove('show'); // Close the About Us section when toggling the menu
    });
});