"use strict";
AOS.init();

let hamburguer = document.getElementById("hamburguer")
let nav = document.querySelector("nav");
let header_links = Array.from(document.querySelectorAll(".nav_item"));
header_links.push(hamburguer);

console.log(nav);
console.log(header_links);

header_links.forEach(i => {
    i.addEventListener("click", e => {
        if (nav.classList.contains("nav-displayed"))
            nav.classList.remove("nav-displayed");
        else
            nav.classList.add("nav-displayed");
    })
})


//Redirects to index after sending email on contact form
/*function redirect() {
    let back_btn = document.getElementById("sent_back_btn");
    back_btn= window.location.assign("./index.html")
}*/

let back_btn = document.getElementById("sent_back_btn");
if (back_btn) {back_btn.addEventListener("click", e => {
    window.location.assign("./index.html")
})};