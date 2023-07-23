export const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "maxLength",
    "minLength",
];

export const mensajesDeError = {
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

