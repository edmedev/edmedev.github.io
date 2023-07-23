import validadores from "./validadores.js";
import mostrarMensajeDeError from "./mostrarMensajeError.js"

function validarInput(input) {
    const tipoDeInput = input.id;
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.nextElementSibling.innerHTML = ""; // Seleccionamos el siguiente elemento para el mensaje de error
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.nextElementSibling.innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}


export default validarInput;

