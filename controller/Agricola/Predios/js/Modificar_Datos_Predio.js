var id = localStorage.getItem('id');
var formulario = document.getElementById('advanced-form');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    // Confirmación antes de enviar
    if (confirm("¿Estás seguro de que deseas realizar las modificaciones?")) {
        var datos = new FormData(formulario);
        datos.append('id', id);
        fetch('../../../controller/Agricola/Predios/php/Actualizar_Datos_Predio.php', {
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
                window.location.href = '../../../view/Agricola/Predios/Vista_Predios.html'; 
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
    if (confirm("¿Estás seguro de que deseas cancelar la Modificacion? Los cambios se perderan")){
        window.location.href = '../../../view/Agricola/Predios/Vista_Predios.html'; 
    }
});
