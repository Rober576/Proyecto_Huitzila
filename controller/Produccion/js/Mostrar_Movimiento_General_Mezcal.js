function buscar_datos(lote) {
    var url = '../../controller/Produccion/Mostrar_Movimiento_General_Mezcal.php';

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


/*document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const lote = urlParams.get('Lote');
    if (lote !== null)  {
        // Llamar a la función buscar_datos con el valor de Lote como consulta
        buscar_datos(lote);
    } else {
        console.error("error en el lote")
        
    }*/
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
