//Función para hacer clic al menu movil y desplegar el menu de navegación:

function iconoNavegacion() {
    const iconoMenu = document.getElementById("icono-menu");
    const menusNavegacion = document.getElementsByClassName("navegacion");

    iconoMenu.addEventListener("click", function() {
        for (let i = 0; i < menusNavegacion.length; i++) {
            if (menusNavegacion[i].style.display === "none") {
            menusNavegacion[i].style.display = "block";
            } else {
            menusNavegacion[i].style.display = "none";
            }
        }
    });
}

export default iconoNavegacion;

