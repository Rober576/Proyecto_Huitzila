var id = localStorage.getItem('id');
var formulario = document.getElementById('advanced-form');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    modal.style.display = 'block';
    siBtn.onclick = function() {
        modal.style.display = 'none';

        var datos = new FormData(formulario);

        fetch('../../../controller/Agricola/Predios/php/Modificar_Datos_Predio.php', {
            method: 'POST',
            body: datos
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data === 'exito') {
                window.location.href = '../../../view/Agricola/Predios/Editar_Predios.html'; 
            }
        });
    };

    noBtn.onclick = function() {
        modal.style.display = 'none';
    };
});