document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia a los radio buttons
    var radioSi = document.querySelector('.radioList input[value="si"]');
    var radioNo = document.querySelector('.radioList input[value="no"]');

    var section2 = document.getElementById('section2');
    var section3 = document.getElementById('section3');


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

