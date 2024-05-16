document.addEventListener('DOMContentLoaded', function() {
    // Obtener el elemento select
    var selectPredio = document.getElementById('predioSele');
    
    // Realizar la solicitud fetch
    
    fetch('../../../controller/Agricola/Actividades/php/Consulta_Predios.php?predio=predios')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            // Crear una opción con el nombre del predio como texto y la clave de área como valor
            var option = document.createElement('option');
            option.value = item.ClaveArea; // Asignar la clave de área como valor
            option.textContent = item.Nombre; // Asignar el nombre del predio como texto

            // Agregar la opción al select
            if (selectPredio) {
                selectPredio.appendChild(option);
            }
        });
    })
    .catch(error => console.error('Error al obtener predios:', error));
});
