var id = localStorage.getItem('id');
var formulario = document.getElementById('advanced-form');
formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    var datos = new FormData(formulario);
    datos.append('id', id);
    fetch('../../../controller/Agricola/Predios/php/Actualizar_Datos_Predio.php', {
        method: 'POST',
        body: datos
        
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data === 'exito') {
            window.location.href = '../../../view/Agricola/Predios/Vista_Predios.html'; 
        }
    });



});