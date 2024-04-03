// Declara las variables globales
var formulario = document.getElementById('form_ingreso_agave');
var respuesta = document.getElementById('respuesta');

// Responde cuando hay un click en el boton "Guardar"
document.getElementById('submitButton').addEventListener('click', function (e) {
    e.preventDefault(); // Prevenir el envío del formulario por defecto
    console.log("Mensaje de prueba en la consola");
    var datos = new FormData(formulario);
    console.log("Antes de fetch"); // Agregado para depuración
    fetch('../../controller/Produccion/Modificar_Movimientos.php', {
        method: 'POST',
        body: datos
    })
    .then(res => res.text()) // Cambiado a text() para manejar cualquier tipo de respuesta
    .then(data => {
        console.log("Después de fetch"); // Agregado para depuración
        console.log(data); // Agregado para depuración
        if (data.trim() === 'no exito') {
            alert("Hubo un error");
        } else {
            alert("Actualización exitosa");
            location.href = "../../view/Produccion/Mostrar_Movimientos_Mezcal.html";
        }
    })
    .catch(error => {
        console.error('Error en la solicitud fetch:', error); // Agregado para manejar errores de fetch
        alert("Hubo un error en la solicitud"); // Muestra un mensaje de error genérico
    });
});

// Responde cuando hay un click en el boton "Cancelar"
formulario.cancelar.addEventListener('click', function (e){
    e.preventDefault();
    let urlAct = window.location+''

    var resp = confirm("Los cambios realizados no se guardarán, ¿desea continuar?");
    if(resp ==  true){
      window.location.href='../../view/Produccion/Mostrar_Movimientos_Mezcal.html';
    }

    
});
