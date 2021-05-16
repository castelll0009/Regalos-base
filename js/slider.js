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
      
var tarjet_about = document.querySelectorAll(".about");
var tarjet_contenido = document.querySelectorAll(".contenido");
var tarjet_orden  = document.querySelectorAll(".orden");
var tarjet_orden_h4 = document.querySelectorAll(".h4-orden");

/*ABOUT*/
tarjet_about.forEach( (about) => {  
  about.addEventListener("click", function(){           
    about.classList.toggle("desplegar-tarjeta-info");  
    /*about_p.style ="opacity : 1; display : block;";  */
    about.querySelector("p").style ="opacity : 1; display : block;";   // esta linea vale oro
  });
});
/*CONTENIDO*/
tarjet_contenido.forEach( (contenido) => {  
  contenido.addEventListener("click", function(){           
    contenido.classList.toggle("desplegar-tarjeta-info");  
    /*about_p.style ="opacity : 1; display : block;";  */
    contenido.querySelector("p").style ="opacity : 1; display : block;";   // esta linea vale oro
  });
});
/*ORDEN*/
tarjet_orden.forEach( (orden) => {  
  orden.addEventListener("click", function(){           
    orden.classList.toggle("desplegar-tarjeta-orden");    
  });
});


var div_figures = document.querySelectorAll(".div-figure");
var contenedor_swiper_tarjetas = document.querySelectorAll(".contenedor-swiper-tarjetas");
//listener DELEGACION de envetyos

var entrar_detalles = document.querySelectorAll(".entrar-detalles");

entrar_detalles.forEach( (detalle,index) => {  
  detalle.addEventListener("click", function(){          

     if(index == 0 || index== 1 )//En este caso alertaremos el texto del cliqueado          
      {                        
            div_figures[0].classList.toggle("desaparecer-contenedor");
            contenedor_swiper_tarjetas[0].classList.toggle("aparecer-contenedor")    
   
      }
      if(index == 2 || index== 3 )//En este caso alertaremos el texto del cliqueado          
      {                        
            div_figures[1].classList.toggle("desaparecer-contenedor");
            contenedor_swiper_tarjetas[1].classList.toggle("aparecer-contenedor") ;                
      }
      if(index == 4 || index== 5 )//En este caso alertaremos el texto del cliqueado          
      {                        
            div_figures[2].classList.toggle("desaparecer-contenedor");
            contenedor_swiper_tarjetas[2].classList.toggle("aparecer-contenedor")  ;          
      }
      if(index == 6 || index== 7 )//En este caso alertaremos el texto del cliqueado          
      {                        
            div_figures[3].classList.toggle("desaparecer-contenedor");
            contenedor_swiper_tarjetas[3].classList.toggle("aparecer-contenedor")            
      }
      if(index == 8 || index== 9 )//En este caso alertaremos el texto del cliqueado          
      {                        
            div_figures[4].classList.toggle("desaparecer-contenedor");
            contenedor_swiper_tarjetas[4].classList.toggle("aparecer-contenedor")            
      }


  });
});


//desplegar todas los menus 

function desplegarItems(){     
  div_figures.forEach( (figures) => {         
      figures.classList.toggle("desaparecer-contenedor");                          
  });
      
  contenedor_swiper_tarjetas.forEach( (tarjeta) => {                    
      tarjeta.classList.toggle("aparecer-contenedor");           
  });
}










