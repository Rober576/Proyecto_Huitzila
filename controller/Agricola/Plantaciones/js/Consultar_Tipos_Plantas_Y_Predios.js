function consultarTiposPlantasYPredios(callback) {
    var selectEspecie = document.getElementById('tipPlanta');
    var selectPredio = document.getElementById('predioSem');

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

        var optionAgregar = document.createElement('option');
        optionAgregar.value = 'agregar';
        optionAgregar.textContent = 'Agregar nueva planta';
        selectEspecie.appendChild(optionAgregar);

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

                    callback();
        })
        .catch(error => console.error('Error al obtener predios:', error));
    })
    .catch(error => console.error('Error al obtener especies:', error));
}