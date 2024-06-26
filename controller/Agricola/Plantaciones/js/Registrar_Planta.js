//declara las variables globales
var formulario = document.getElementById('advanced-form');

console.log('registro planta');

formulario.addEventListener('submit', function (e)
{
    e.preventDefault();
    var datos= new FormData(formulario);
    
    /* Se envian los datos de formulario para verificar que el nombre de la planta no este siendo utilizado
    en otra planta, en caso de que si mandar una alerta informando esto */
    fetch('../../../controller/Agricola/Plantaciones/php/Verificar_Nombre_Planta.php', {
        method: 'POST',
        body: datos
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data === 'nombreUsado') {
            Formulario = document.getElementById("advanced-form");
            Formulario.nomPlanta.style.border = "5px solid red"; 
            alert("Este nombre de planta ya está registrado actualmente");     
        }
        //si el codigo  no esta siendo utilizado se procede con el registro
        else{
            fetch('../../../controller/Agricola/Plantaciones/php/Registrar_Planta.php', {
                method: 'POST',
                body: datos
            })
        
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data === 'exito') {
                    const form= document.getElementById('advanced-form');
                    form.reset();
                    alert("Registro de planta exitoso");
                    window.location.href = "../../../view/Agricola/Predios/Vista_Plantas.html";

                    
                }
                else {
                    const form= document.getElementById('advanced-form');
                    form.reset();
                    alert("El nombre de la planta ya existe");
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
            window.location.href = "../../../view/Agricola/Predios/Vista_Plantas.html";
            
        }
    });