//declara las variables globales
var formulario = document.getElementById('form_datos');


console.log('hola mundo4');

formulario.addEventListener('submit', function (e)
{
    
    console.log('holaasdassda');
    e.preventDefault();


    var datos= new FormData(formulario);
    //C:\version7\htdocs\Huitzila\Proyecto_Huitzila\controller\ejemplo\registro_ejemplo.php
    fetch('../../../controller/Produccion/php/Registrar_Mezcal.php', {
        method: 'POST',
        body: datos
    })

    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data === 'exito') {
            const form= document.getElementById('form_datos');
            form.reset();
            alert("Registro exitoso");
            
        }
    })
})