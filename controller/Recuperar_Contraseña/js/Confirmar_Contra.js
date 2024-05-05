// Función para obtener el valor del parámetro de la URL
function obtenerValorParametro(nombreParametro) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nombreParametro);
}

// Obtener el valor de los parámetros 'correo' y 'codigo' de la URL
var correo = obtenerValorParametro('parametro1');

// Verificar si se obtuvieron los valores de correo y código
if (correo) {
    // Asignar los valores a los campos del formulario
    document.getElementById('correo').value = correo;
} else {
    console.log('No se proporcionó el correo electrónico.');
}

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