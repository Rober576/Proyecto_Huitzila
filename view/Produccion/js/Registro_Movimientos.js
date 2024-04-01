document.addEventListener('DOMContentLoaded', function() {
    var formulario = document.getElementById('form_ingreso_agave');

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        var datos = new FormData(formulario);

        fetch('../../controller/Produccion/Registrar_Movimientos.php', {
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
                location.href="../../view/Produccion/Registro_Movimientos.html";
            }        
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
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
    formulario.cancelar.addEventListener('click', function (e) {
        e.preventDefault();
        let urlAct = window.location;

        var resp = confirm("Los cambios realizados no se guardarán, ¿desea continuar?");
        if(resp ==  true){
            window.location.href='Mostrar_Mezcal.html';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var tipoSelect = document.getElementById('mov');
    var procedenciaLabel = document.querySelector('label[for="procedencia"]');
    var asterisco = document.querySelector('.campo-obligatorio');

    tipoSelect.addEventListener('change', function() {
        if (tipoSelect.value === 'entrada') {
            procedenciaLabel.textContent = 'Procedencia';
            asterisco.classList.add('campo-obligatorio');
            var nuevoAsterisco = document.createElement('span');
            nuevoAsterisco.textContent = '*';
            nuevoAsterisco.classList.add('campo-obligatorio');
            procedenciaLabel.appendChild(nuevoAsterisco);
        } else if (tipoSelect.value === 'salida') {
            procedenciaLabel.textContent = 'Destino';
            asterisco.classList.add('campo-obligatorio');
            var nuevoAsterisco = document.createElement('span');
            nuevoAsterisco.textContent = '*';
            nuevoAsterisco.classList.add('campo-obligatorio');
            procedenciaLabel.appendChild(nuevoAsterisco);
        }
    });
});
