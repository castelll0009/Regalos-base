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
var div_figures = document.querySelectorAll(".div-figure");
var contenedor_swiper_tarjetas = document.querySelectorAll(".contenedor-swiper-tarjetas");

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

//Seleccionas todos los elementos con clase test
var entrar_detalles = document.getElementsByClassName("entrar-detalles");
    
    //Recorres la lista de elementos seleccionados
    for (var i=0; i< entrar_detalles.length; i++) {
        //Añades un evento a cada elemento
        entrar_detalles[i].addEventListener("click",function() {
          //TODO funcion que identifique le div  figure que se desea editar 
          // ta,mbien el contenedor swiper de  tarjetas, con el fin de crear una funcion generica
          if(this.innerHTML == "Anchetas")//En este caso alertaremos el texto del cliqueado          
          {                        
            div_figures[0].classList.toggle("desaparecer-contenedor");
            contenedor_swiper_tarjetas[0].classList.toggle("aparecer-contenedor")            
          }
          if(this.innerHTML == "Meriendas")//En este caso alertaremos el texto del cliqueado          
          {                        
            div_figures[1].classList.toggle("desaparecer-contenedor");
            contenedor_swiper_tarjetas[1].classList.toggle("aparecer-contenedor")            
          }
          if(this.innerHTML == "Desayunos sorpresa")//En este caso alertaremos el texto del cliqueado          
          {                        
            div_figures[2].classList.toggle("desaparecer-contenedor");
            contenedor_swiper_tarjetas[2].classList.toggle("aparecer-contenedor")            
          }
          if(this.innerHTML == "Arreglos florales")//En este caso alertaremos el texto del cliqueado          
          {                        
            div_figures[3].classList.toggle("desaparecer-contenedor");
            contenedor_swiper_tarjetas[3].classList.toggle("aparecer-contenedor")            
          }
          if(this.innerHTML == "Bandejas")//En este caso alertaremos el texto del cliqueado          
          {                        
            div_figures[4].classList.toggle("desaparecer-contenedor");
            contenedor_swiper_tarjetas[4].classList.toggle("aparecer-contenedor")            
          }
          /*ocultarDesplegarProductos();*/               
          
        });
    }

    /*
  var div_figures = document.querySelectorAll("div-figure");

    function ocultarDesplegarProductos(){
      for (let i = 0; i < div_figures.length; i++) {
        const element = div_figure[i];
        
      }
      // identificar div figure
      
    }
*/

paginacion_blanca();

/*funciiones */
function paginacion_blanca(argument) {    
    paginacion.style = "background: white";
}








