
// Scroll para el header
let header = document.getElementsByTagName("header");
let logo = document.querySelector(".logoImagen");
let scrollPrimario = window.pageYOffset;


document.addEventListener("scroll", function() {
    let scrollsegundario = window.pageYOffset;

    for (let i = 0; i < header.length; i++) {
        if (scrollPrimario !== scrollsegundario) {
            header[i].style.background = "#2b242475";
            logo.style.width = "150px";
            console.log(header[i])
            
        } else {
            header[i].style.background = "none";
            logo.style.width = "200px";
        }
    }
    
    let tituloHeader = document.getElementsByTagName("h1");
    for (let i = 0; i < tituloHeader.length; i++) {
        if (scrollPrimario !== scrollsegundario) {
            tituloHeader[i].style.fontSize = ".6em";
        } else {
            tituloHeader[i].style.fontSize = "1em";
        }
    }
});

