document.addEventListener("DOMContentLoaded", function() {
    // Obtener el campo de búsqueda y la tabla
    const buscador = document.getElementById("buscar-txt");
    const tablaContainer = document.getElementById("tabla2");

    // Agregar evento keyup al campo de búsqueda
    buscador.addEventListener("keyup", function() {
        const tabla = document.getElementById("tablaPlants");
        const filas = tabla.getElementsByTagName("tr");
        const filtro = buscador.value.toLowerCase();
        let algunaCoincidencia = false;

        // Recorrer las filas de la tabla (comenzando desde la segunda fila)
        for (let i = 1; i < filas.length; i++) {
            const celdas = filas[i].getElementsByTagName("td");
            let encontrado = false;

            // Recorrer las celdas de cada fila
            for (let j = 0; j < celdas.length; j++) {
                const texto = celdas[j].textContent || celdas[j].innerText;
                if (texto.toLowerCase().indexOf(filtro) > -1) {
                    encontrado = true;
                    algunaCoincidencia = true;
                    break;
                }
            }

            // Mostrar u ocultar la fila según el resultado de la búsqueda
            if (encontrado) {
                filas[i].style.display = "";
            } else {
                filas[i].style.display = "none";
            }
        }

        // Mostrar mensaje si no se encontraron coincidencias
        if (!algunaCoincidencia) {
            
            // Eliminar la tabla si existe
            const tablaExistente = document.getElementById("tablaPlants");
            if (tablaExistente) {
                tablaExistente.style.display = "none";
            }
            
            const mensajes = tablaContainer.querySelectorAll("p");
            mensajes.forEach(function(mensaje) {
                mensaje.parentNode.removeChild(mensaje);
            });
            // Crear y agregar un mensaje en su lugar
            const mensaje = document.createElement("p");
            mensaje.textContent = "No se encontraron resultados";
            tablaContainer.appendChild(mensaje);
        }
        else{
            const mensajes = tablaContainer.querySelectorAll("p");
            mensajes.forEach(function(mensaje) {
                mensaje.parentNode.removeChild(mensaje);
            });
            const tablaExistente = document.getElementById("tablaPlants");
            tablaExistente.style.display = "";
        }
    });
});

