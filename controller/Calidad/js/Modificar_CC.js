var formulario = document.getElementById('advanced-form');
formulario.addEventListener('submit', function (e)
{
    e.preventDefault();

    var datos= new FormData(formulario);
    fetch('../../controller/Calidad/Modificar_CC.php', {
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
            window.location.href = '../../view/Calidad/Mostrar_Control_Calidad.html';
        }
    })
})


var selectCategoria = document.getElementById('lote');
var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get('id');
if (id){
var option = document.createElement('option');
option.value = id;
option.textContent = id;

if (selectCategoria) {
    selectCategoria.appendChild(option);
}}else{

fetch('../../controller/Calidad/Obtener_Lotes.php')
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
.catch(error => console.error('Error al obtener Lotes:', error));}