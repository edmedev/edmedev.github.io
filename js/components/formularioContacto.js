function validarFormulario() {
    const inputs = document.querySelectorAll("input, textarea");

    inputs.forEach((input) => {
        input.addEventListener("blur", () => {
            validarInput(input);
        });
    });
}

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

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
];

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío",
    },
    email: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido",
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacío",
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacío",
    },
};

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
    } else {
        input.nextElementSibling.style.display = "none";
    }

    return mensaje;
}

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

// Función para ocultar el mensaje de error
function ocultarError(input) {
    input.parentElement.classList.remove("input-container--invalid");
    input.nextElementSibling.innerHTML = "";
}

// Llamada a la función para iniciar la validación
validarFormulario();
