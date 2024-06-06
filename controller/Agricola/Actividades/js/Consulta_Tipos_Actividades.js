// Define una función para inicializar las opciones en los selects
function inicializarSelects() {
    var predioSelect = document.getElementById('predioSele');
    var actividadSele = document.getElementById('actividadSele');
    var selePlaga = document.getElementById('selePlaga');
    var seleHerbicida = document.getElementById('seleHerbicida');

    // Fetch predios
    let fetchPredios = fetch('../../../controller/Agricola/Actividades/php/Consultar_Tipos_Actividades.php?tipo=predios')
        .then(response => response.json())  
        .then(data => {
            data.forEach(item => {
                var option = document.createElement('option');
                option.value = item.CodigoArea; 
                option.textContent = item.Nombre; 
                if (predioSelect) {
                    predioSelect.appendChild(option);
                }
            });
        })
        .catch(error => console.error('Error al obtener predios:', error));

    // Fetch actividades
    let fetchActividades = fetch('../../../controller/Agricola/Actividades/php/Consultar_Tipos_Actividades.php?tipo=actividades')
        .then(response => response.json())  
        .then(data => {
            data.forEach(item => {
                var option = document.createElement('option');
                option.value = item;
                option.textContent = item;
                if (actividadSele) {
                    actividadSele.appendChild(option);
                }
            });
        })
        .catch(error => console.error('Error al obtener actividades:', error));

    // Fetch plagas
    let fetchPlagas = fetch('../../../controller/Agricola/Actividades/php/Consultar_Tipos_Actividades.php?tipo=plagas')
        .then(response => response.json())  
        .then(data => {
            data.forEach(item => {
                var option = document.createElement('option');
                option.value = item;
                option.textContent = item;
                if (selePlaga) {
                    selePlaga.appendChild(option);
                }
            });

            var optionAgregar = document.createElement('option');
            optionAgregar.value = 'agregar';
            optionAgregar.textContent = 'Agregar nueva plaga';
            selePlaga.appendChild(optionAgregar);
        })
        .catch(error => console.error('Error al obtener plagas:', error));

    // Fetch herbicidas
    let fetchHerbicidas = fetch('../../../controller/Agricola/Actividades/php/Consultar_Tipos_Actividades.php?tipo=herbicidas')
        .then(response => response.json())  
        .then(data => {
            data.forEach(item => {
                var option = document.createElement('option');
                option.value = item;
                option.textContent = item;
                if (seleHerbicida) {
                    seleHerbicida.appendChild(option);
                }
            });

            var optionAgregar = document.createElement('option');
            optionAgregar.value = 'agregar';
            optionAgregar.textContent = 'Agregar nuevo herbicida';
            seleHerbicida.appendChild(optionAgregar);
        })
        .catch(error => console.error('Error al obtener herbicidas:', error));

    // Esperar a que todas las peticiones fetch se completen
    return Promise.all([fetchPredios, fetchActividades, fetchPlagas, fetchHerbicidas]);
}

inicializarSelects()