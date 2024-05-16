document.addEventListener('DOMContentLoaded', function() {
    var selectPredio = document.getElementById('predioSele');
    
    
    fetch('../../../controller/Agricola/Actividades/php/Consulta_Predios.php?predio=predios')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            var option = document.createElement('option');
            option.value = item.ClaveArea; 
            option.textContent = item.Nombre; 

            if (selectPredio) {
                selectPredio.appendChild(option);
            }
        });
    })
    .catch(error => console.error('Error al obtener predios:', error));
});
