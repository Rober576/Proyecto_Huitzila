document.addEventListener('DOMContentLoaded', function() {
    var id = localStorage.getItem('id');
    var dataString = localStorage.getItem('data');
    var data;

    if (dataString) {
        data = JSON.parse(dataString);

         consultarTiposPlantasYPredios(function() {
            document.getElementById('codPlantacion').value = data['plantacion'].ClavePlantacion;
            document.getElementById('superfPre').value = data['plantacion'].Superficie;
            document.getElementById('canPlan').value = data['plantacion'].CantidadPlantas;
            document.getElementById('fecPlant').value = data['plantacion'].Fecha;

            document.getElementById('tipPlanta').value = data['nombrePlanta'];
        });
    }
});