
function buscar_datos(consulta) {

    var url = '../../../controller/Produccion/php/Mostrar_Mezcal.php';

    if (consulta !== "") {
        url += '?consulta=' + consulta;
    }

    // Crear una nueva instancia de XMLHttpRequest
    var xhr = new XMLHttpRequest();
    // Configurar la solicitud GET
    xhr.open('GET', url, true);

    // Definir la función de retorno de llamada (callback) para manejar la respuesta
    xhr.onload = function() {
        if (xhr.status === 200) {

            document.getElementById("tabla_Bit").innerHTML = xhr.responseText;

            agregarEventosEliminar();
            agregarEventosEditar();
        } else {
            console.error("Error al realizar la solicitud:", xhr.statusText);
        }
    };

    xhr.onerror = function() {
        console.error("Error al realizar la solicitud.");
    };


    xhr.send();
}


document.addEventListener("DOMContentLoaded", function() {
    buscar_datos("");
});


document.addEventListener('keyup', function(event) {

    if (event.target.id === 'busqueda') {
        var valorBusqueda = event.target.value.trim(); 
        buscar_datos(valorBusqueda);
    }
});
