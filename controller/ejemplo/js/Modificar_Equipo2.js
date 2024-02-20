//declara las variables globales
var formulario = document.getElementById('Equipo2');




formulario.addEventListener('submit', function (e)
{
    e.preventDefault();

    var datos= new FormData(formulario);
    
    fetch('../../controller/ejemplo/Modificar_Equipo2.php', {
        method: 'POST',
        body: datos
    })

    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data === 'exito') {
            const form= document.getElementById('Equipo2');
            form.reset();
            
            
        }
    })
})