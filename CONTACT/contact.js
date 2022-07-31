const video = document.querySelector(".video video");
const otherSide = document.querySelector(".other-side");
const wrapper = document.querySelector(".wrapper");
const formWrapper = document.querySelector(".form-wrapper");
/*
video.addEventListener("mouseover", mOver, false);
wrapper.addEventListener("mouseout", mOut, false);

function mOver() {
    video.style.display = "none";
    otherSide.style.display = "flex";
}

function mOut() {
    otherSide.style.display = "none";
    video.style.display = "block";
}

*/
//nav-list appearance 
const navbtn = document.querySelector(".nav-toggle-btn");
const navList = document.querySelector(".nav-list");

navbtn.addEventListener("click", function() {
    navList.classList.toggle("show-nav-list");
    document.querySelector("html").classList.toggle("hidde");

})