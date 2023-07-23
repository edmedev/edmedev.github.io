import mostrarMensajeDeError from "./mostrarMensajeError.js";
import ocultarError from "./ocultarError.js"

const validadores = {
    nombre: function (input) {
        if (input.validity.valueMissing) {
            mostrarMensajeDeError(input.id, input);
        } else {
            ocultarError(input);
        }
    },
    email: function (input) {
        if (input.validity.valueMissing) {
            mostrarMensajeDeError(input.id, input);
        } else {
            ocultarError(input);
        }
    },
    asunto: function (input) {
        if (input.validity.valueMissing) {
            mostrarMensajeDeError(input.id, input);
        } else {
            ocultarError(input);
        }
    },
    mensaje: function (input) {
        if (input.validity.valueMissing) {
            mostrarMensajeDeError(input.id, input);
        } else {
            ocultarError(input);
        }
    },
};

export default validadores;

