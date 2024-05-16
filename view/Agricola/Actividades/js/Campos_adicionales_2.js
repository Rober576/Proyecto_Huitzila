document.addEventListener("DOMContentLoaded", function() {
    var actividadSele = document.getElementById("actividadSele");
    var campoPlaga = document.getElementById("selePlaga");
    var campoHerb = document.getElementById("seleHerbicida");
    var campoTexto1 = document.getElementById("campo1");
    var campoTexto2 = document.getElementById("campo2");

    // Función para manejar la visibilidad de los campos adicionales
    function toggleCamposAdicionales() {
        // Verificar la opción seleccionada
        if (actividadSele.value === "Control de plagas: Químico") {
            // Mostrar ambos campos si se selecciona "Control de plagas: Químico"
            campoTexto1.style.display = "block";
            campoTexto2.style.display = "block";
            campoHerb.required = true;
            campoPlaga.required = true;
        } else if (actividadSele.value === "Control de plagas: Biológico") {
            // Mostrar solo el primer campo si se selecciona "Control de plagas: Biológico"
            campoTexto1.style.display = "block";
            campoTexto2.style.display = "none";
            campoPlaga.required = true;
            campoHerb.required = false;
        } else {
            // Ocultar ambos campos si no se selecciona ninguna opción específica
            campoTexto1.style.display = "none";
            campoTexto2.style.display = "none";
            campoHerb.required = false;
            campoPlaga.required = false;
        }
    }

    // Llamar a la función para manejar la visibilidad de los campos adicionales cuando se carga la página
    toggleCamposAdicionales();

    // Agregar evento de cambio al select
    actividadSele.addEventListener("change", toggleCamposAdicionales);
});
