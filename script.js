
  

function initialize(){
    var main_container = document.getElementById("main-container");
    var intro_container = document.getElementById("intro-container");
    setTimeout(function() {
        intro_container.parentNode.removeChild(intro_container);
   }, 6200); //6200 and 8.5s

   const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    centeredSlides: true,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

window.addEventListener('load', function () {
    initialize();
})