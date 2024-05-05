document.addEventListener("DOMContentLoaded", function() {
    var correo = sessionStorage.getItem('correo');
    var codigo = sessionStorage.getItem('codigo');

    if (correo && codigo) {
        document.getElementById('correo').value = correo;
        document.getElementById('codigo2').value = codigo;
    } else {
        console.log('No se proporcionaron el correo electrónico y/o el código de recuperación.');
    }

    sessionStorage.removeItem('correo');
    sessionStorage.removeItem('codigo');
});

var formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function (e)
{
    e.preventDefault();

    var datos= new FormData(formulario);
    fetch('../../controller/Recuperar_Contraseña/Codigo_Recupera_Contra.php', {
        method: 'POST',
        body: datos
    })

    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.exito) {
            const form= document.getElementById('formulario');
            const correo = data.correo;
            form.reset();
            window.location.href = '../../view/Recuperar_Contraseña/Confirmar_Contra.html?parametro1=' + encodeURIComponent(correo);
        }else
        alert("El código no es correcto");
    })
})