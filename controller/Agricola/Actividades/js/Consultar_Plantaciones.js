var predioSeleccionado = document.getElementById("predioSele");

document.addEventListener("DOMContentLoaded", function() {
    var plantacionURL = obtenerParametroURL('plantacion');

    if (plantacionURL == null) {
        console.log("no hay");
        cambiarPlantacionesCombo();
        
    } else{
        hayPlantacionEnURL(plantacionURL);

    }

});


predioSeleccionado.addEventListener("change", function() {
    cambiarPlantacionesCombo();
});

function cambiarPlantacionesCombo() {
    var platacionSelect = document.getElementById('platacionSele');
        //OBTENER LAS PLANTACIONES DE UN PREDIO E INSERTARLOS EN LA COMBO

    var predioSeleccionado = document.getElementById("predioSele");
    var valorSeleccionado = predioSeleccionado.value;

    console.log(valorSeleccionado);

    platacionSelect.innerHTML = "";


    fetch('../../../controller/Agricola/Actividades/php/Consultar_Plantaciones.php?plantacion='+valorSeleccionado)
    .then(response => response.json())  
    .then(data => {
        data.forEach(item => {
            var option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            if (platacionSelect) {
                platacionSelect.appendChild(option);
            }
        });
    })

    .catch(error => console.error('Error al obtener plantaciones:', error));

}

function hayPlantacionEnURL(plantacion) {
    console.log(plantacion)
    fetch('../../../controller/Agricola/Actividades/php/Consultar_Predios.php?predio='+plantacion)
    .then(response => response.json())  
    .then(data => {
        data.forEach(item => {
        });

       
        var valorSeleccionado = data[0];
        console.log(valorSeleccionado);

        // Obtén una referencia al elemento select
        var selectElement = document.getElementById("predioSele");

        // Itera sobre las opciones para encontrar la que tiene el valor deseado
        for (var i = 0; i < selectElement.options.length; i++) {
            if (selectElement.options[i].value === valorSeleccionado) {
                // Establece el atributo selected en la opción deseada
                selectElement.options[i].selected = true;
                break;
            }
        }

        cambiarPlantacionesCombo();
    })

    .catch(error => console.error('Error al obtener plantaciones:', error));

}



function obtenerParametroURL(parametro) {
    var parametrosURL = new URLSearchParams(window.location.search);
    return parametrosURL.get(parametro);
  }