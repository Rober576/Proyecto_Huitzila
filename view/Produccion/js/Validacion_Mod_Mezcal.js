document.addEventListener("DOMContentLoaded", function() {
    var formulario = document.getElementById('form_datos');
    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        var edadInput = document.getElementById('edad');
        var tanqueInput = document.getElementById('tanque');
        var categoriaSelect = document.getElementById('categoria');
        var especieSelect = document.getElementById('especie');
        var claseSelect = document.getElementById('clase');

        // Validar campo Edad
        var edadValue = edadInput.value.trim();
        if (!edadValue.match(/^\d+$/)) {
            edadInput.classList.add('invalid');
        } else {
            edadInput.classList.remove('invalid');
        }

        // Validar campo Tanque
        var tanqueValue = tanqueInput.value.trim();
        if (!tanqueValue.match(/^\w{5}$/)) {
            tanqueInput.classList.add('invalid');
        } else {
            tanqueInput.classList.remove('invalid');
        }

        // Validar campo Categoría
        if (categoriaSelect.selectedIndex === 0) {
            categoriaSelect.classList.add('invalid');
        } else {
            categoriaSelect.classList.remove('invalid');
        }

        // Validar campo Especie
        if (especieSelect.selectedIndex === 0) {
            especieSelect.classList.add('invalid');
        } else {
            especieSelect.classList.remove('invalid');
        }

        // Validar campo Clase
        if (claseSelect.selectedIndex === 0) {
            claseSelect.classList.add('invalid');
        } else {
            claseSelect.classList.remove('invalid');
        }

        // Si alguna de las validaciones falla, no enviar el formulario
        if (edadInput.classList.contains('invalid') || tanqueInput.classList.contains('invalid') || categoriaSelect.classList.contains('invalid') || especieSelect.classList.contains('invalid') || claseSelect.classList.contains('invalid')) {
            alert("Por favor, complete correctamente todos los campos requeridos.");
            return;
        }

        // Si todas las validaciones son exitosas, enviar el formulario
        formulario.submit();
    });

    // Limpiar el estilo de la casilla cuando el usuario interactúa con ella
    var inputs = formulario.querySelectorAll('input, select');
    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            input.classList.remove('invalid');
        });
    });
});
