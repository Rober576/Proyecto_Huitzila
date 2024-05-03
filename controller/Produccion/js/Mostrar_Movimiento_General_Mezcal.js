function buscar_datos(lote, fecha_inicio, fecha_fin) {
    var url = '../../controller/Produccion/Mostrar_Movimiento_General_Mezcal.php';

    console.log('Valor de lote:', lote);
    console.log('Valor de Fecha:', fecha_inicio);
    console.log('Valor de Fecha 2:', fecha_fin); // Mostrar el valor de consulta en la consola
    document.getElementById("fecha_inicio_hidden").value=fecha_inicio;
    document.getElementById("fecha_fin_hidden").value=fecha_fin;
    if (lote !== "") {
        url += '?lote=' + lote + '&fecha_inicio=' + fecha_inicio + '&fecha_fin=' + fecha_fin;
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
    // Obtener parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const lote = urlParams.get('Lote');
    var fecha_inicio = urlParams.get('fecha_inicio');
    var fecha_fin = urlParams.get('fecha_fin');
    // Verificar si se encontró el parámetro Lote en la URL
    if (lote !== null) {
        // Llamar a la función buscar_datos con el valor de Lote como consulta
        buscar_datos(lote, fecha_inicio, fecha_fin);
    } else {
        console.error('El parámetro Lote no se encontró en la URL.');
    }
});

document.getElementById("boton_filtrar").addEventListener("click", function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
    

    const urlParams = new URLSearchParams(window.location.search);
    const lote = urlParams.get('Lote'); // Verificar el valor de Lote en la consola

    // Obtener valores de las fechas seleccionadas
    var fecha_inicio = document.getElementById("fecha_inicio").value;
    var fecha_fin = document.getElementById("fecha_fin").value;

    if(fecha_inicio==='' || fecha_fin===''){
        alert("Debes de seleccionar fechas");
    }else{

    // Redireccionar a la página con los parámetros de lote y fechas
    window.location.href = '../../view/Produccion/Movimiento_General_Mezcal.html?' + new URLSearchParams({
        Lote: lote,
        fecha_inicio: fecha_inicio,
        fecha_fin: fecha_fin
    
    });
    }

    // No es necesario llamar buscar_datos aquí, ya que la página se redireccionará y se cargará nuevamente
});

document.getElementById("boton_limpiar").addEventListener("click", function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
    const urlParams = new URLSearchParams(window.location.search);
    const lote = urlParams.get('Lote'); // Verificar el valor de Lote en la consola
    
    // Redireccionar a la página con los parámetros de lote y fechas
    window.location.href = '../../view/Produccion/Movimiento_General_Mezcal.html?' + new URLSearchParams({
        Lote: lote
    });

    // No es necesario llamar buscar_datos aquí, ya que la página se redireccionará y se cargará nuevamente
});