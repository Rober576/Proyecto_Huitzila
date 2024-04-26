
function buscar_datos(consulta) {
    var url = '../../controller/Produccion/Mostrar_Mezcal.php';

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

            document.getElementById("tabla_Mez").innerHTML = xhr.responseText;
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

function agregarEventosEliminar() {
    // Selecciona todos los botones con la clase "boton-eliminar"
    var botonesEliminar = document.querySelectorAll(".boton-eliminar");


    for (var i = 0; i < botonesEliminar.length; i++) {
        botonesEliminar[i].addEventListener('click', function(e) {
            e.preventDefault();
            var Lote = this.dataset.id;
            console.log("Valor de Lote:", Lote);

            if (confirm('¿Estás seguro de eliminar el registro?')) {
                fetch('../../controller/Produccion/Eliminar_Mezcal.php?id=' + Lote, {
                        method: 'GET',
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.error(data.trim()); // Trim para eliminar espacios en blanco alrededor del mensaje
                        if (data === "Lote") {
                            alert("El lote que desea eliminar tiene movimientos registrados.");
                            console.error('Error: El lote que desea eliminar tiene movimientos registrados.');
                        } else if (data === "Eliminado") {
                            alert("Registro eliminado correctamente.");
                            location.reload(); // Recargar la página después de la eliminación
                        } else {
                            console.error('Error: Respuesta inesperada del servidor.');
                        }
                    })                    
            }
        });
    }
}

function agregarEventosEditar() {

    var botonesModificar = document.querySelectorAll(".boton-modificar");

    // Agrega el evento click a cada botón de modificar
    for (var j = 0; j < botonesModificar.length; j++) {
        botonesModificar[j].addEventListener('click', function(e) {

            window.location.href = "#";

           
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