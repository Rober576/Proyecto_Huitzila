//declara las variables globales
var formulario = document.getElementById('Equipo1');

console.log('hola mundo3');

formulario.addEventListener('submit', function (e)
{
    e.preventDefault();

    var datos= new FormData(formulario);
    //C:\version7\htdocs\Huitzila\Proyecto_Huitzila\controller\ejemplo\registro_ejemplo.php
    fetch('../../controller/ejemplo/registro_equipo1.php', {
        method: 'POST',
        body: datos
    })

    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data === 'exito') {
            const form= document.getElementById('Equipo1');
            form.reset();
            alert("Registro exitoso");
            
        }
    })
})