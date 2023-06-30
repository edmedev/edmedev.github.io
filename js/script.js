//Función para hacer clic al menu movil y desplegar la navegación:

var iconoMenu = document.getElementById("icono-menu");
var menusNavegacion = document.getElementsByClassName("navegacion__bloqueLista");

iconoMenu.addEventListener("click", function() {
  for (var i = 0; i < menusNavegacion.length; i++) {
    if (menusNavegacion[i].style.display === "none") {
      menusNavegacion[i].style.display = "block";
    } else {
      menusNavegacion[i].style.display = "none";
    }
  }
});


//Funciones de botones para ver repositorio de proyectos:

function repositorioEncriptador() {
  window.open("https://github.com/edmedev/encriptador", "_blank");
}

function repositorioEdmeMovies() {
  window.open("https://github.com/edmedev/edme-movies", "_blank");
}

function repositorioFigurasGeometricas() {
  window.open("https://github.com/edmedev/figuras-geometricas", "_blank");
}


//Funciones de botones para ver la demo de proyectos:

function demoEncriptador() {
  window.open("https://edmedev.github.io/encriptador/", "_blank");
}

function demoEdmeMovies() {
  window.open("https://edmedev.github.io/edme-movies/", "_blank");
}

function demoFigurasGeometricas() {
  window.open("https://edmedev.github.io/figuras-geometricas/", "_blank");
}

