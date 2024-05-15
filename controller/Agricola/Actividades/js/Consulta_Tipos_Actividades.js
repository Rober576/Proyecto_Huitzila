document.addEventListener('DOMContentLoaded', function() {
    var predioSelect = document.getElementById('predioSele');
    //OBTENER LOS PREDIOS REGISTRADOS E INSERTARLOS EN LA COMBO
    fetch('../../../controller/Agricola/Actividades/php/Consultar_Tipos_Actividades.php?tipo=predios')
        .then(response => response.json())  
        .then(data => {
            data.forEach(item => {
                var option = document.createElement('option');
                option.value = item.CodigoArea; // Aquí establecemos el value como el código de área
                option.textContent = item.Nombre; // Aquí establecemos el texto visible como el nombre del predio
                if (predioSelect) {
                    predioSelect.appendChild(option);
                }
            });
        })
        .catch(error => console.error('Error al obtener predios:', error));

    var actividadSele = document.getElementById('actividadSele');
    //OBTENER LOS TIPOS DE PLANTAS REGISTRADOS E INSERTARLOS EN LA COMBO

    fetch('../../../controller/Agricola/Actividades/php/Consultar_Tipos_Actividades.php?tipo=actividades')
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



    var selePlaga = document.getElementById('selePlaga');
        //OBTENER LAS PLAGAS REGISTRADOS E INSERTARLOS EN LA COMBO

    fetch('../../../controller/Agricola/Actividades/php/Consultar_Tipos_Actividades.php?tipo=plagas')
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


    var seleHerbicida = document.getElementById('seleHerbicida');
        //OBTENER LAS PLAGAS REGISTRADOS E INSERTARLOS EN LA COMBO

    fetch('../../../controller/Agricola/Actividades/php/Consultar_Tipos_Actividades.php?tipo=herbicidas')
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

    
});


    
