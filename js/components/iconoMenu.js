//Función para hacer clic al menu movil y desplegar el menu de navegación:

function iconoNavegacion() {
    const iconoMenu = document.getElementById("icono-menu");
    const menuNavegacion = document.getElementsByClassName("navegacion");

    function toggleMenu() {
        for (let i = 0; i < menuNavegacion.length; i++) {
            if (menuNavegacion[i].style.display === "none") {
                menuNavegacion[i].style.display = "block";
            } else {
                menuNavegacion[i].style.display = "none";
            }
        }
    }

    iconoMenu.addEventListener("click", toggleMenu);
}

export default iconoNavegacion;

