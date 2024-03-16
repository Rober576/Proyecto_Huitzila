
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

            //agregarEventosEliminar();
            //agregarEventosEditar();
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

function confirmarEliminacion(formulario) {
    if (confirm('¿Estás seguro que deseas eliminar el registro?')) {
        // Establece el valor del campo "confirmacion" en "si"
        formulario.querySelector('input[name="confirmacion"]').value = 'si';
        formulario.submit();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    buscar_datos("");
});

document.addEventListener('keyup', function(event) {
    if (event.target.Lote === 'busqueda') {
        var valorBusqueda = event.target.value.trim(); 
        buscar_datos(valorBusqueda);
    }
});

// Obtener el mensaje del parámetro de la URL y mostrarlo como una alerta
window.onload = function() {
    var mensaje = new URLSearchParams(window.location.search).get('mensaje');
    if (mensaje) {
        alert(mensaje);
    }
};

document.addEventListener('keyup', function(event) {

    if (event.target.Lote === 'busqueda') {
        var valorBusqueda = event.target.value.trim(); 
        buscar_datos(valorBusqueda);
    }
});


