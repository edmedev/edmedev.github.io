// Función para ocultar el mensaje de error
function ocultarError(input) {
    input.parentElement.classList.remove("input-container--invalid");
    input.nextElementSibling.innerHTML = "";
}

export default ocultarError;

