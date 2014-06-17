$(document).ready(function(){
    $("div").click(function(){//al dar click
        $(this).fadeOut("fast");//desaparece a velocidad rapido
        $(this).addClass("rojo");//añade la clase rojo
    });
    
});