var formulario = document.getElementById('clave');

formulario.addEventListener('submit', function (e)
{
    e.preventDefault();

    var datos= new FormData(formulario);
    fetch('../../controller/Usuarios/Buscar_Usuario.php', {
        method: 'POST',
        body: datos
    })

    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data === 'exito') {
            const form= document.getElementById('clave');
            form.reset();
            alert("Registro exitoso");
            
        }
    })
})