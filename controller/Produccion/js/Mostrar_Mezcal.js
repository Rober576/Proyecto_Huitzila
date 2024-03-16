
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

function agregarEventosEliminar() {
    // Selecciona todos los botones con la clase "boton-eliminar"
    var botonesEliminar = document.querySelectorAll(".boton-eliminar");


    // Agrega el evento click a cada enlace de eliminar
    for (var i = 0; i < linkDelete.length; i++) {
        linkDelete[i].addEventListener('click', function(e) {
            e.preventDefault();
            var Lote = this.dataset.Lote;
            console.log("Valor de Lote:", Lote);

            if (confirm('¿Estás seguro de eliminar el registro?')) {
                fetch('../../../controller/Produccion/php/Eliminar_Mezcal.php?Lote=' + Lote, {
                        method: 'GET',
                    })
                    .then(res => res.json())
                    .then(data => {
                        alert(data);
                        location.reload();
                    });
            }
        });
    }
}


document.addEventListener('keyup', function(event) {

    if (event.target.Lote === 'busqueda') {
        var valorBusqueda = event.target.value.trim(); 
        buscar_datos(valorBusqueda);
    }
});


