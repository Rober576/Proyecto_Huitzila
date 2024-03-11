var id = localStorage.getItem('id');
var formulario = document.getElementById('Equipo4');
var modal = document.getElementById('modal');
var siBtn = document.getElementById('siBtn');
var noBtn = document.getElementById('noBtn');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    // Mostrar el modal de confirmación
    modal.style.display = 'block';

    // Al hacer clic en "Sí" en el modal
    siBtn.onclick = function() {
        // Ocultar el modal
        modal.style.display = 'none';

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
                // Manejar la confirmación de éxito
                // Por ejemplo, redirigir a otra página
                window.location.href = '../../view/ejemplo/tabla4.html';
            }
        });
    };

    // Al hacer clic en "No" en el modal
    noBtn.onclick = function() {
        // Ocultar el modal
        modal.style.display = 'none';
        // Puedes realizar alguna acción adicional si el usuario decide no continuar
    };
});
