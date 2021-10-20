//--------------- image popUp ----------------- 
const emptyContainer = document.querySelector(".empty-container");
const divPopUp = document.querySelector(".popUp");
const allImages = document.querySelectorAll(".row .image");
const row = document.querySelector(".row");
const navbarLinks = document.querySelector(".navbar-links");
let count = 0;


 //adding popUp function
 emptyContainer.addEventListener("click", function() {
    this.style.display = "none";
    divPopUp.style.display = "none";
});

allImages.forEach(function(image, index) {
    image.addEventListener("click", function() {
        emptyContainer.style.display = "block";
        divPopUp.style.display = "block";
        count = index + 1;
        console.log(index)
        currentImage(count);
    })
});

function currentImage(position){
    divPopUp.style.background = `url(../background-images/img${count}.jpg) center no-repeat`;
    divPopUp.style.backgroundSize = "contain";
};


//close button
const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", function() {
    emptyContainer.style.display = "none";
    
        divPopUp.style.display = "none";
        navbarLinks.style.display = "flex";
   //   window.location = window.location
});

//nav-list appearance 
const navbtn = document.querySelector(".nav-toggle-btn");
const navList = document.querySelector(".nav-list");

navbtn.addEventListener("click", function() {
    navList.classList.toggle("show-nav-list");
    document.querySelector("html").classList.toggle("hidde");
    
})