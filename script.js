/* =============== MOSTRAR MENÚ MÓVIL =============== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* Validamos si las constantes existen antes de añadir eventos */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}

/* =============== QUITAR MENÚ AL HACER CLICK EN UN ENLACE =============== */
/* Para que cuando pulses "Proyectos" en el móvil, el menú se cierre solo */
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    // Cuando hacemos click en cada nav__link, removemos la clase show-menu
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

