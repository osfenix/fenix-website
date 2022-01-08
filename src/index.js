"use strict";
AOS.init();

let hamburguer = document.getElementById("hamburguer");
console.log('hamburguer', hamburguer)
let nav = document.querySelector("nav");
let headerLinks = Array.from(document.querySelectorAll(".nav_item"));
headerLinks.push(hamburguer);

console.log(nav);
console.log(headerLinks);

headerLinks.forEach(i => {
    i.addEventListener("click", e => {
        if (nav.classList.contains("nav-displayed"))
            nav.classList.remove("nav-displayed");
        else
            nav.classList.add("nav-displayed");
    })
})


//Redirects to index after sending email on contact form
function redirect() {
    let back_btn = document.getElementById("sent_back_btn");
    back_btn = window.location.assign("./index.html")
}

var filename = location.pathname.split('/').pop();
console.log('filename:', filename)
if (filename === 'index.html') {
    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            center: true,
            loop: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                    nav: true
                },
                // breakpoint from 480 up
                480: {
                    items: 2,
                    nav: true
                },
                // breakpoint from 768 up
                768: {
                    items: 3,
                    nav: true
                }
            }
        });
    });
}

// Máscara para o campo telefone
const tel = document.getElementById('tel') // Seletor do campo de telefone

tel.addEventListener('keydown', (e) => mascaraTelefone(e.target.value)) // Dispara quando digitado no campo
tel.addEventListener('input', (e) => mascaraTelefone(e.target.value)) // Dispara quando autocompletado o campo

const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    tel.value = valor // Insere o(s) valor(es) no campo
}