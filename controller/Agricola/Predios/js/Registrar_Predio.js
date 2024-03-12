//declara las variables globales
var formulario = document.getElementById('advanced-form');

console.log('registro predio');

formulario.addEventListener('submit', function (e)
{
    e.preventDefault();

    var datos= new FormData(formulario);
    fetch('../../../controller/Agricola/Predios/php/Registrar_Predio.php', {
        method: 'POST',
        body: datos
    })

    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data === 'exito') {
            const form= document.getElementById('advanced-form');
            form.reset();
            alert("Registro de predio exitoso");
            
        }
        else{
            alert("La clave de predio ya existe");
        }
    })
})