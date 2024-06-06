//declara las variables globales
var formulario = document.getElementById('advanced-form');
var mod=true;
console.log("si")
function getParameterByName(name) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var idFromURL = getParameterByName('id');
document.getElementById('inputId').value = idFromURL;

formulario.addEventListener('submit', function (e)
{
    e.preventDefault();


    if (e.submitter.id === 'submitButton') {
        var datos = new FormData(formulario);

        fetch('../../controller/Usuarios/Modificar_Usuarios.php', {
            method: 'POST',
            body: datos
        })
        
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data === 'exito') {
                const form = document.getElementById('advanced-form');
                form.reset();
                alert("Se han modificado los datos");
                
                window.location.href = '../../view/Usuarios/Mostrar_Usuarios.html';
            } else if(data==='corre') {
                alert("El correo ya fue utilizado");
            }
        });
    }
})