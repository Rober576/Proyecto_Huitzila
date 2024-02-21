var id = localStorage.getItem('id');
var formulario = document.getElementById('Equipo4');
formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    var datos = new FormData(formulario);
    // Agregar el id al objeto FormData
    datos.append('id', id);

    fetch('../../controller/ejemplo/Modificar_Equipo4.php', {
        method: 'POST',
        body: datos
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data === 'exito') {
            const form= document.getElementById('Equipo4');
        }
    });
});
