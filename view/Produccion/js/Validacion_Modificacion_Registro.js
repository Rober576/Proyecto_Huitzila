document.addEventListener('DOMContentLoaded', function() {
    var formulario = document.getElementById('form_ingreso_agave');

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        let fecha=document.getElementById("fecha").value;
        let fechaA = new Date();
        console.log(fecha);
        console.log(fechaA);

        if (fecha>=fechaA){
            alert("La fecha tiene que ser el dia de hoy o mayor");
        }else{

        var datos = new FormData(formulario);


        fetch('../../controller/Produccion/Modificar_Movimientos.php', {
            method: 'POST',
            body: datos
        })
        .then(res => res.text()) // Cambiar a text() para obtener la respuesta como texto
        .then(data => {
            console.error(data.trim()); // Trim para eliminar espacios en blanco alrededor del mensaje
            console.log("Entro4")
            if (data.trim() === "Lote existente") { // Trim la respuesta antes de comparar
                alert(data); // Mostrar mensaje del servidor
                console.error('Error:', data);
            } else {
                alert("Registro exitoso"); // Mostrar mensaje de éxito sin comillas extras innecesarias
                location.href="../../view/Produccion/Movimiento_Especifico_Mezcal.html";
            }        
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
        }
        });

    var selectCategoria = document.getElementById('lote');

    fetch('../../controller/Produccion/Obtener_Lote.php?tipo=lote')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            var option = document.createElement('option');
            option.value = item;
            option.textContent = item;

            if (selectCategoria) {
                selectCategoria.appendChild(option);
            }
        });
    })
    .catch(error => console.error('Error al obtener categorías:', error));

    // Responde cuando hay un click en el botón cancelar
   
});


document.addEventListener('DOMContentLoaded', function() {
    var tipoSelect = document.getElementById('mov');
    var procedenciaLabel = document.querySelector('label[for="procedencia"]');
    var asterisco = document.querySelector('.campo-obligatorio');
    var volAguaInput = document.getElementById('vol_agua');
    var tipoMovimientoSelect = document.getElementById('tipo');
    var vol55Label = document.querySelector('label[for="alc_vol55"]');
    var vol55Input = document.getElementById('alc_vol55');

    // Iniciar desactivado el campo alc_vol55
    vol55Input.disabled = true;

    tipoSelect.addEventListener('change', function() {
        if (tipoSelect.value === 'entrada') {
            procedenciaLabel.textContent = 'Procedencia';
            asterisco.classList.add('campo-obligatorio');
            var nuevoAsterisco = document.createElement('span');
            nuevoAsterisco.textContent = '*';
            nuevoAsterisco.classList.add('campo-obligatorio');
            procedenciaLabel.appendChild(nuevoAsterisco);

            // Desbloquear la entrada de texto
            volAguaInput.disabled = false;
        } else if (tipoSelect.value === 'salida') {
            procedenciaLabel.textContent = 'Destino';
            asterisco.classList.add('campo-obligatorio');
            var nuevoAsterisco = document.createElement('span');
            nuevoAsterisco.textContent = '*';
            nuevoAsterisco.classList.add('campo-obligatorio');
            procedenciaLabel.appendChild(nuevoAsterisco);

            // Bloquear la entrada de texto
            volAguaInput.disabled = true;

            // Si hay información en el campo de texto, borrarla
            volAguaInput.value = '';
        }
    });

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
            vol55Input.value = ''; // Vaciar el campo si no es "merma"
        }
    });
});




