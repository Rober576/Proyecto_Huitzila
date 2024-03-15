var formulario = document.getElementById('form_datos');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    var datos = new FormData(formulario);

    fetch('../../controller/Produccion/php/Registrar_Mezcal.php', {
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
            const form = document.getElementById('form_datos');
            form.reset();
            alert("Registro exitoso");
        } else {
            console.error('Error al registrar:', data);
            alert("Error al registrar: " + data); 
        }
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
});

document.addEventListener('DOMContentLoaded', function() {

    var selectCategoria = document.getElementById('categoria');
    var selectClase = document.getElementById('clase');

    fetch('../../controller/Produccion/php/Obtener_Categorias_Clase.php')
    .then(response => response.json())
    .then(data => {

        data.forEach(categoria => {
            var option = document.createElement('option');
            option.value = categoria;
            option.textContent = categoria;
            selectCategoria.appendChild(option);
        });
    })
    .catch(error => console.error('Error al obtener las categorías:', error));

    fetch('../../controller/Produccion/php/Obtener_Categorias_Clase.php?tipo=clases')
    .then(response => response.json())
    .then(data => {

        data.forEach(clase => {
            var option = document.createElement('option');
            option.value = clase;
            option.textContent = clase;
            selectClase.appendChild(option);
        });
    })
    .catch(error => console.error('Error al obtener las clases:', error));
});
