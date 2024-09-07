
// Función para cambiar el modo claro/oscuro
document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector("body");
    const switches = document.querySelectorAll(".switch input[type='checkbox']");

    switches.forEach(switchElement => {
        switchElement.checked = localStorage.getItem('modo') === 'noche';
        switchElement.addEventListener("change", cambiarModo);
    });

    function cambiarModo() {
        const modoActual = localStorage.getItem('modo');
        if (modoActual === 'dia') {
            body.classList.add("noche");
            localStorage.setItem('modo', 'noche');
        } else {
            body.classList.remove("noche");
            localStorage.setItem('modo', 'dia');
        }

        switches.forEach(switchElement => {
            switchElement.checked = localStorage.getItem('modo') === 'noche';
        });
    }

    // Inicializar el estado del modo
    if (localStorage.getItem('modo') === 'noche') {
        body.classList.add('noche');
    } else {
        body.classList.remove('noche');
    }
});
