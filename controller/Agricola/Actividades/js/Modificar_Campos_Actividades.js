var id = localStorage.getItem('id');
var plantacion = localStorage.getItem('plantacion');
var formulario = document.getElementById('advanced-form');


formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    
    let listaNombreTrabajador = JSON.parse(localStorage.getItem('listaNombreTrabajador')) || [];
    let listaDiasSeleccionados = JSON.parse(localStorage.getItem('listaDiasSeleccionados')) || [];
    let listaDescripcion = JSON.parse(localStorage.getItem('listaDescripcion')) || [];
    let listaGastoGasolina = JSON.parse(localStorage.getItem('listaGastoGasolina')) || [];
    let listaDatosVehiculo = JSON.parse(localStorage.getItem('listaDatosVehiculo')) || [];
    let listaGastoLiquidos = JSON.parse(localStorage.getItem('listaGastoLiquidos')) || [];
    let listaCompraMaterial = JSON.parse(localStorage.getItem('listaCompraMaterial')) || [];
    let listaGastosExtras = JSON.parse(localStorage.getItem('listaGastosExtras')) || [];
    let listaSemana = JSON.parse(localStorage.getItem('listaSemana')) || [];

   

    console.log(listaNombreTrabajador);
    console.log(listaDiasSeleccionados);
    console.log(listaDescripcion);
    console.log(listaGastoGasolina);
    console.log(listaDatosVehiculo);
    console.log(listaGastoLiquidos);
    console.log(listaCompraMaterial);
    console.log(listaGastosExtras);
    console.log(listaSemana);

    // Confirmación antes de enviar
    if (confirm("¿Estás seguro de que deseas realizar las modificaciones?")) {
        var datos = new FormData(formulario);
        datos.append('id', id);
        datos.append('plantacion', plantacion);

        // Convertir las listas a cadenas JSON y agregarlas al FormData
        datos.append('listaNombreTrabajador', JSON.stringify(listaNombreTrabajador));
        datos.append('listaDiasSeleccionados', JSON.stringify(listaDiasSeleccionados));
        datos.append('listaDescripcion', JSON.stringify(listaDescripcion));
        datos.append('listaGastoGasolina', JSON.stringify(listaGastoGasolina));
        datos.append('listaDatosVehiculo', JSON.stringify(listaDatosVehiculo));
        datos.append('listaGastoLiquidos', JSON.stringify(listaGastoLiquidos));
        datos.append('listaCompraMaterial', JSON.stringify(listaCompraMaterial));
        datos.append('listaGastosExtras', JSON.stringify(listaGastosExtras));
        datos.append('listaSemana', JSON.stringify(listaSemana));

        fetch('../../../controller/Agricola/Actividades/php/Actualizar_Datos_Actividades.php', {
            method: 'POST',
            body: datos
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data === 'exito') {
                // Alerta de éxito
                alert("¡Los datos se han guardado exitosamente!");
                // Redirigir después de aceptar la alerta
                window.location.href = '../../../view/Agricola/Actividades/Vista_actividades.html';            
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Manejo de errores si la solicitud falla
            alert("Se produjo un error al guardar los datos. Inténtalo de nuevo más tarde.");
        });
    }
});

// Agregar evento de clic al botón "Cancelar"
document.getElementById('cancelButton').addEventListener('click', function() {
    if (confirm("¿Estás seguro de que deseas cancelar la Modificación? Los cambios se perderán")){
        window.location.href = '../../../view/Agricola/Actividades/Vista_actividades.html';         
    }
});
