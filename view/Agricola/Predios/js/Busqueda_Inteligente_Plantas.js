document.addEventListener("DOMContentLoaded", function() {
    // Obtener el campo de búsqueda y la tabla
    const buscador = document.getElementById("buscar-txt");
    const tablaContainer = document.getElementById("tabla");

    // Agregar evento keyup al campo de búsqueda
    buscador.addEventListener("keyup", function() {
        const tabla = document.querySelector("#tabla table");
        const filas = tabla.getElementsByTagName("tr");
        const filtro = buscador.value.trim().toLowerCase();
        let algunaCoincidencia = false;

        // Recorrer las filas de la tabla (comenzando desde la segunda fila, ignorando la cabecera)
        for (let i = 1; i < filas.length; i++) {
            const celdas = filas[i].getElementsByTagName("td");
            let encontrado = false;

            // Recorrer las celdas de cada fila
            for (let j = 0; j < celdas.length - 1; j++) { // Excluir la última celda (Acciones)
                const texto = celdas[j].textContent || celdas[j].innerText;
                if (texto.toLowerCase().includes(filtro)) {
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

            // Eliminar mensajes existentes
            const mensajes = tablaContainer.querySelectorAll("p");
            mensajes.forEach(function(mensaje) {
                mensaje.parentNode.removeChild(mensaje);
            });

            // Crear y agregar un mensaje en su lugar
            const mensaje = document.createElement("p");
            mensaje.textContent = "No se encontraron resultados";
            tablaContainer.appendChild(mensaje);
        } else {
            // Si hay coincidencias, asegurarse de mostrar la tabla y eliminar mensajes
            const tablaExistente = document.getElementById("tablaPlants");
            if (tablaExistente) {
                tablaExistente.style.display = "";
            }

            const mensajes = tablaContainer.querySelectorAll("p");
            mensajes.forEach(function(mensaje) {
                mensaje.parentNode.removeChild(mensaje);
            });
        }
    });
});
