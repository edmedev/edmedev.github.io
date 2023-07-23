function validarMensaje() {
    // Obtener el valor del campo del formulario
    let nombre = document.getElementById('nombre').value;
    var errorMensaje = document.getElementsByClassName('input-message-error');
  
    // Verificar si el mensaje tiene menos de 5 caracteres o más de 50 caracteres
    if (nombre.length < 5 || nombre.length > 50) {
        // Mostrar mensaje de error
        errorMensaje.style.display = "block"; // O 'inline' si es un elemento en línea
        errorMensaje.textContent = 'El mensaje debe tener entre 5 y 50 caracteres.';
    } else {
        // Si el mensaje es válido, ocultar el mensaje de error
        errorMensaje.style.display = 'none';
    }
}

export default validarMensaje();

