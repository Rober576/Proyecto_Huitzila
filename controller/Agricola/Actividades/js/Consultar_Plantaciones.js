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
        var selectElement = document.getElementById("predioSele");
        for (var i = 0; i < selectElement.options.length; i++) {
            if (selectElement.options[i].value === valorSeleccionado) {
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