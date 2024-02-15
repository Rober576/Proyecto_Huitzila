//declara las variables globales
var formulario = document.getElementById('Equipo3');
var submitButton = document.getElementById("submitButton");

console.log('hola mundo3');

formulario.addEventListener("submit", function(event) {
    // Detenemos la acción por defecto del botón
    event.preventDefault();


    var datos= new FormData(formulario);
    fetch('../../controller/ejemplo/registro_equipo3.php', {
        method: 'POST',
        body: datos
    })

    .then(res => res.json())
    .then(data => {
        console.log(data);
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