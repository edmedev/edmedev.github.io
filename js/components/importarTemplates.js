// Importando templates
import iconoNavegacion from "./iconoMenu.js"; //importando la función del icono de navegación

// Importar encabezado
function importarHeader() {
    fetch('../../templates/header.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('encabezado').innerHTML = html;
        iconoNavegacion();
    });
}

// Importar pie de página
function importarFooter() {
    fetch('../../templates/footer.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('pie').innerHTML = html;
    });
}

function importarTemplates() {
    importarHeader();
    importarFooter();
}

importarTemplates();

export default importarTemplates;

