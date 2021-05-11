var sound = document.getElementById("buzz");
var btn = document.getElementById("zumbido");	
var beepc = document.querySelector("#beepc");
var btn_detalles = document.querySelector("#btn-detalles");


function buzzing() {					
	sound.play();			
}		

var zoom = false;
function vistaEscritorio(){		
	if(zoom == false){
		document.body.style = "zoom: 51%";	
		btn_detalles.style ="font-size: 4em; bottom: 95px;";		
		beepc.style ="font-size: 4em";		
		zoom = true;
	}else{
		document.body.style = "zoom: 100%";		
		btn_detalles.style ="font-size: 2em";
		beepc.style ="font-size: 2em";		
		zoom = false;
	}		
}

/*///////////JQUERY///////////////////////////////////////*/
/*///////////JQUERY///////////////////////////////////////*/
	
$(document).ready(function() {		
	
	$(document).ready(() => {
		$(".sona0").click(function(){
			var elem = $(".puntos0", this).text();

			if (elem == "...Leer Más") {
				//depliega
				$(".text0", this).slideDown();
				$(".puntos0" ,this).text("");													
																							
			  } else {
				//pliega
				$(".puntos0", this).text("...Leer Más");		
				$(".text0", this).slideUp();													
			  }	
			  	
		});
	});
///////////////////////////////////////////////////////////////////

});