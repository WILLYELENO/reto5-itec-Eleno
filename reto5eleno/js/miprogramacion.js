$(document).ready(function() {
    //cuando la pagina se haya cargado correctamente, empeza a hacer lo que viene abajo...

    $("#faqs").click(function(){

        //cuando hagan un click en algo llamado "servicios" hace un load (sería la carga asincrónica del ajax) o cargame lo
        //lo que escribi en servicios en la parte de la pagina que dice "centro"

        $("#centro").load("faqs.html");
    });
    $("#productos").click(function(){
        $("#centro").load("productos.html");
    });

    $("#tyc").click(function(){
        $("#centro").load("tyc.html");
    });
    $("#error").click(function(){
        $("#centro").load("errorr.html");
    });

    $("#formulario2").click(function(){
        $("#centro").load("formulario2.html");
    });

    $("#formularioasesoramiento").click(function(){
        $("#centro").load("formulario.html");
    });

    $("#inicio").click(function(){
        $("#contenedora").load("index.html"); //coloco la div que contiene el titular y el centro
    });

    $("#loquiero1").click(function(){
        $("#centro").load("formulario3.html");
    });

    $("#loquiero2").click(function(){
        $("#centro").load("formulario2.html");
    });

    $("#loquiero3").click(function(){
        $("#centro").load("formulario1.html");
    });

    

});