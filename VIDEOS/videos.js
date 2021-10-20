/*--------- reviews ---------*/

const scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};
const elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {

    Array.prototype.forEach.call(elementsToShow, function (element) {
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });
  
    scroll(loop);
  }

  loop();

  function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }

//nav-list appearance 
const navbtn = document.querySelector(".nav-toggle-btn");
const navList = document.querySelector(".nav-list");

navbtn.addEventListener("click", function() {
    navList.classList.toggle("show-nav-list");
    document.querySelector("html").classList.toggle("hidde");
    
})