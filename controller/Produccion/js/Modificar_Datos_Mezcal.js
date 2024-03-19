
var formulario = document.getElementById('form_datos');
var respuesta = document.getElementById('respuesta');

// Responde cuando hay un click en el boton "Guardar"
document.getElementById('submitButton').addEventListener('click', function (e) {
    e.preventDefault(); // Prevenir el envío del formulario por defecto
    console.log("Mensaje de prueba en la consola");
    var datos = new FormData(formulario);
    console.log("Antes de fetch"); // Agregado para depuración
    fetch('../php/Modificar_Mezcal.php', {
        method: 'POST',
        body: datos
    })
    .then(res => res.text())
    .then(data => {
        if (data.trim() === 'no exito') {
            alert("Hubo un error");
        } else {
            alert("Actualización exitosa");
            redirectToMostrarMezcal(); // Redirigir después de la confirmación
        }
    })
    .catch(error => {
        console.error('Error en la solicitud fetch:', error);
        alert("Hubo un error en la solicitud");
    });
});

function redirectToMostrarMezcal() {
    location.href = "../../../view/Produccion/Mostrar_Mezcal.html";
}
// Responde cuando hay un click en el boton "Cancelar"
document.getElementById('cancelButton').addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Mensaje de prueba en la consola");

    var resp = confirm("Los cambios realizados no se guardarán, ¿desea continuar?");
    if (resp == true) {
        window.location.href = '../../../view/Produccion/Mostrar_Mezcal.html';
    }
});

// Responde cuando hay un click en el boton "Cancelar"
document.getElementById('cancelButton').addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Mensaje de prueba en la consola");

    var resp = confirm("Los cambios realizados no se guardarán, ¿desea continuar?");
    if (resp == true) {
        window.location.href = '../../../view/Produccion/Mostrar_Mezcal.html';
    }
});
