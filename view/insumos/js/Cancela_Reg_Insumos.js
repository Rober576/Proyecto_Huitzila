// Agregar evento de click al botón Cancelar
document.getElementById('Cancelar').addEventListener('click', function() {
    // Obtener todos los campos del formulario
    const campos = document.querySelectorAll('.formulario-datos input, .formulario-datos textarea');

    // Iterar sobre los campos y establecer su valor como cadena vacía
    campos.forEach(function(campo) {
        campo.value = "";
    });
});
