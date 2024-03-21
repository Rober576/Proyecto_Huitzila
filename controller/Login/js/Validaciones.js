document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('login_form');
    var correoInput = document.getElementById('Correo');
    var mensajeErrorCorreo = document.getElementById('mensaje-error');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        var correoValido = validarCorreo(correoInput.value.trim());
        var passwordInput = document.getElementById('Password');
        var mensajeErrorPassword = document.getElementById('mensaje-error-password');
        var passwordValido = passwordInput.value.trim() !== '';

        if (correoValido && passwordValido) {
            form.submit(); 
        } else {
            if (!correoValido) {
                mensajeErrorCorreo.textContent = 'Por favor ingresa un correo electrónico válido.';
            } else {
                mensajeErrorCorreo.textContent = '';
            }
            if (!passwordValido) {
                mensajeErrorPassword.textContent = 'Por favor ingresa tu contraseña.';
            } else {
                mensajeErrorPassword.textContent = '';
            }
        }
    });

    correoInput.addEventListener('input', function() {
        validarCorreo(correoInput.value.trim());
    });
});

function validarCorreo(correo) {
    var mensajeErrorCorreo = document.getElementById('mensaje-error');

    var permitidos = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var esValido = permitidos.test(correo);

    if (correo === '') {
        mensajeErrorCorreo.textContent = 'Este campo es obligatorio.';
        return false;
    } else if (!esValido) {
        mensajeErrorCorreo.textContent = 'Por favor ingresa un correo electrónico válido.';
        return false;
    } else {
        mensajeErrorCorreo.textContent = '';
        return true;
    }
}

function validarTecla(event) {
    var tecla = event.key;
    var permitidos = /^[a-zA-Z0-9._@-]+$/;

    if (!permitidos.test(tecla)) {
        event.preventDefault();
    }
}


function borrarMensajeErrorPassword() {
    var mensajeErrorPassword = document.getElementById('mensaje-error-password');
    mensajeErrorPassword.textContent = '';
}
