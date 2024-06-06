function procesarEnvioCorreoValido(correo) {
    var correo = formulario.querySelector('input[name="usuario"]').value;
    var datos = new FormData(formulario);
    fetch('../../controller/Recuperar_Contraseña/Recuperar_Contra_1.php', {
        method: 'POST',
        body: datos
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.exito) {
            const codigo = data.codigo;

            sessionStorage.setItem('correo', correo);
            sessionStorage.setItem('codigo', codigo);

            formulario.reset();
            alert("Se ha enviado un código de recuperación a tu correo");
            window.location.href = '../../view/Recuperar_Contraseña/Codigo_Recupera_Contra.html';
        }
    })
    .catch(error => console.error('Error al recuperar la contraseña:', error));
}