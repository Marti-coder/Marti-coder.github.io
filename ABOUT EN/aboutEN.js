const background = document.querySelector(".background");
const text = document.querySelector(".text-wrapp");

setTimeout(function() {
    background.style.marginRight = "400px";
    background.style.opacity = "1";
    text.style.display = "block";

}, 2000);

//nav-list appearance 
const navbtn = document.querySelector(".nav-toggle-btn");
const navList = document.querySelector(".nav-list");

navbtn.addEventListener("click", function() {
    navList.classList.toggle("show-nav-list");
    document.querySelector("html").classList.toggle("hidde");
    
})