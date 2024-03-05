var id = localStorage.getItem('id');
var formulario = document.getElementById('Equipo2');
var modal = document.getElementById('modal');
var siBtn = document.getElementById('siBtn');
var noBtn = document.getElementById('noBtn');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    modal.style.display = 'block';

    siBtn.onclick = function() {
        // Ocultar el modal
        modal.style.display = 'none';

        var datos = new FormData(formulario);
        // Agregar el id al objeto FormData
        datos.append('id', id);

        fetch('../../controller/ejemplo/Modificar_Equipo2.php', {
            method: 'POST',
            body: datos
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data === 'exito') {
                // Manejar la confirmación de éxito
                // Por ejemplo, redirigir a otra página
                window.location.href = '../../view/ejemplo/tabla2.html';
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

/*var id = localStorage.getItem('id');
var formulario = document.getElementById('Equipo2');
var modal = document.getElementById('modal');
var siBtn = document.getElementById('siBtn');
var noBtn = document.getElementById('noBtn');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    modal.style.display = 'block';

    siBtn.onclick = function() {
        // Ocultar el modal
        modal.style.display = 'none';

        var datos = new FormData(formulario);
        // Agregar el id al objeto FormData
        datos.append('id', id);

        fetch('../../controller/ejemplo/Modificar_Equipo2.php', {
            method: 'POST',
            body: datos
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data === 'exito') {
                // Manejar la confirmación de éxito
                // Por ejemplo, redirigir a otra página
                window.location.href = '../../view/ejemplo/tabla2.html';
            }
        });
    };

    // Al hacer clic en "No" en el modal
    noBtn.onclick = function() {
        // Ocultar el modal
        modal.style.display = 'none';
        // Puedes realizar alguna acción adicional si el usuario decide no continuar
    };
});*/
