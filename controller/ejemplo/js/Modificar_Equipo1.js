//declara las variables globales
var formulario = document.getElementById('Equipo1');
var mod=true;

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

        fetch('../../controller/ejemplo/Modificar_Equipo1.php', {
            method: 'POST',
            body: datos
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data === 'exito') {
                const form = document.getElementById('Equipo1');
                form.reset();
                alert("Se han modificado los datos");
                window.location.href = '../../../view/ejemplo/tabla1.html';
            }
        });
    }
})