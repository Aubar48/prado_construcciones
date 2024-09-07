
// Función para actualizar la fecha y hora
function updateDateTime() {
    const datetimeElement = document.getElementById('datetime');
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    datetimeElement.textContent = `${date} ${time}`;

    // Programar la próxima actualización
    requestAnimationFrame(updateDateTime);
}

// Llamar a la función inmediatamente para inicializar el valor
updateDateTime();


