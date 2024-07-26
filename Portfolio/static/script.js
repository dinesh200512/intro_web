document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('show');
    });

    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    for (const link of smoothScrollLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});
