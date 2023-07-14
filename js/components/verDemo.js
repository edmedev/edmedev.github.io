//Funciones de botones para ver la demo de proyectos:
const botonDemo = document.getElementsByClassName("botones__btnDemo");

function verDemoCifraText() {
    let demoCifraText = document.getElementById("demo-cifra-text");
    demoCifraText.addEventListener("click", function() {
        window.open("https://edmedev.github.io/encriptador/", "_blank");
    });
}

function verDemoEdmeMovies() {
    let demoEdmeMovies = document.getElementById("demo-edme-movies");
    demoEdmeMovies.addEventListener("click", function() {
        window.open("https://edmedev.github.io/edme-movies/", "_blank");
    });
}

function verDemoFigurasGeometricas() {
    let demoFigGeometricas = document.getElementById("demo-fig-geometricas");
    demoFigGeometricas.addEventListener("click", function() {
        window.open("https://edmedev.github.io/figuras-geometricas/", "_blank");
    });
}

function verDemo() {
    verDemoCifraText();
    verDemoEdmeMovies();
    verDemoFigurasGeometricas();
}

export default verDemo;

