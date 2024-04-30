document.addEventListener('DOMContentLoaded', function() {
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
});

document.addEventListener('DOMContentLoaded', function() {
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
    })

    .catch(error => console.error('Error al obtener actividades:', error));
});