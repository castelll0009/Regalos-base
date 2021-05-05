var swiper = new Swiper(".mySwiper", { 

        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },        
      });

var paginacion = document.querySelector(".swiper-pagination-progressbar-fill");
paginacion_blanca();
function paginacion_blanca(argument) {    
    paginacion.style = "background: white";
}


