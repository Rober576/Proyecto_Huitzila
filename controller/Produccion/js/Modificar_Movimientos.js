// Declara las variables globales
var formulario = document.getElementById('form_ingreso_agave');
var respuesta = document.getElementById('respuesta');
document.getElementById('submitButton').addEventListener('click', function (e) {
    e.preventDefault(); 
    var datos = new FormData(formulario);

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
    .then(res => res.json()) // Cambiar a text() para obtener la respuesta como texto
    .then(data => {
        console.error(data.trim()); // Trim para eliminar espacios en blanco alrededor del mensaje
        console.log("data",data)
        if (data.trim() === "La fecha ingresada es menor que la ultima fecha registrada") {

            console.error("Error: La fecha ingresada es menor que la última fecha registrada");
        } 
        else if(data.trim() ==="Error Volumen"){
            alert("Error: El volumen de salida es mayor al volumen existente");

        }  else {
            alert("Actualización exitosa");
            var parametrosURL = new URLSearchParams(window.location.search);
            var lotE = parametrosURL.get('Lote');
            console.log('lote',lotE)
            location.href = "../../view/Produccion/Movimiento_Especifico_Mezcal.html?Lote=" + lotE;
            }
    })
    .catch(error => {
        console.error('Error:', error.message);
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