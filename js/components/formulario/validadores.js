import mostrarMensajeDeError from "./mostrarMensajeError.js";
import ocultarError from "./ocultarError.js"

const validadores = {
    nombre: function (input) {
        const minLength = 5;
        const maxLength = 50;
        if (input.validity.valueMissing) {
            mostrarMensajeDeError(input.id, input);
        } else if (input.value.length < minLength || input.value.length > maxLength) {
            mostrarMensajeDeError(input.id, input);
        } else {
            ocultarError(input);
        }
    },
    email: function (input) {
        if (input.validity.valueMissing) {
            mostrarMensajeDeError(input.id, input);
        } else if (input.validity.typeMismatch) {
            mostrarMensajeDeError(input.id, input);
        } else {
            ocultarError(input);
        }
    },
    asunto: function (input) {
        const minLength = 5;
        const maxLength = 50;
        if (input.validity.valueMissing) {
            mostrarMensajeDeError(input.id, input);
        } else if (input.value.length < minLength || input.value.length > maxLength) {
            mostrarMensajeDeError(input.id, input);
        } else {
            ocultarError(input);
        }
    },
    mensaje: function (input) {
        const minLength = 50;
        const maxLength = 300;
        if (input.validity.valueMissing) {
            mostrarMensajeDeError(input.id, input);
        } else if (input.value.length < minLength || input.value.length > maxLength) {
            mostrarMensajeDeError(input.id, input);
        } else {
            ocultarError(input);
        }
    },
};

export default validadores;

