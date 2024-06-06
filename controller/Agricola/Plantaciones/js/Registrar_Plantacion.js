//declara las variables globales
var formulario = document.getElementById('advanced-form');

console.log('registro plantacion');

formulario.addEventListener('submit', function (e)
{
    e.preventDefault();
    var datos= new FormData(formulario);
    
    /* Se envian los datos de formulario para verificar que el código de plantacion no este siendo utilizado
    en otra plantacion, en caso de que si mandar una alerta informando esto */
    fetch('../../../controller/Agricola/Plantaciones/php/Verificar_Codigo_Plantacion.php', {
        method: 'POST',
        body: datos
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data === 'codigoUsado') {
            Formulario = document.getElementById("advanced-form");
            Formulario.codPlantacion.style.border = "5px solid red"; 
            alert("La clave de plantación ya fue registrada anteriormente");     
        }
        //si el codigo no esta siendo utilizado se procede con el registro
        else{
            var predio = obtenerParametroURL('predio');
            console.log(predio);

            if (predio !== null && predio !== ""){
                datos.append('predioSem', predio);
            }

            
            /* datos.forEach((valor, clave) => {
                console.log(`${clave}: ${valor}`);
            }); */
            
            fetch('../../../controller/Agricola/Plantaciones/php/Registrar_Plantacion.php', {
                method: 'POST',
                body: datos
            })
        
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data === 'exito') {
                    const form= document.getElementById('advanced-form');
                    form.reset();
                    alert("Registro de plantación exitoso");
                    window.location.href = "../../../view/Agricola/Predios/Vista_Predios.html";

                    
                }
                else{
                    const form= document.getElementById('advanced-form');
                    form.reset();
                    alert("ERROR AL REGISTRAR");
                    window.location.href = "../../../view/Agricola/Predios/Vista_Predios.html";
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
            window.location.href = "../../../view/Agricola/Predios/Vista_Predios.html";
            
        }
    });


    function obtenerParametroURL(parametro) {
        var parametrosURL = new URLSearchParams(window.location.search);
        return parametrosURL.get(parametro);
      }