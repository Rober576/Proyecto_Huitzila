document.addEventListener('DOMContentLoaded', function() {
    var selectEspecie = document.getElementById('tipPlanta');
        //OBTENER LOS TIPOS DE PLANTAS REGISTRADOS E INSERTARLOS EN LA COMBO

    fetch('../../../controller/Agricola/Plantaciones/php/Consultar_Tipos_Agave_Y_Predios.php?tipo=especies')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            var option = document.createElement('option');
            option.value = item;
            option.textContent = item;

            if (selectEspecie) {
                selectEspecie.appendChild(option);
            }
        });
        // Después de agregar las especies, agregamos la opción "Agregar nueva planta"
        var optionAgregar = document.createElement('option');
        optionAgregar.value = 'agregar';
        optionAgregar.textContent = 'Agregar nueva planta';
        selectEspecie.appendChild(optionAgregar);
    })
    
    .catch(error => console.error('Error al obtener especies:', error));

  


    //OBTENER LOS PREDIOS REGISTRADOS E INSERTARLOS EN LA COMBO
    var selectPredio = document.getElementById('predioSem');
    fetch('../../../controller/Agricola/Plantaciones/php/Consultar_Tipos_Agave_Y_Predios.php?tipo=predios')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            var option = document.createElement('option');
            option.value = item;
            option.textContent = item;

            if (selectPredio) {
                selectPredio.appendChild(option);
            }
        });
    })
    .catch(error => console.error('Error al obtener predios:', error));
});