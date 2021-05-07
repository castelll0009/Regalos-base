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

      /*variables */
var tarjet_about = document.querySelector(".about");
var tarjet_about_p = document.querySelector(".p-about");

var tarjet_contenido = document.querySelector(".contenido");
var tarjet_contenido_p = document.querySelector(".p-contenido");

var tarjet_orden  = document.querySelector(".orden");
var tarjet_orden_h4 = document.querySelector(".h4-orden");

var paginacion = document.querySelector(".swiper-pagination-progressbar-fill");

/*var entrar_detalles = document.querySelector(".entrar-detalles");*/
var div_figure = document.querySelector(".div-figure");
var contenedor_swiper_tarjetas = document.querySelector(".contenedor-swiper-tarjetas");

/*ADD EVENTS LISTENER ESCUCHADORES*/
tarjet_about.addEventListener("click", function(){  
  tarjet_about.classList.toggle("desplegar-tarjeta-info");  
  tarjet_about_p.style ="opacity : 1; display : block;";  
});

tarjet_contenido.addEventListener("click", function(){  
  tarjet_contenido.classList.toggle("desplegar-tarjeta-info");  
  tarjet_contenido_p.style ="opacity : 1; display : block;";  
});

tarjet_orden.addEventListener("click", function(){    
  tarjet_orden.classList.toggle("desplegar-tarjeta-orden");    
});

/*
entrar_detalles.addEventListener("click", function(){  
  div_figure.classList.toggle("desaparecer-contenedor"); 
  contenedor_swiper_tarjetas.classList.toggle("aparecer-contenedor");  
});
*/
//Seleccionas todos los elementos con clase test
var entrar_detalles = document.getElementsByClassName("entrar-detalles");
    
    //Recorres la lista de elementos seleccionados
    for (var i=0; i< entrar_detalles.length; i++) {
        //Añades un evento a cada elemento
        entrar_detalles[i].addEventListener("click",function() {
          div_figure.classList.toggle("desaparecer-contenedor"); 
          contenedor_swiper_tarjetas.classList.toggle("aparecer-contenedor");  
        });
    }

 /**///////LIstener para objetos con una misma class/////*/
//Seleccionas todos los elementos con clase test
/*
var entrar_detalles = document.getElementsByClassName("entrar-detalles");
/*var div_figures = document.getElementsByClassName("div-figure");*/
/*
var abouts = document.getElementsByClassName("about");
var about_ps = document.getElementsByClassName("p-about");
var div_figure = document.querySelectorAll(".div-figure");
var contenedor_swiper_tarjetas = document.querySelectorAll(".contenedor-swiper-tarjetas");
//Recorres la lista de elementos seleccionados
for (var i=0; entrar_detalles.length; i++) {
  //Añades un evento a cada elemento
  entrar_detalles[i].addEventListener("click",function() {
     //Aquí la función que se ejecutará cuando se dispare el evento
     alert(this.innerHTML); //En este caso alertaremos el texto del cliqueado
     alert(i);
    //Recorres la lista de elementos seleccionados

    div_figure[i].classList.toggle("aparecer-contenedor");  
    contenedor_swiper_tarjetas[i].classList.toggle("aparecer-contenedor");  
    /*contenedor_swiper_tarjetas.classList.toggle("aparecer-contenedor"); */
   /* for (var i=0; abouts.length; i++) {
      //Añades un evento a cada elemento      
        //Aquí la función que se ejecutará cuando se dispare el evento        
          abouts[i].classList.toggle("desplegar-tarjeta-info");
/*          about_p.style[i]="opacity : 1; display : block;";  */
        /*about.classList.toggle("desplegar-tarjeta-info");  */
        /*about_p.style ="opacity : 1; display : block;";  */
     /* }    */
  /*});
  */
/*}
*/
paginacion_blanca();

/*funciiones */
function paginacion_blanca(argument) {    
    paginacion.style = "background: white";
}








