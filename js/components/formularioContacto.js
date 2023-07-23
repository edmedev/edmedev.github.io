import validarInput from "./formulario/validarInput.js"

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

export default validarFormulario;

