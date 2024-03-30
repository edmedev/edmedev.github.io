//Funciones de botones para ver la demo de proyectos:

function verDemoEdmeGeek() {
    let demoEdmeGeek = document.getElementById("demo-edme-geek");
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

function verDemo() {
    verDemoEdmeGeek();
    verDemoCifraText();
    verDemoEdmeMovies();
}

verDemo();

export default verDemo;

