$(document).ready(function() {//cargar cuando el domuento este listo
    $('button').click(function() {//toma elemto button y cuando le hagas cliek ejecuta
    	var toAdd = $("input[name=message]").val();//añade a la variable el varlo del input con ese nombre
        $('#messages').append("<p>"+toAdd+"</p>");//muestralo en un mensaje en un div
    });
});