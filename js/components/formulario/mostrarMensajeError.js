import {tipoDeErrores, mensajesDeError} from "./mensajesDeError.js";

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });

    // Mostrar el mensaje de error cambiando 'display' a 'block' si hay mensaje
    if (mensaje) {
        input.nextElementSibling.style.display = "block";
        input.nextElementSibling.innerHTML = mensaje;
    } else {
        input.nextElementSibling.style.display = "none";
        input.nextElementSibling.innerHTML = "";
    }

    return mensaje;
}

export default mostrarMensajeDeError;

