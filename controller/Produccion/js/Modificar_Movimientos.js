// Declara las variables globales
var formulario = document.getElementById('form_ingreso_agave');
var respuesta = document.getElementById('respuesta');
console.log("entro a modificar_movimientos")
// Responde cuando hay un click en el boton "Guardar"
document.getElementById('submitButton').addEventListener('click', function (e) {
    e.preventDefault(); // Prevenir el envío del formulario por defecto
    console.log("Mensaje de prueba en la consola");
    var datos = new FormData(formulario);
    console.log("Antes de fetch"); // Agregado para depuración
    
    
    var movimiento = obtenerParametroURL('NumeroMovimiento');
    console.log(movimiento);

    if (movimiento !== null && movimiento !== ""){
        datos.append('numero', movimiento);
    }


    fetch('../../controller/Produccion/Modificar_Movimientos.php',
    {
        method: 'POST',
        body: datos
    })
    .then(res => res.text()) // Cambiado a text() para manejar cualquier tipo de respuesta
    .then(data => {
        console.log("Después de fetch"); // Agregado para depuración
        console.log("Mensaje de prueba",data); // Agregado para depuración
        if (data.trim() === "id") {
            alert("Hubo un error");
        } else if(data.trim) {
            alert("Actualización exitosa");
            var parametrosURL = new URLSearchParams(window.location.search);
            var lotE = parametrosURL.get('Lote');
            console.log('lote',lotE)
            // Redirigir a movimiento_espeficico.html con el parámetro 'lote'
            location.href = "../../view/Produccion/Movimiento_Especifico_Mezcal.html?Lote=" + lotE;
            //C:\xampp\htdocs\Proyecto_Huitzila\view\Produccion\
            //location.href = "../../view/Produccion/Movimientos_Mezcal.html";
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
        var parametrosURL = new URLSearchParams(window.location.search);
        var lotE = parametrosURL.get('Lote');
        console.log('lote',lotE)
        // Redirigir a movimiento_espeficico.html con el parámetro 'lote'
        location.href = "../../view/Produccion/Movimiento_Especifico_Mezcal.html?Lote=" + lotE;
      //window.location.href='../../view/Produccion/Mostrar_Movimientos_Mezcal.html';
    }

    
});


function obtenerParametroURL(parametro) {
    var parametrosURL = new URLSearchParams(window.location.search);
    return parametrosURL.get(parametro);
  }