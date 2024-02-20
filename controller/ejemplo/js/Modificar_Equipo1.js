//declara las variables globales
var formulario = document.getElementById('mod_equipo1');
var enlace = document.querySelector('a');
var id = enlace.getAttribute('data-id');


console.log('hola mundo1');

formulario.addEventListener('submit', function (e)
{
    e.preventDefault();


    var datos= new FormData(formulario);
    //C:\version7\htdocs\Huitzila\Proyecto_Huitzila\controller\ejemplo\registro_ejemplo.php
    fetch('../../controller/ejemplo/Modificar_Equipo1.php', {
        method: 'POST',
        body: datos
    })

    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data === 'exito') {
            const form= document.getElementById('mod_equipo1');
            form.reset();
            alert("Registro exitoso");
            
        }
    })
})