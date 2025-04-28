let menuVisible = false; // Variable para controlar la visibilidad del menú

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    if (menuVisible) {
        nav.classList.remove("responsive"); // Elimina la clase para ocultar
        menuVisible = false;
    } else {
        nav.classList.add("responsive"); // Añade la clase para mostrar
        menuVisible = true;
    }
}

// Función que oculta el menú una vez que se selecciona una opción
function seleccionar() {
    // Oculto el menú una vez que selecciono una opción
    document.getElementById("nav").classList.remove("responsive"); // Elimina la clase responsive
    menuVisible = false;
}

// --- Animación de Habilidades con Intersection Observer ---
// Uso Intersection Observer para detectar cuando la sección de habilidades es visible

const skillsSection = document.getElementById("skills"); // Obtener la sección de habilidades
const progressBars = document.querySelectorAll(".skills .progreso"); // Obtener todas las barras de progreso

let skillAnimationTriggered = false; // Bandera para asegurarse de que la animación solo se dispare una vez

// Configuración para el observador
const options = {
    root: null, // El viewport es el contenedor de observación
    rootMargin: "0px", // Sin margen alrededor del viewport
    threshold: 0.5 // Disparar cuando al menos el 50% del elemento esté visible
};

// Crear el Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Si la sección de habilidades es visible Y la animación aún no se ha disparado
        if (entry.isIntersecting && !skillAnimationTriggered) {
            // Iniciar la animación
            progressBars.forEach(progressBar => {
                 // Añadir la clase 'active' para activar la animación CSS
                 // El ancho final está definido en el CSS con la clase de habilidad (ej: .progreso.javascript)
                progressBar.classList.add('active');
            });
            skillAnimationTriggered = true; // Marcar la animación como disparada
            observer.unobserve(entry.target); // Dejar de observar una vez que la animación se dispara
        }
    });
}, options);

// Empezar a observar la sección de habilidades
if (skillsSection) {
    observer.observe(skillsSection);
}


// --- Animación de Fade-in para Secciones con Intersection Observer ---
// Uso Intersection Observer para añadir la clase 'visible' cuando las secciones entran en la vista

const fadeElements = document.querySelectorAll(".fade-in"); // Obtener todos los elementos con la clase 'fade-in'

// Configuración para el observador de fade-in
const fadeOptions = {
    root: null, // El viewport es el contenedor de observación
    rootMargin: "0px", // Sin margen alrededor del viewport
    threshold: 0.1 // Disparar cuando al menos el 10% del elemento esté visible
};

// Crear el Intersection Observer para fade-in
const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Si el elemento es visible
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Añadir la clase 'visible'
            observer.unobserve(entry.target); // Dejar de observar una vez visible
        }
    });
}, fadeOptions);

// Empezar a observar cada elemento con la clase 'fade-in'
fadeElements.forEach(element => {
    fadeObserver.observe(element);
});


// Se mantiene la función onscroll original para compatibilidad o si prefieres no usar observers (aunque observers es mejor)
// Sin embargo, el Intersection Observer para habilidades reemplaza la lógica dentro de efectoHabilidades()
/*
window.onscroll = function(){
    // Si usas IntersectionObserver para habilidades, esta función puede no ser necesaria para eso.
    // Si necesitas disparar otras cosas al scroll, mantenla.
    // efectoHabilidades(); // La lógica de habilidades ahora está en el IntersectionObserver
}
*/

// Nota: La función efectoHabilidades original está comentada/reemplazada por la lógica del Intersection Observer.
// Si decides no usar Intersection Observer, puedes descomentar y adaptar la función original.
/*
function efectoHabilidades(){
     // Esta lógica ahora está manejada por el IntersectionObserver 'observer'
     // Si no usas Observer, descomenta y adapta este código.
     // var skills = document.getElementById("skills");
     // var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
     // if(distancia_skills >= 300){
     // let habilidades = document.getElementsByClassName("progreso");
     // habilidades[0].classList.add("javascript");
     // habilidades[1].classList.add("htmlcss");
     // // Asegúrate de que estas clases coincidan con tus habilidades reales
     // // habilidades[2].classList.add("react");
     // // habilidades[3].classList.add("vuejs");
     // // habilidades[4].classList.add("git");
     // // habilidades[5].classList.add("comunicacion");
     // // habilidades[6].classList.add("trabajo-equipo"); // Clase corregida
     // // habilidades[7].classList.add("creatividad");
     // // habilidades[8].classList.add("dedicacion");
     // // habilidades[9].classList.add("adaptabilidad"); // Clase añadida
     // }
}
*/