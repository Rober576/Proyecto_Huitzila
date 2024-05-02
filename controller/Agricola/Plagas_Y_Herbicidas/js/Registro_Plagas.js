// Declara las variables globales
var formulario = document.getElementById('advanced-form');

console.log('Registro de plaga');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    var datos = new FormData(formulario);

    // Verificar que el nombre de la plaga no esté siendo utilizado en otra planta
    fetch('../../../controller/Agricola/Plagas_Y_Herbicidas/php/Verificar_Codigo_Plaga.php', {
        method: 'POST',
        body: datos
    })
    .then(res => res.text()) // Usa .text() para evitar errores si el JSON es inválido
    .then(text => {
        try {
            const data = JSON.parse(text); // Intenta convertir el texto a JSON
            console.log(data)

            if (data === 'codigoUsado') {
                formulario.nomPlaga.style.border = "5px solid red"; 
                alert("Este nombre de plaga ya está registrado actualmente");     
            } else {
                // Si el código no está siendo utilizado, se procede con el registro
                return fetch('../../../controller/Agricola/Plagas_Y_Herbicidas/php/Registrar_Plaga.php', {
                    method: 'POST',
                    body: datos
                });
            }
        } catch (e) {
            // Captura errores de análisis y notifica al usuario
            console.error("Error al analizar la respuesta:", e);
            alert("Hubo un error al verificar el código de plaga. Por favor, intenta nuevamente.");
            formulario.reset();
            throw e; // Lanza el error para que el flujo de ejecución termine aquí
        }
    })
    .then(res => res.json()) // Asegúrate de que esta parte se ejecuta solo si no hubo errores anteriores
    .then(data => {
        if (data === 'exito') {
            formulario.reset();
            alert("Registro de plaga exitoso");
            window.location.href = "../../../view/Agricola/Plagas_y_herbicidas/Vista_Plagas.html";
        } else {
            formulario.reset();
            alert("El nombre de la plaga ya existe");
        }
    })
    .catch(err => {
        // Manejo de errores en el proceso de registro de plaga
        console.error("Error al registrar la plaga:", err);
        alert("Hubo un error al registrar la plaga. Por favor, intenta nuevamente.");
        formulario.reset();
    });
});



var cancelButton = document.getElementById("cancelButton");

    // Agregar un event listener para el evento 'click'
    cancelButton.addEventListener("click", function() {
        // Mostrar una alerta
        var confirmar = confirm("¿Estás seguro de cancelar el registro?");
        
        // Si el usuario confirma la acción
        if (confirmar) {
            // Obtener el formulario por su ID
            var formulario1 = document.getElementById("advanced-form"); 
            
            // Limpiar los campos del formulario
            formulario1.reset();
            window.location.href = "../../../view/Agricola/Plagas_y_herbicidas/Vista_Plagas.html";
            
        }
    });