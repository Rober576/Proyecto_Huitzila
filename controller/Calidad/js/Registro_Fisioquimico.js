var formulario = document.getElementById('advanced-form');

formulario.addEventListener('submit', function (e)
{
    e.preventDefault();

    var datos= new FormData(formulario);
    fetch('../../controller/Calidad/Registro_Fisioquimico.php', {
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
            window.location.href = '../../view/Calidad/Mostrar_Fisioquimico.html';
        }
    })
})

var selectCategoria = document.getElementById('lote');
var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get('id');
var option = document.createElement('option');
option.value = id;
option.textContent = id;

if (selectCategoria) {
    selectCategoria.appendChild(option);
}