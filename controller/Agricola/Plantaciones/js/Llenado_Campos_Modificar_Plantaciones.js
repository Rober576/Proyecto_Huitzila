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
            document.getElementById('nomTraba').value = data['plantacion'].NombreTrabajador;
            document.getElementById('datVec').value = data['plantacion'].DatosVehiculo;
            document.getElementById('costGas').value = data['plantacion'].CostoGasolina;
            document.getElementById('cosMate').value = data['plantacion'].CostoMaterial;
            document.getElementById('fecIni').value = data['plantacion'].FechaInicio;
            document.getElementById('fecFin').value = data['plantacion'].FechaFinal;

       
            document.getElementById('tipPlanta').value = data['nombrePlanta'];
        });
    }
});