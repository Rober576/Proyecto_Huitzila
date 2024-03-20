document.getElementById('Cancelar').addEventListener('click', function() {
    // Mostrar un mensaje de confirmación
    const confirmacion = confirm("¿Estás seguro de cancelar el registro? Los cambios no se guardarán.");

    // Si el usuario confirma la cancelación
    if (confirmacion) {
        // Obtener todos los campos del formulario
        const campos = document.querySelectorAll('.formulario-datos input, .formulario-datos textarea');
        // Iterar sobre los campos y establecer su valor como cadena vacía
        campos.forEach(function(campo) {
            campo.value = "";
        });
        location.reload();
    } else {
        // Si el usuario cancela la acción, no hacer nada
        return;
    }
});

