var formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function (e)
{
    e.preventDefault();

    var correo = formulario.querySelector('input[name="usuario"]').value;

    var datos= new FormData(formulario);
    fetch('../../controller/Recuperar_Contraseña/Recuperar_Contra_1.php', {
        method: 'POST',
        body: datos
    })

    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.exito) {
            const form= document.getElementById('formulario');
            const codigo = data.codigo;
            form.reset();
            alert("Se ha enviado un código de recuperación a tú correo");
            window.location.href = '../../view/Recuperar_Contraseña/Codigo_Recupera_Contra.html?parametro=' + encodeURIComponent(correo) + '&codigo1=' + encodeURIComponent(codigo);
        }
    })
})