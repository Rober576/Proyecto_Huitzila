function buscar_datos(lote) {
    var url = '../../controller/Produccion/Mostrar_Movimientos_Especifico_Destilados_Cremas_Licores.php';

    console.log('Valor de lote:', lote); // Mostrar el valor de consulta en la consola
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
            var NumeroMovimiento = datos[1];
      
           
            console.log("Valor de LotEe:", Lote);
            console.log("Valor de NumeroMovimiento:", NumeroMovimiento);


            if (confirm('¿Estás seguro de eliminar el registro?')) {
                fetch('../../controller/Produccion/Eliminar_Movimiento_Especifico_Destilados_Cremas_Licores.php?id=' + Lote + '&NumeroMovimiento=' + NumeroMovimiento, {
                        method: 'GET',
                    })
                    .then(res => res.json())
                    .then(data => {
                        alert(data);
                        console.log("data",data)
                        location.reload();
                        //window.location.href = '../../../view/Produccion/Mostrar_Movimientos_Mezcal.html';
                    });
            }
        });
    }
}


function agregarEventosEditar() {
    var botonesModificar = document.querySelectorAll(".boton-modificar");
    
    for (var j = 0; j < botonesModificar.length; j++) {
        botonesModificar[j].addEventListener('click', function(e) {
            e.preventDefault(); // Evitar la acción predeterminada del botón
            var datos = this.dataset.id.split('@'); // Divide los datos usando el @ como separador
            var Lote = datos[0];
            var NumeroMovimiento = datos[1];
           
           
            console.log("Valor de Lote:", Lote);
            console.log("Valor de Fecha:", NumeroMovimiento);
          
            // Obtener el valor de 'lote' de la URL actual
            /*const urlParams = new URLSearchParams(window.location.search);
            const lote = urlParams.get('Lote');
            const fecha =urlParams.get('Fecha')
            console.log("Valor lote modificar",lote)
            console.log("valor fecha modificar",fecha)*/
            // Mostrar el valor del lote en la consola
           
            window.location.href = '#' ;
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







