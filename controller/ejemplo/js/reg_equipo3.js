document.getElementById('Equipo3').addEventListener('submit', function (event) {
    event.preventDefault();

    var correoValido = val_Correo();
    var passwordValido = val_Password();
    var idValido = val_ID();
    var nombreValido = val_Nombre();
    var claveValida = val_clave();

    if (correoValido && passwordValido && idValido && nombreValido && claveValida) {
        var datos = new FormData(this);
        fetch('../../controller/ejemplo/registro_equipo3.php', {
            method: 'POST',
            body: datos
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data === 'exito') {
                const form = document.getElementById('Equipo3');
                form.reset();
                alert("Registro exitoso");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Error al procesar el registro");
        });
    } else {
        console.log("Registro fallido. Por favor, revise los campos resaltados.");
        alert("Registro fallido. Por favor, revise los campos resaltados.");
    }
});
