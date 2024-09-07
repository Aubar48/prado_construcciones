// Función para cambiar el título de la página si es "Home"
function changeTitleIfHome() {
    if (document.title === "Home") {
        let alertShow = false;
        setInterval(() => {
            document.title = alertShow ? "Home" : "Prado Constructora";
            alertShow = !alertShow;
        }, 4000);
    }
}

// Llamar a la función inmediatamente cuando se carga el DOM
document.addEventListener('DOMContentLoaded', changeTitleIfHome);

