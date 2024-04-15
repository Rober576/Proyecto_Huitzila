var formulario = document.getElementById('advanced-form');

formulario.addEventListener('submit', function (e)
{
    e.preventDefault();

    var datos= new FormData(formulario);
    fetch('../../controller/Usuarios/Registro_Usuario.php', {
        method: 'POST',
        body: datos
    })

    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data === 'exito') {
            const form= document.getElementById('advanced-form');
            form.reset();
            alert("Registro exitoso");
            window.location.href = 'Mostrar_Usuarios.html';
        } else if(data==='corre') {
            alert("El correo ya fue utilizado");
        }
    })
})

var selectCategoria = document.getElementById('area_us');

fetch('../../controller/Usuarios/Obtener_Usuarios.php?tipo=area_us')
.then(response => response.json())
.then(data => {
    data.forEach(item => {
        var option = document.createElement('option');
        option.value = item['IdentificadorArea'];
        option.textContent = item['NombreArea'];

        if (selectCategoria) {
            selectCategoria.appendChild(option);
        }
    });
})
.catch(error => console.error('Error al obtener categorías:', error));




var selectCategoria2 = document.getElementById('tipo_us');

fetch('../../controller/Usuarios/Obtener_Usuarios.php?tipo=tipo_us')
.then(response => response.json())
.then(data => {
    data.forEach(item => {
        var option = document.createElement('option');
        option.value = item['IdentificadorTipo'];
        option.textContent = item['Tipo'];

        if (selectCategoria) {
            selectCategoria2.appendChild(option);
        }
    });
})
.catch(error => console.error('Error al obtener categorías:', error));