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

