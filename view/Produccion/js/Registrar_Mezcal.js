var formulario = document.getElementById('form_datos');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    var datos = new FormData(formulario);

    fetch('../../controller/Produccion/Registrar_Mezcal.php', {
        method: 'POST',
        body: datos
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Hubo un problema al procesar la solicitud.');
        }
        return response.text();
    })
    .then(data => {
        if (data === 'exito') {
            console.error('Error al registrar:', data);
            alert("Error al registrar: " + data); 
        } else {
            alert("Registro exitoso");
            // Recargar la página después de
            location.href="../../view/Produccion/Registro_Mezcal.html";
        }
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var selectCategoria = document.getElementById('categoria');
    var selectClase = document.getElementById('clase');
    var selectEspecie = document.getElementById('especie');

    fetch('../../controller/Produccion/Obtener_Categorias_Clase_Especie.php?tipo=categorias')
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

    fetch('../../controller/Produccion/Obtener_Categorias_Clase_Especie.php?tipo=clases')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            var option = document.createElement('option');
            option.value = item;
            option.textContent = item;

            if (selectClase) {
                selectClase.appendChild(option);
            }
        });
    })
    .catch(error => console.error('Error al obtener clases:', error));

    fetch('../../controller/Produccion/Obtener_Categorias_Clase_Especie.php?tipo=especies')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            var option = document.createElement('option');
            option.value = item;
            option.textContent = item;

            if (selectEspecie) {
                selectEspecie.appendChild(option);
            }
        });
    })
    .catch(error => console.error('Error al obtener especies:', error));
});
