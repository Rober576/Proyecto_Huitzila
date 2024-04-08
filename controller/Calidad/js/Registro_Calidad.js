var formulario = document.getElementById('advanced-form');

formulario.addEventListener('submit', function (e)
{
    e.preventDefault();
    
    var datos= new FormData(formulario);
    fetch('../../controller/Calidad/Registro_Calidad.php', {
        method: 'POST',
        body: datos
    })
    .then(res => res.json())
    .then(data => {
        console.log("Registro exitoso2");
        console.log(data);
        if (data.status === 'exito') {
            const form= document.getElementById('advanced-form');
            form.reset();
            alert("Registro exitoso");
        } 
    })
    .catch(error => {
        console.error('Error en la solicitud:', error);
    });
})