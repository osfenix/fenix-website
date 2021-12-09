"use strict";
AOS.init();

let hamburguer = document.getElementById("hamburguer")
let nav = document.querySelector("nav");
console.log(nav);

hamburguer.addEventListener("click", e => {
    if (nav.classList.contains("nav-displayed"))
        nav.classList.remove("nav-displayed");
    else
        nav.classList.add("nav-displayed");
})

