$(document).ready(function(){//
    $(document).keydown(function(){//todo el documento (asi podemso pulsar cualquier tecla y no tener un estricto focus sobre un elemento)
        $('div').animate({left:'+=10px'},500);//tomaras el div y lo moveras +10px del margen izquierdo
    });
});
/*Keydow() ----> al pulsar cualquier tecla haz algo
animate(1,2)-----> recibe dos paramentros, la animacion que realizara y el tiempo que tardara 
*/