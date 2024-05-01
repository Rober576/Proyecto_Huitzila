var formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function (e)
{
    e.preventDefault();

    var datos= new FormData(formulario);
    fetch('../../controller/Recuperar_Contraseña/Confirmar_Contra.php', {
        method: 'POST',
        body: datos
    })

    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.exito2) {
            const form= document.getElementById('formulario');
            form.reset();
            alert("Contraseña reestablecida con exito");
            window.location.href = '../../view/Login.html';
        }else
        alert("Las contraseñas no coinciden");
    })
})