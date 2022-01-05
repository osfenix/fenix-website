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