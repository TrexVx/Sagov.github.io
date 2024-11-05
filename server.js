// Función para manejar el menú móvil
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Agregar evento de clic al botón de menú móvil
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.classList.add('mobile-menu-button');
    mobileMenuButton.innerHTML = '☰';
    mobileMenuButton.setAttribute('aria-label', 'Abrir menú');
    
    const nav = document.querySelector('nav');
    nav.insertBefore(mobileMenuButton, nav.firstChild);

    mobileMenuButton.addEventListener('click', toggleMobileMenu);
});

// Función para manejar el desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
