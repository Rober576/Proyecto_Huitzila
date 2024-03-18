document.addEventListener('DOMContentLoaded', function() {
    var correoInput = document.getElementById('Correo');
    var passwordInput = document.getElementById('Password');
    var mensajeErrorCorreo = document.getElementById('mensaje-error');
    var mensajeErrorPassword = document.getElementById('mensaje-error-password');
    var form = document.getElementById('login_form');

    correoInput.addEventListener('input', function() {
        validarCorreo();
    });

    passwordInput.addEventListener('input', function() {
        validarPassword();
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
      
        var correoValido = validarCorreo();
        var passwordValido = validarPassword();

        if (correoValido && passwordValido) {
            form.submit(); 
        }
    });
});

function validarCorreo() {
    var correoInput = document.getElementById('Correo');
    var correo = correoInput.value.trim();
    var mensajeErrorCorreo = document.getElementById('mensaje-error');

   
    if (correo.length > 40) {
        mensajeErrorCorreo.textContent = 'El correo electrónico no puede tener más de 40 caracteres.';
        correoInput.classList.add('invalid');
        correoInput.style.border = "3px solid red";
        return false;
    }

    
    var regexCorreo = /^[a-zA-Z0-9._\-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexCorreo.test(correo)) {
        mensajeErrorCorreo.textContent = 'Por favor ingresa un correo electrónico válido.';
        correoInput.classList.add('invalid');
        correoInput.style.border = "3px solid red"; 
        return false;
    }

    mensajeErrorCorreo.textContent = '';
    correoInput.classList.remove('invalid');
    correoInput.style.border = ""; 
    return true;
}


function validarPassword() {
    var passwordInput = document.getElementById('Password');
    var password = passwordInput.value.trim();
    var mensajeErrorPassword = document.getElementById('mensaje-error-password');

   
    if (password === '') {
        mensajeErrorPassword.textContent = 'Este campo es obligatorio.';
        passwordInput.classList.add('invalid');
        passwordInput.style.border = "3px solid red"; 
        return false;
    }

    
    if (password.length < 8 || password.length > 16) {
        mensajeErrorPassword.textContent = 'La contraseña debe tener entre 8 y 16 caracteres.';
        passwordInput.classList.add('invalid');
        passwordInput.style.border = "3px solid red"; 
        return false;
    }

    
    mensajeErrorPassword.textContent = '';
    passwordInput.classList.remove('invalid');
    passwordInput.style.border = ""; 
    return true;
}


function validarTecla(event) {
    var tecla = event.key;
    var permitidos = /^[a-zA-Z0-9._@\-]+$/;
    return permitidos.test(tecla);
}


let bandera1 = false;
let bandera2 = false;


login_form.Correo.addEventListener('keyup', (e) =>{
    let valorInput = e.target.value;


    login_form.Correo.value = valorInput;

 
    if(!expresion.Correo.test(valorInput)){
        login_form.Correo.style.border = "3px solid red";
        bandera1 = false;
    } else {
        login_form.Correo.removeAttribute("style");
        bandera1 = true;
    }
});

login_form.Password.addEventListener('keyup', (e) =>{
    let valorInput = e.target.value;

    login_form.Password.value = valorInput;

    if(!expresion.Password.test(valorInput)){
        login_form.Password.style.border = "3px solid red";
        bandera2 = false;
    } else {
        login_form.Password.removeAttribute("style");
        bandera2 = true;
    }
});
