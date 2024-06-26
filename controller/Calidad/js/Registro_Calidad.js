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
        console.log(data);
        if (data === 'exito') {
            const form= document.getElementById('advanced-form');
            form.reset();
            alert("Registro realizado con exito");
            window.location.href = '../../view/Calidad/Mostrar_Calidad.html';
        }
    })
})


var selectCategoria = document.getElementById('lote');

fetch('../../controller/Produccion/Obtener_Categorias_Clase_Especie.php?tipo=lote')
.then(response => response.json())
.then(data => {
    data.forEach(item => {
        var option = document.createElement('option');
        option.value = item;
        option.textContent = item;

        if (selectCategoria) {
            selectCategoria.appendChild(option);
        }
    });
})
.catch(error => console.error('Error al obtener categorías:', error));