
function buscar_datos(consulta) {
    var url = '../../controller/Produccion/Mostrar_Movimientos_Destilados_Cremas_Licores.php';

    if (consulta !== "") {
        url += '?consulta=' + consulta;
    }

    // Crear una nueva instancia de XMLHttpRequest
    var xhr = new XMLHttpRequest();
    // Configurar la solicitud GET
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status === 200) {

            document.getElementById("tablaMovimientos").innerHTML = xhr.responseText;
            agregarEventosEliminar();
        } else {
            console.error("Error al realizar la solicitud:", xhr.statusText);
        }
    };

    xhr.onerror = function() {
        console.error("Error al realizar la solicitud.");
    };


    xhr.send();
}

function agregarEventosEliminar() {
    // Selecciona todos los botones con la clase "boton-eliminar"
    var botonesEliminar = document.querySelectorAll(".boton-eliminar");


    for (var i = 0; i < botonesEliminar.length; i++) {
        botonesEliminar[i].addEventListener('click', function(e) {
            e.preventDefault();
            var Lote = this.dataset.id;
            console.log("Valor de Lote:", Lote);

            if (confirm('¿Estás seguro de eliminar el registro?')) {
                fetch('../../controller/Produccion/Eliminar_Cremas_Destilados_Licores.php?id=' + Lote, {
                        method: 'GET',
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.error(data.trim()); 

                         if (data === "Eliminado") {
                            alert("Registro eliminado correctamente.");
                            location.reload();
                        } else {
                            console.error('Error: Respuesta inesperada del servidor.');
                        }
                    })                    
            }
        });
    }
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







