
/**
 * Scripts para el mostrar las noticias del archivo Json en un carrusel
 */
let contenedorSpan = document.getElementById("contenedorSpan");
let currentIndex = 0;  // Índice para seguir la noticia activa
let noticias; // Para almacenar las noticias cargadas

// Recuperar datos de un archivo JSON y mostrar noticias después de cargar
let archivoJson = `./assets/json/noticias.json`;
fetch(archivoJson)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Convierte la respuesta a JSON
    })
    .then(data => {
        noticias = data.noticias; // Guardamos las noticias
        console.log(noticias);
        mostrarNoticias(noticias); // Mostrar noticias después de cargar
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

// Función para mostrar las noticias
function mostrarNoticias(noticias) {
    let contenedorNoticias = document.getElementById("carruselNoticias");
    
    for (let i = 0; i < noticias.length; i++) {
        // Creamos el contenedor de la noticia
        let contenedorNoticia = document.createElement("div");
        contenedorNoticia.classList.add("contenedor-eventos");

        // Creamos la imagen dentro de contenedor
        let imagenNoticia = document.createElement("img");
        imagenNoticia.classList.add("imagenNoticia");
        imagenNoticia.src = noticias[i].imagen; // Asignamos la fuente de la imagen

        // Creamos contenedor para el título y la descripción
        let contenedorDescripcion = document.createElement("div");
        contenedorDescripcion.classList.add("noticiaDescripcion");

        // Creamos el título
        let tituloNoticia = document.createElement("h3");
        tituloNoticia.classList.add("tituloNoticia");
        tituloNoticia.textContent = noticias[i].titulo;

        // Creamos descripción
        let descripcionNoticia = document.createElement("p");
        descripcionNoticia.classList.add("descripcionNoticia");
        descripcionNoticia.textContent = noticias[i].descripcion;

        // Agregamos cada elemento a su contenedor
        contenedorNoticias.appendChild(contenedorNoticia);
        contenedorNoticia.appendChild(imagenNoticia);
        contenedorNoticia.appendChild(contenedorDescripcion);
        contenedorDescripcion.appendChild(tituloNoticia);
        contenedorDescripcion.appendChild(descripcionNoticia);
        
        crearSpan(i); // Crear span para el indicador
    }

    // Mostrar la primera noticia solo después de que todas estén creadas
    mostrarNoticia(currentIndex);
}

// Ocultar todas las noticias y mostrar solo la actual
function mostrarNoticia(index) {
    let allNoticias = document.querySelectorAll(".contenedor-eventos");
    let allSpans = document.querySelectorAll(".circuloSpan");

    for (let i = 0; i < allNoticias.length; i++) {
        allNoticias[i].style.display = "none";  // Ocultar todas las noticias
        allSpans[i].classList.remove("activo");  // Remover la clase activo de todos los spans
    }

    allNoticias[index].style.display = "block";  // Mostrar la noticia actual
    allSpans[index].classList.add("activo");  // Agregar la clase activo al span correspondiente
}
 

// Función para crear los indicadores (span)
function crearSpan(posicion) {
    let span = document.createElement("span");
    span.classList.add("circuloSpan");
    contenedorSpan.appendChild(span);

    // Al hacer clic en el span, mostrar la noticia correspondiente
    span.addEventListener("click", function () {
        currentIndex = posicion;  // Actualizar el índice de la noticia activa
        mostrarNoticia(currentIndex);
    });
}

// Lógica para el carrusel automático
let intervaloTiempo = 3000; // Cambiar de noticia cada 3 segundos (3000ms)
let intervalo = setInterval(avanzarCarrusel, intervaloTiempo);

// Función para avanzar automáticamente a la siguiente noticia
function avanzarCarrusel() {
    currentIndex++;
    if (currentIndex >= noticias.length) {
        currentIndex = 0; // Si llegamos al final, volvemos al inicio
    }
    mostrarNoticia(currentIndex); // Mostrar la noticia actual
}

// Pausar el avance automático al hacer hover
contenedorSpan.addEventListener("mouseover", function() {
    clearInterval(intervalo); // Detener el carrusel
});

// Reanudar el avance automático al retirar el mouse
contenedorSpan.addEventListener("mouseout", function() {
    intervalo = setInterval(avanzarCarrusel, intervaloTiempo); // Reiniciar el carrusel
});

// Carrusel para la sección de testimonios
const flechaDerecha = document.querySelector(".derecha");
const flechaIzquierda = document.querySelector(".izquierda");
let testimonios = document.querySelectorAll(".testimoniosClientes");
let contadorMostraImg = 0;

// Función para mostrar la imagen del testimonio actual
function mostrarImagen() {
    for (let i = 0; i < testimonios.length; i++) {
        testimonios[i].style.display = "none"; // Ocultar todos los testimonios
    }
    testimonios[contadorMostraImg].style.display = "block"; // Mostrar el testimonio actual
}

// Evento para avanzar al siguiente testimonio
flechaDerecha.addEventListener("click", function() {
    contadorMostraImg++;
    if (contadorMostraImg >= testimonios.length) {
        contadorMostraImg = 0; // Volver al inicio
    }
    mostrarImagen();
});

// Evento para retroceder al testimonio anterior
flechaIzquierda.addEventListener("click", function() {
    contadorMostraImg--;
    if (contadorMostraImg < 0) {
        contadorMostraImg = testimonios.length - 1; // Ir al final
    }
    mostrarImagen();
});

// Mostrar la primera imagen al cargar la página
mostrarImagen();