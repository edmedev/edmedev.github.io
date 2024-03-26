//Funciones de botones para ver repositorio de proyectos:

function repositorioEdmeGeek() {
    let repoEdmeGeek = document.getElementById("repo-edme-geek");
    repoEdmeGeek.addEventListener("click", function() {
        window.open("https://github.com/edmedev/encriptador/", "_blank");
    });
}

function repositorioCifraText() {
    let repoCifraText = document.getElementById("repo-cifra-text");
    repoCifraText.addEventListener("click", function() {
        window.open("https://github.com/edmedev/encriptador/", "_blank");
    });
}

function repositorioEdmeMovies() {
    let repoEdmeMovies = document.getElementById("repo-edme-movies");
    repoEdmeMovies.addEventListener("click", function() {
        window.open("https://github.com/edmedev/edme-movies/", "_blank");
    });
}

function repositorioFigurasGeometricas() {
    let repoFigGeometricas = document.getElementById("repo-fig-geometricas");
    repoFigGeometricas.addEventListener("click", function() {
        window.open("https://github.com/edmedev/figuras-geometricas/", "_blank");
    });
}

function verRepositorio() {
    repositorioEdmeGeek();
    repositorioCifraText();
    repositorioEdmeMovies();
    repositorioFigurasGeometricas();
}

verRepositorio();

export default verRepositorio;

