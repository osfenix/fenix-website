"use strict";


let hamburguer = document.getElementById("hamburguer")
let nav = document.querySelector("nav");
console.log(nav);

hamburguer.addEventListener("click", e => {
    if (nav.classList.contains("nav-displayed"))
        nav.classList.remove("nav-displayed");
    else
        nav.classList.add("nav-displayed");
})

//Redirects to index after sending email on contact form
function redirect() {
    let back_btn = document.getElementById("sent_back_btn");
    back_btn= window.location.assign("./index.html")
}

