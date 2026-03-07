// Navbar laden und einfügen
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        const placeholder = document.getElementById('navbar-placeholder');
        if (placeholder) {
            placeholder.innerHTML = data;
            // Nach dem Laden der Navbar die Event-Listener setzen
            setupNavbar();
        }
    })
    .catch(error => console.error('Fehler beim Laden der Navbar:', error));

// Funktion für Navbar-Setup
function setupNavbar() {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.navbar__menu');
    const navbarLinks = document.querySelectorAll('.navbar__links'); // Alle Links in der Navbar

    if (menu) {
        menu.addEventListener('click', function () {
            menu.classList.toggle('is-active');
            menuLinks.classList.toggle('active');
            menuLinks.style.maxHeight = menuLinks.classList.contains('active') ? '500px' : '0';
        });
    }

    // Event Listener für jeden Link in der Navbar
    navbarLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (menu) menu.classList.remove('is-active'); // Entfernt die aktive Klasse vom Menü
            if (menuLinks) menuLinks.classList.remove('active'); // Schließt die Navbar
        });
    });
}

// Footer laden und einfügen
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        const placeholder = document.getElementById('footer-placeholder');
        if (placeholder) {
            placeholder.innerHTML = data;
        }
    })
    .catch(error => console.error('Fehler beim Laden des Footers:', error));

