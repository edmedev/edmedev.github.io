//Funciones de botones para ver la demo de proyectos:
const botonDemo = document.getElementsByClassName("botones__btnDemo");

function verDemoEdmeGeek() {
    let demoEdmeGeek = document.getElementById("repo-edme-geek");
    demoEdmeGeek.addEventListener("click", function() {
        window.open("https://edme-geek.vercel.app/", "_blank");
    });
}

function verDemoCifraText() {
    let demoCifraText = document.getElementById("demo-cifra-text");
    demoCifraText.addEventListener("click", function() {
        window.open("https://cifratext.vercel.app/", "_blank");
    });
}

function verDemoEdmeMovies() {
    let demoEdmeMovies = document.getElementById("demo-edme-movies");
    demoEdmeMovies.addEventListener("click", function() {
        window.open("https://edmemovies.netlify.app/", "_blank");
    });
}

function verDemoFigurasGeometricas() {
    let demoFigGeometricas = document.getElementById("demo-fig-geometricas");
    demoFigGeometricas.addEventListener("click", function() {
        window.open("https://figurasgeometricas.netlify.app/", "_blank");
    });
}

function verDemo() {
    verDemoEdmeGeek();
    verDemoCifraText();
    verDemoEdmeMovies();
    verDemoFigurasGeometricas();
}

verDemo();

export default verDemo;

