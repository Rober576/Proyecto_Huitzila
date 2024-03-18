
$(buscar_datos());
function buscar_datos(consulta){
    $.ajax({
        url: '../../../controller/Agricola/Predios/php/Consultar_Predio.php',
        type: 'POST',
        dataType: 'html',
        data: { consulta: consulta },
    })

        .done(function (respuesta)
        {
            $("#tabla").html(respuesta);
        })
        .fail(function ()
        {
            console.log("error");
        })
}

$(document).on('keyup', '#busqueda', function (){
    var valorBusqueda = $(this).val();
    if (valorBusqueda != "") {
        buscar_datos(valorBusqueda);
    } else {
        buscar_datos();
    }
})