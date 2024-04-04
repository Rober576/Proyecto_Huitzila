function buscar_datos(lote) {
    var url = '../../controller/Produccion/Mostrar_Movimiento_Especifico_Mezcal.php';

    console.log('Valor de lote:', lote); // Mostrar el valor de consulta en la consola

    // Adjuntar el valor de Lote como consulta en la URL
    if (lote !== "") {
        url += '?lote=' + lote;
    }

    // Crear una nueva instancia de XMLHttpRequest
    var xhr = new XMLHttpRequest();
    // Configurar la solicitud GET
    xhr.open('GET', url, true);

    // Definir la función de retorno de llamada (callback) para manejar la respuesta
    xhr.onload = function() {
        if (xhr.status === 200) {

            document.getElementById("tablaMovimientos").innerHTML = xhr.responseText;
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
            var datos = this.dataset.id.split('@'); // Divide los datos usando el @ como separador
            var Lote = datos[0];
            var Fecha = datos[1];
            var IDMovimiento = datos[2];
            console.log("Valor de Lote:", Lote);
            console.log("Valor de Fecha:", Fecha);
            console.log("Valor de IDMovimiento:", IDMovimiento);

            if (confirm('¿Estás seguro de eliminar el registro?')) {
                fetch('../../controller/Produccion/Eliminar_Movimiento_Especifico_Mezcal.php?id=' + Lote + '&fecha=' + Fecha + '&idmovimiento=' + IDMovimiento, {
                        method: 'GET',
                    })
                    .then(res => res.json())
                    .then(data => {
                        alert(data);
                        window.location.href = '../../../view/Produccion/Mostrar_Movimientos_Mezcal.html';
                    });
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


document.addEventListener('DOMContentLoaded', function() {
    // Obtener parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const lote = urlParams.get('Lote');

    // Verificar si se encontró el parámetro Lote en la URL
    if (lote !== null) {
        // Llamar a la función buscar_datos con el valor de Lote como consulta
        buscar_datos(lote);
    } else {
        console.error('El parámetro Lote no se encontró en la URL.');
    }
});
