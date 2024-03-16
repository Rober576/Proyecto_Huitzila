
$(buscar_datos());
function buscar_datos(consulta){
    $.ajax({
        url: '../../../controller/Produccion/php/Mostrar_Bitacora.php',
        type: 'POST',
        dataType: 'html',
        data: { consulta: consulta },
    })

        .done(function (respuesta)
        {
            $("#tabla_Bit").html(respuesta);
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