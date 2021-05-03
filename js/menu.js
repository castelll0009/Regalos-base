var sound = document.getElementById("buzz");
var btn = document.getElementById("zumbido");	
var beepc = document.querySelector("#beepc");


function buzzing() {					
	sound.play();			
}		

var zoom = false;
function vistaEscritorio(){	
	if(zoom == false){
		document.body.style = "zoom: 45%";		

		zoom = true;
	}else{
		document.body.style = "zoom: 100%";
		zoom = false;
	}		
}

/*///////////JQUERY///////////////////////////////////////*/
/*///////////JQUERY///////////////////////////////////////*/
	
$(document).ready(function() {		
	
	$(document).ready(() => {
		$(".sona0").click(function(){
			var elem = $(".puntos0", this).text();
/*			$(".puntos0", this).css("display","none");*/

			if (elem == "...Leer Más") {
				//depliega
				$(".text0", this).slideDown();
				$(".puntos0" ,this).text("");													
				//solo afecta las resoluciones grandes como el PC
				if($(window).width() > 700){																											
					$(this).css("position","absolute");	
					$(".sona0").css("position","relative");	
					$(this).css("position","absolute");						
					$(this).css("box-shadow", "2px 2px 4px  #bbbab8, 10px 10px 10px rgb(141, 141, 141)");								
				}else{	
					//si la resolcion es de telefono no0 hacemos nada		
				}
				//ahora dependiendo del hover  cambiamos el estilo del Div-figure				
				$(document).ready(() => {										
									
					$(".sona0").hover(function(){						
						/*alert("sienrttra");			*/												
						/*$(this).css("box-shadow", "2px 2px 4px  #bbbab8, 10px 10px 10px rgb(141, 141, 141)");			*/
						
					}, function(){											
						
						/*alert("salir hover");				*/				
						/*																							
						$(this).css("margin-top","-15px");
						$(this).css("padding", "10px");
						$(this).css("padding-top", "15px");
						$(this).css("padding-bottom", "0px");
						$(this).css("margin-left", "-10px");					
						$(this).css("z-index", "5");	
						$(this).css("border-radius", "20px");							
						*/
						/*setTimeout(function(){ $(this).css("position", "relative"); }, 490);*/					
						$(".puntos0", this).text("...Leer Más");		
						$(".text0", this).slideUp();	
						/*setTimeout(function(){ $(".sona0").css("box-shadow", "none"); }, 490);	*/
						$(this).css("box-shadow", "none"); 	
					});
				});										
																									
			  } else {
				//pliega
				$(".puntos0", this).text("...Leer Más");		
				$(".text0", this).slideUp();								
				setTimeout(function(){ $(".sona0").css("position", "relative"); }, 490);
				setTimeout(function(){ $(".sona0").css("box-shadow", "none"); }, 490);					
			  }	
			  	
		});
	});
///////////////////////////////////////////////////////////////////

});