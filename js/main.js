function validarFormulario() {
    const inputs = document.querySelectorAll("input, textarea");

    inputs.forEach((input) => {
        input.addEventListener("blur", () => {
            validarInput(input);
        });
    });
}

// Llamada a la función para iniciar la validación
validarFormulario();

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

const validadores = {
    nombre: function (input) {
        if (input.validity.valueMissing) {
            mostrarMensajeDeError(input.id, input);
        }
        if (input.value.length < 5) {
            mostrarMensajeDeError(input.id, input);
        }
        if (input.value.length > 50) {
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

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "maxLength",
    "minLength",
];

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío",
        maxLength: "El campo nombre debe tener como máximo 50 caracteres",
        minLength: "El campo nombre debe tener como minimo 5 caracteres",
    },
    email: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido",
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacío",
        maxLength: "El campo asunto debe tener como máximo 50 caracteres",
        minLength: "El campo asunto debe tener como minimo 5 caracteres",
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacío",
        maxLength: "El campo mensaje debe tener como máximo 300 caracteres",
        minLength: "El campo mensaje debe tener como minimo 50 caracteres",
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

function ocultarError(input) {
    input.parentElement.classList.remove("input-container--invalid");
    input.nextElementSibling.innerHTML = "";
}


//No me funciona la alternativa de mostrar un error al usuario cuando ingresa menos de 5 caracteres en un campo o mas de 50 caracteres