$(document).ready(function() {
    $(document).keydown(function(key) {//todo el documento es suceptible a keydowd, LE PASAMOS EL PARAMETRO KEY(tecla pulsada)
        switch(parseInt(key.which,10)) {//convertimos la key
			case 65://la tecla a en codigo
				$('img').animate({left: "-=10px"}, 'fast');//mueve el elemento
				break;
			case 83://tecla s en codigo
				$('img').animate({top: "+=10px"}, 'fast');
				break;
			case 87://tecla w en codigo
				$('img').animate({top: "-=10px"}, 'fast');
				break;
			case 68://tecla d en codigo
				$('img').animate({left: "+=10px"}, 'fast');
				break;
			default:
				break;
		}
	});
});
/*al parecer key es palabra reservada, winch indica la tecla que se presiono, la convertimos con parseInt
a numero que luego evaluamos en swicth*/

/*parseInt(string,numeracion) convertir un string a un numero, 
le entregamos el string y loconvertimso a un numero con base 10 (numeros naturales)*/