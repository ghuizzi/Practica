const toggle = document.querySelector(".toggle");
const navbar = document.querySelector(".navbar");
toggle.addEventListener("click", () => {
    navbar.classList.toggle("nav_visible");
    
    console.log(navbar)
    console.log(toggle)
} );
// const navToggle = document.querySelector(".toggle");
// const navMenu = document.querySelector(".navbar");

// navToggle.addEventListener("click", () => {
//   navMenu.classList.toggle("nav_visible");

//   if (navMenu.classList.contains("nav_visible")) {
//     navToggle.setAttribute("aria-label", "Cerrar menú");
//   } else {
//     navToggle.setAttribute("aria-label", "Abrir menú");
//   }
// });