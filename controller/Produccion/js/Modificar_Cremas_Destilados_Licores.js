// Obtener el formulario y agregar un evento de escucha para el envío
var formulario = document.getElementById('form_datos');
formulario.addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener los datos del formulario
    var datos = new FormData(formulario);

    fetch('../../controller/Produccion/Modificar_Cremas_Destilados_Licores.php', {
        method: 'POST',
        body: datos
    })
    .then(res => res.json())
    .then(data => {
         // Manejar la respuesta del servidor
         if (data === "existente") {
            alert("Lote existente");
            console.error('Error:', data);
        } else if (data === "exitoso") {
            alert("Actualizacion exitoso");
            // Redirigir a otra página después de un registro exitoso
            location.href = "../../view/Produccion/Mostrar_Cremas_Destilados_Licores.html";
        } else {
            // Mostrar cualquier otro mensaje de error
            alert(data);
        }       
    })
    .catch(error => {
        console.error('Error en la solicitud fetch:', error);
        // Aquí puedes mostrar un mensaje de error al usuario o realizar otras acciones de manejo de errores
    });
    
    
});

// Agregar un evento de escucha para el botón "cancelar"
formulario.cancelar.addEventListener('click', function (e){
    e.preventDefault();
    var resp = confirm("Los cambios realizados no se guardarán, ¿desea continuar?");
    if(resp ==  true){
        // Redirigir al usuario a otra página si confirma la cancelación
        window.location.href='Registro_Cremas_Destilados_Licores.html';
    }
});