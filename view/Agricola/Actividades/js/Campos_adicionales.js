document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia a los radio buttons
    var radioSi = document.querySelector('.radioList input[value="si"]');
    var radioNo = document.querySelector('.radioList input[value="no"]');

    var nomTrab = document.getElementById("nomTrab");
    var actDes = document.getElementById("actDes");
    var semSele = document.getElementById("semSele");

    var section2 = document.getElementById('section2');
    var section3 = document.getElementById('section3');

    var campoSemanas = document.getElementById('canFecha');

    function eliminarTodo() {
        const tabla = document.getElementById("tablaActividades");
    
        while (tabla.rows.length > 1) { 
            tabla.deleteRow(1);
        }
    }

    function tablaContieneElementos(tablaId) {
        const tabla = document.getElementById(tablaId);
        if (tabla.rows.length > 1) {
            return true;
        } else {
            return false;
        }
    }

    // Función para manejar la visibilidad de las secciones
    function toggleSections(siSelected) {
        // Si se selecciona 'Sí', mostrar la segunda sección y ocultar la tercera
        if (siSelected) {
            section2.style.display = 'block';
            section3.style.display = 'block';

            nomTrab.required = true;
            actDes.required = true;
            semSele.required = true;

            campoSemanas.readOnly = true;

            const CantidadTrabajado = document.getElementById("canFecha").value;
            console.log(CantidadTrabajado)


            const actividadSele = document.getElementById('semSele');
            const General = document.getElementById("cosGenral").value;
            console.log(General)
            const CostoGeneral = parseFloat(General);
            document.getElementById("total").value = CostoGeneral;

            if (CantidadTrabajado === "") {
                actividadSele.innerHTML = '';

            } else {
                for (let i = 1; i <= CantidadTrabajado; i++) {
                    const item = `Semana ${i}`; 
                    var option = document.createElement('option');
                    option.value = item;
                    option.textContent = item;
                    if (actividadSele) {
                        actividadSele.appendChild(option);
                    } 
                         
                }
            }

        }else {
            eliminarTodo();
            section2.style.display = 'none';
            section3.style.display = 'none';

            nomTrab.required = false;
            actDes.required = false;
            semSele.required = false;

            campoSemanas.readOnly = false;
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

            campoHerb.required = true
            campoPlaga.required = true
        } else if (actividadSele.value === "Control de plagas: Biológico") {
            // Mostrar solo el primer campo si se selecciona "Control de plagas: Biológico"
            campoTexto1.style.display = "block";
            campoTexto2.style.display = "none";

            campoPlaga.required = true
            campoHerb.required = false
        } else {
            // Ocultar ambos campos si no se selecciona ninguna opción específica
            campoTexto1.style.display = "none";
            campoTexto2.style.display = "none";

            campoHerb.required = false
            campoPlaga.required = false
        }
    }

    // Llamar a la función para manejar la visibilidad de los campos adicionales cuando se carga la página
    toggleCamposAdicionales();

    // Agregar evento de cambio al select
    actividadSele.addEventListener("change", toggleCamposAdicionales);
});
