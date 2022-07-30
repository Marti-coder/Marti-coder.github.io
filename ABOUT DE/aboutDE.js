const background = document.querySelector(".background");
const text = document.querySelector(".text-wrapp");

setTimeout(function() {

    background.style.marginLeft = "350px";

}, 4000);

//nav-list appearance 
const navbtn = document.querySelector(".nav-toggle-btn");
const navList = document.querySelector(".nav-list");

navbtn.addEventListener("click", function() {
    navList.classList.toggle("show-nav-list");
    document.querySelector("html").classList.toggle("hidde");
})