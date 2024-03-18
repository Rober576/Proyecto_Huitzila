//declara las variables globales
var formulario = document.getElementById('advanced-form');

console.log('registro predio');

formulario.addEventListener('submit', function (e)
{
    e.preventDefault();
    var datos= new FormData(formulario);
    
    /* Se envian los datos de formulario para verificar que el código del predio no este siendo utilizado
    en otro predio, en caso de que si mandar una alerta informando esto */
    fetch('../../../controller/Agricola/Predios/php/Verificar_Codigo_Predio.php', {
        method: 'POST',
        body: datos
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data === 'codigoUsado') {
            Formulario = document.getElementById("advanced-form");
            Formulario.codArea.style.border = "5px solid red"; 
            alert("La clave del predio ya fue registrada anteriormente");     
        }
        //si el codigo de predio no esta siendo utilizado se procede con el registro
        else{
            fetch('../../../controller/Agricola/Predios/php/Registrar_Predio.php', {
                method: 'POST',
                body: datos
            })
        
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data === 'exito') {
                    const form= document.getElementById('advanced-form');
                    form.reset();
                    alert("Registro de predio exitoso");
                    window.location.href = "../../../view/Agricola/Predios/Vista_Predios.html";

                    
                }
            })
        }
    })
})