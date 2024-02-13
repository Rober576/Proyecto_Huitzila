//declara las variables globales
var formulario = document.getElementById('Equipo4');
var submitButton = document.getElementById("submitButton");

console.log('hola mundo2');

submitButton.addEventListener("click", function(event) {
    // Detenemos la acción por defecto del botón
    event.preventDefault();


    var datos= new FormData(formulario);
    //C:\version7\htdocs\Huitzila\Proyecto_Huitzila\controller\ejemplo\registro_ejemplo.php
    fetch('../../controller/ejemplo/registro_equipo4.php', {
        method: 'POST',
        body: datos
    })

    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data === 'exito') {
            const form= document.getElementById('Equipo4');
            form.reset();
            alert("Registro exitoso");
            
        }
    })
})