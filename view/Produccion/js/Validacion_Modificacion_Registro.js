console.log('Validacion_Modificacion_Registro');

document.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario y agregar un listener para el evento 'submit'
    var formulario = document.getElementById('form_ingreso_agave');
    formulario.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevenir el envío del formulario por defecto

        // Obtener la fecha ingresada y la fecha actual
        let fecha = new Date(document.getElementById("fecha").value);
        let fechaActual = new Date();

        // Comprobar si la fecha ingresada es mayor o igual que la fecha actual
        if (fecha >= fechaActual) {
            alert("La fecha tiene que ser el día de hoy o mayor");
            return; // Detener la ejecución si la fecha es inválida
        }

        // Crear un nuevo FormData con los datos del formulario
        var datos = new FormData(formulario);

        // Realizar una petición fetch para enviar los datos del formulario
        fetch('../../controller/Produccion/Modificar_Movimientos.php', {
            method: 'POST',
            body: datos
        })
        .then(res => res.text()) // Convertir la respuesta a texto
        .then(data => {
            console.error(data.trim()); // Mostrar mensaje de respuesta (eliminando espacios en blanco)
            if (data.trim() === "Lote existente") {
                alert("Error: El lote ya existe");
                console.error('Error:', data);
            } else {
                alert("Modificación exitosa");
                location.href = "../../view/Produccion/Movimiento_Especifico_Mezcal.html";
            }
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
    });

    // Obtener el select de lote y cargar las opciones desde el servidor
    var selectCategoria = document.getElementById('lote');
    fetch('../../controller/Produccion/Obtener_Lote.php?tipo=lote')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            var option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            selectCategoria.appendChild(option);
        });
    })
    .catch(error => console.error('Error al obtener categorías:', error));

    // Función para manejar el cambio en el tipo de movimiento (entrada/salida)
    var tipoSelect = document.getElementById('mov');
    var procedenciaLabel = document.querySelector('label[for="procedencia"]');
    var asterisco = document.querySelector('.campo-obligatorio');
    
    var volAguaInput = document.getElementById('vol_agua');
    var tipoMovimientoSelect = document.getElementById('tipo');
    var vol55Label = document.querySelector('label[for="alc_vol55"]');
    var vol55Input = document.getElementById('alc_vol55');

    tipoSelect.addEventListener('change', function() {
        if (tipoSelect.value === 'entrada') {
            procedenciaLabel.textContent = 'Procedencia';
            asterisco.classList.add('campo-obligatorio');
            var nuevoAsterisco = document.createElement('span');
            nuevoAsterisco.textContent = '*';
            nuevoAsterisco.classList.add('campo-obligatorio');
            procedenciaLabel.appendChild(nuevoAsterisco);
            volAguaInput.disabled = false;
        } else if (tipoSelect.value === 'salida') {
            procedenciaLabel.textContent = 'Destino';
            asterisco.classList.add('campo-obligatorio');
            var nuevoAsterisco = document.createElement('span');
            nuevoAsterisco.textContent = '*';
            nuevoAsterisco.classList.add('campo-obligatorio');
            procedenciaLabel.appendChild(nuevoAsterisco);
            volAguaInput.disabled = true;
            volAguaInput.value = '';
        }
    });

    // Función para manejar el cambio en el tipo de movimiento (merma/otros)
    tipoMovimientoSelect.addEventListener('change', function() {
        if (tipoMovimientoSelect.value === 'merma') {
            vol55Label.textContent = 'Vol a 55% alc.';
            var asterisco = document.createElement('span');
            asterisco.textContent = '*';
            asterisco.classList.add('campo-obligatorio');
            vol55Label.appendChild(asterisco);
            vol55Input.disabled = false;
        } else {
            vol55Label.textContent = 'Vol a 55% alc.';
            var asterisco = document.createElement('span');
            asterisco.textContent = '*';
            asterisco.classList.add('campo-obligatorio');
            vol55Label.appendChild(asterisco);
            vol55Input.disabled = true;
            vol55Input.value = '';
        }
    });

    // Función para mostrar u ocultar el contenedor de volumen y alcohol
    const contenedorPrincipal = document.getElementById("contenedor-principal");
    const volumenMermaContainer = document.getElementById("volumen_merma");
    const alcVolMermaContainer = document.getElementById("alc_vol_merma");
    contenedorPrincipal.style.display = "none";
    volumenMermaContainer.removeAttribute("required");
    alcVolMermaContainer.removeAttribute("required");

    document.getElementById("tipo").addEventListener("change", function() {
        if (this.value === "Merma") {
            contenedorPrincipal.style.display = "block";
            volumenMermaContainer.setAttribute("required", "required");
            alcVolMermaContainer.setAttribute("required", "required");
        } else {
            contenedorPrincipal.style.display = "none";
            volumenMermaContainer.removeAttribute("required");
            alcVolMermaContainer.removeAttribute("required");
        }
    });

    // Responder al botón cancelar
    /*formulario.cancelar.addEventListener('click', function (e) {
        e.preventDefault();
        if (confirm("Los cambios realizados no se guardarán, ¿desea continuar?")) {
            window.location.href = 'Mostrar_Mezcal.html';
        }
    });*/
});
