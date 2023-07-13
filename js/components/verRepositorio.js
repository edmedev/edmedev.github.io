//Funciones de botones para ver repositorio de proyectos:

function repositorioCifraText() {
    let repoCifraText = document.getElementById("repo-cifra-text");
    repoCifraText.addEventListener("click", function() {
        window.open("https://github.com/edmedev/encriptador", "_blank");
    });
}
  
function repositorioEdmeMovies() {
    let repoEdmeMovies = document.getElementById("repo-edme-movies");
    repoEdmeMovies.addEventListener("click", function() {
        window.open("https://github.com/edmedev/edme-movies", "_blank");
    });
}
  
function repositorioFigurasGeometricas() {
    let repoFigGeometricas = document.getElementById("repo-fig-geometricas");
    repoFigGeometricas.addEventListener("click", function() {
        window.open("https://github.com/edmedev/figuras-geometricas", "_blank");
    });
}

function verRepositorio() {
    repositorioCifraText();
    repositorioEdmeMovies();
    repositorioFigurasGeometricas();
}

export default verRepositorio;

