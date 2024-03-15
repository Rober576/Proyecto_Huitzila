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
        return response.text(); // Leemos la respuesta como texto
    })
    .then(data => {
        if (data === 'exito') {
            const form = document.getElementById('form_datos');
            form.reset();
            alert("Registro exitoso");
        } else {
            console.error('Error al registrar:', data);
            // Mostrar el mensaje de error del servidor en la consola
            alert("Error al registrar: " + data); // También podemos mostrar el mensaje de error en una alerta
        }
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
});
