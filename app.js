const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navbarLinks = document.querySelectorAll('.navbar__links'); // Alle Links in der Navbar

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    menuLinks.style.maxHeight = menuLinks.classList.contains('active') ? '500px' : '0';
});

// Event Listener für jeden Link in der Navbar
navbarLinks.forEach(link => {
    link.addEventListener('click', function () {
        menu.classList.remove('is-active'); // Entfernt die aktive Klasse vom Menü
        menuLinks.classList.remove('active'); // Schließt die Navbar
    });
});

