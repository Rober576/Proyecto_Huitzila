document.addEventListener('DOMContentLoaded', function() {
    var selectPredio = document.getElementById('predioSele');
    var selectPlanta = document.getElementById('plantacionSele');
    var radioButtons = document.getElementsByName('radioFiltro');

    function obtenerValorRadioSeleccionado() {
        var valorSeleccionado = '';
        radioButtons.forEach(function(radioButton) {
            if (radioButton.checked) {
                valorSeleccionado = radioButton.value;
            }
        });
        return valorSeleccionado;
    }

    function Todos(filtroSeleccionado) {
        var selectedPredioId = selectPredio.value;
        //console.log("ID del predio seleccionado:", selectedPredioId);
        //console.log("Filtro seleccionado:", filtroSeleccionado);

        fetch('../../../controller/Agricola/Actividades/php/Consulta_Plantaciones.php?plantacion=' + selectedPredioId + '&filtro=' + filtroSeleccionado)
        .then(response => response.json())
        .then(data => {
            //console.log("Datos de las plantaciones del predio seleccionado:", data);
            
            selectPlanta.innerHTML = '';

            var defaultOption = document.createElement('option');
            defaultOption.disabled = true;
            defaultOption.hidden = true;
            defaultOption.selected = true;
            defaultOption.textContent = 'Seleccione una opción';
            selectPlanta.appendChild(defaultOption);

            data.forEach(item => {
                var option = document.createElement('option');
                option.value = item.ClavePlantacion;
                option.textContent = item.ClavePlantacion;
                selectPlanta.appendChild(option);
            });
        })
        .catch(error => console.error('Error al obtener datos de las plantaciones:', error));
    }

    function Cosechados(filtroSeleccionado) {
        var selectedPredioId = selectPredio.value;
        //console.log("ID del predio seleccionado:", selectedPredioId);
        ////console.log("Filtro seleccionado:", filtroSeleccionado);
        fetch('../../../controller/Agricola/Actividades/php/Consultar_Plantaciones_Cosechadas.php?plantacion=' + selectedPredioId + '&filtro=' + filtroSeleccionado)
        .then(response => response.json())
        .then(data => {
            //console.log("Datos de las plantaciones del predio seleccionado:", data);
            
            selectPlanta.innerHTML = '';

            var defaultOption = document.createElement('option');
            defaultOption.disabled = true;
            defaultOption.hidden = true;
            defaultOption.selected = true;
            defaultOption.textContent = 'Seleccione una opción';
            selectPlanta.appendChild(defaultOption);

            data.forEach(item => {
                var option = document.createElement('option');
                option.value = item.ClavePlantacion;
                option.textContent = item.ClavePlantacion;
                selectPlanta.appendChild(option);
            });
        })
        .catch(error => console.error('Error al obtener datos de las plantaciones:', error));
    }

    function NoCosechados(filtroSeleccionado) {
        var selectedPredioId = selectPredio.value;
        //console.log("ID del predio seleccionado:", selectedPredioId);
        //console.log("Filtro seleccionado:", filtroSeleccionado);
        fetch('../../../controller/Agricola/Actividades/php/Consulta_Plantaciones_No_Cosechadas.php?plantacion=' + selectedPredioId + '&filtro=' + filtroSeleccionado)
        .then(response => response.json())
        .then(data => {
            //console.log("Datos de las plantaciones del predio seleccionado:", data);
            
            selectPlanta.innerHTML = '';

            var defaultOption = document.createElement('option');
            defaultOption.disabled = true;
            defaultOption.hidden = true;
            defaultOption.selected = true;
            defaultOption.textContent = 'Seleccione una opción';
            selectPlanta.appendChild(defaultOption);

            data.forEach(item => {
                var option = document.createElement('option');
                option.value = item.ClavePlantacion;
                option.textContent = item.ClavePlantacion;
                selectPlanta.appendChild(option);
            });
        })
        .catch(error => console.error('Error al obtener datos de las plantaciones:', error));
    }

    function limpiarTabla() {
        var tabla2 = document.getElementById("tabla");
        while (tabla2.firstChild) {
            tabla2.removeChild(tabla2.firstChild);
        }
    }


    selectPredio.addEventListener('change', function() {
        var filtroSeleccionado = obtenerValorRadioSeleccionado();
        if (filtroSeleccionado === 'Todos') {
            Todos(filtroSeleccionado);
        } else if (filtroSeleccionado === 'Cosechados') {
            Cosechados(filtroSeleccionado);
        } else if (filtroSeleccionado === 'No cosechados') {
            NoCosechados(filtroSeleccionado);
        }
    });

    radioButtons.forEach(function(radioButton) {
        radioButton.addEventListener('change', function() {
            var filtroSeleccionado = obtenerValorRadioSeleccionado();
            //console.log("Filtro sel:", filtroSeleccionado);
            if (filtroSeleccionado === 'Todos') {
                limpiarTabla();
                Todos(filtroSeleccionado);
            } else if (filtroSeleccionado === 'Cosechados') {
                limpiarTabla();
                Cosechados(filtroSeleccionado);
            } else if (filtroSeleccionado === 'No cosechados') {
                limpiarTabla();
                NoCosechados(filtroSeleccionado);
            }


        });
    });
});
