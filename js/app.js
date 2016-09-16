window.addEventListener("load", function() {
	var boton = document.getElementById("cri");
	var contador = 1;
	boton.addEventListener("click", function() {
		if(contador == 1) {
			document.getElementById("color").value = "#E1E1E1";
			document.getElementById("cirUno").classList.add("cambio-rosa");
			document.getElementById("cirTres").classList.remove("cambio-violeta");
		}
		if(contador == 2) {
			document.getElementById("color").value = "#D998CC";
			document.getElementById("cirDos").classList.add("cambio-amarillo");
			document.getElementById("cirUno").classList.remove("cambio-rosa");
		}
		if(contador == 3) {
			document.getElementById("color").value = "#9388AA";
			document.getElementById("cirTres").classList.add("cambio-violeta");
			document.getElementById("cirDos").classList.remove("cambio-amarillo");
			contador = 0;
		}
		contador++;
	});
    
    var botonDos = document.getElementById("superCri");
    botonDos.addEventListener("click", function() {
		
        var color = document.getElementById("color").value;
        if (color == "#E1E1E1" || color == "#E1E1E1"){
            document.getElementById("cirUno").style.border = "4px solid darkred";
            document.getElementById("cirDos").style.border = "0px solid darkred";
            document.getElementById("cirTres").style.border = "0px solid darkred";
        } else if (color == "#D998CC" || color == "#D998CC"){
            document.getElementById("cirUno").style.border = "0px solid yellow";
            document.getElementById("cirDos").style.border = "4px solid yellow";
            document.getElementById("cirTres").style.border = "0px solid yellow";
        } else if (color == "#9388AA" || color == "#9388AA"){
            document.getElementById("cirUno").style.border = "0px solid violet";
            document.getElementById("cirDos").style.border = "0px solid violet";
            document.getElementById("cirTres").style.border = "4px solid violet";
        }
		
	});
});