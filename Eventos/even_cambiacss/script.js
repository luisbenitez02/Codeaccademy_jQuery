$(document).ready(function(){
    $("input").focus(function(){//focus click sobre el, elemento activo
        $(this).css("outline-color","#FF0000");//cambiamos el css, la linea del input
    });
});//NO SOPORTADO POR FIREFOX
//.css() modifica el css del elemento