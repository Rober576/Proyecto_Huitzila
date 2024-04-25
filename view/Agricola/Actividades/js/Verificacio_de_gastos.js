document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia a los radio buttons
    var radioSi = document.querySelector('.radioList input[value="si"]');
    var radioNo = document.querySelector('.radioList input[value="no"]');

    var section2 = document.getElementById('section2');
    var section3 = document.getElementById('section3');

    // Función para manejar la visibilidad de las secciones
    function toggleSections(siSelected) {
        // Si se selecciona 'Sí', mostrar la segunda sección y ocultar la tercera
        if (siSelected) {
            section2.style.display = 'block';
            section3.style.display = 'block';
        } else {
            // Si se selecciona 'No', mostrar solo la tercera sección y ocultar la segunda
            section2.style.display = 'none';
            section3.style.display = 'none';
        }
    }

    // Ocultar las secciones al cargar la página
    toggleSections(radioSi.checked); // Mostrar la sección 2 si 'Si' está marcado inicialmente

    // Agregar eventos de cambio a los radio buttons
    radioSi.addEventListener('change', function() {
        toggleSections(true);
    });

    radioNo.addEventListener('change', function() {
        toggleSections(false);
    });
});

