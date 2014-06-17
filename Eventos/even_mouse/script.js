$(document).ready(function(){
    $("div").mouseenter(function(){//al entrar el mouse dentro del elemto has:
        $(this).fadeTo("fast",1);//desvanece esto 
    });
     $("div").mouseleave(function(){
        $(this).fadeTo("fast",0.25);//desvanecelo aun mas
    });
});