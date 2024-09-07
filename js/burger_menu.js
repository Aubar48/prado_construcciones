// Alterna la visibilidad del menú hamburguesa
function toggleMenu() {
    if (typeof window !== 'undefined') {
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu) {
            mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
        }
    }
}

// Maneja el evento de redimensionamiento de la ventana
function onResize() {
    if (typeof window !== 'undefined') {
        const mobileMenu = document.querySelector('.mobile-menu');
        if (window.innerWidth >= 600 && mobileMenu) {
            mobileMenu.style.display = 'none'; // Oculta el menú en vista de escritorio
        }
    }
}

// Añade el listener de redimensionamiento
window.addEventListener('resize', onResize);

// Llama a onResize al cargar la página para configurar el estado inicial
window.addEventListener('load', onResize);
