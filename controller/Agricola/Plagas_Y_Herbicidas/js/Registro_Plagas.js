//declara las variables globales
var formulario = document.getElementById('advanced-form');

console.log('registro plaga');

formulario.addEventListener('submit', function (e)
{
    e.preventDefault();
    var datos= new FormData(formulario);
    
    /* Se envian los datos de formulario para verificar que el nombre de la plaga no este siendo utilizado
    en otra planta, en caso de que si mandar una alerta informando esto */
    fetch('../../../controller/Agricola/Plagas_Y_Herbicidas/php/Verificar_Codigo_Plaga.php', {
        method: 'POST',
        body: datos
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data === 'codigoUsado') {
            Formulario = document.getElementById("advanced-form");
            Formulario.nomPlaga.style.border = "5px solid red"; 
            alert("Este nombre de plaga ya está registrado actualmente");     
        }
        //si el codigo  no esta siendo utilizado se procede con el registro
        else{
            fetch('../../../controller/Agricola/Plagas_Y_Herbicidas/php/Registrar_Plaga.php', {
                method: 'POST',
                body: datos
            })
        
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data === 'exito') {
                    const form= document.getElementById('advanced-form');
                    form.reset();
                    alert("Registro de plaga exitoso");
                    window.location.href = "../../../view/Agricola/Plagas_y_Herbicidas/Vista_Plagas.html";

                    
                }
            })
        }
    })
})


var cancelButton = document.getElementById("cancelButton");

    // Agregar un event listener para el evento 'click'
    cancelButton.addEventListener("click", function() {
        // Mostrar una alerta
        var confirmar = confirm("¿Estás seguro de cancelar el registro?");
        
        // Si el usuario confirma la acción
        if (confirmar) {
            // Obtener el formulario por su ID
            var formulario1 = document.getElementById("advanced-form"); 
            
            // Limpiar los campos del formulario
            formulario1.reset();
            window.location.href = "../../../view/Agricola/Plagas_y_Herbicidas/Vista_Plagas.html";
            
        }
    });