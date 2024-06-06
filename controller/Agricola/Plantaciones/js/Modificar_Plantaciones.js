//declara las variables globales
var formulario = document.getElementById('advanced-form');

console.log('modificacion plantacion');

formulario.addEventListener('submit', function (e)
{
    e.preventDefault();
    var datos= new FormData(formulario);
    
    /* Se envian los datos de formulario para verificar que el código de plantacion no este siendo utilizado
    en otra plantacion, en caso de que si mandar una alerta informando esto */
   

    fetch('../../../controller/Agricola/Plantaciones/php/Modificar_Plantacion.php', {
        method: 'POST',
        body: datos
    })

    .then(res => res.json())
    .then(data => {
        console.log("ini");
        console.log(data);
        console.log("fin");
        if (data === 'exito') {
            const form= document.getElementById('advanced-form');
            form.reset();
            alert("Modificación de plantación exitoso");
            window.location.href = "../../../view/Agricola/Predios/Vista_Predios.html";
            

            
        }
    })
        
    
})


var cancelButton = document.getElementById("cancelButton");

    // Agregar un event listener para el evento 'click'
    cancelButton.addEventListener("click", function() {
        // Mostrar una alerta
        var confirmar = confirm("¿Estás seguro de cancelar la modificacion?");
        
        // Si el usuario confirma la acción
        if (confirmar) {
            // Obtener el formulario por su ID
            var formulario1 = document.getElementById("advanced-form"); 
            
            // Limpiar los campos del formulario
            formulario1.reset();
            window.location.href = "../../../view/Agricola/Predios/Vista_Predios.html";
            
        }
    });