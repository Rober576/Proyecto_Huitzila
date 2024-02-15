//declarar las variables globales
var formulario = document.getElementById('Equipo4');

//se pone un escuchador para el evento submit del formulario 
formulario.addEventListener('submit', function (e)
{
    e.preventDefault();
    var datos = new FormData(Equipo4);
    //fusiona el html con el php de la logica y validaciones
    fetch('../../controller/ejemplo/Registro_Validacion_E4.php', {
        method: 'POST',
        body: datos
    })
        //recibe el mensaje para mandarlo como alerta
        .then(res => res.json())
        .then(data =>
        {
            //el registro fue exitoso
            if (data === 'exito') {
                alert("Registro exitoso");
            }

            //los datos no pasaron alguna validacion
            else if(data === 'errores'){
                alert("Registro fallido");
            }

            //algo salió mal
            else {
                alert(data);
            }
        })
})

