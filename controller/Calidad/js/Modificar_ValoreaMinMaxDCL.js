var formulario = document.getElementById('advanced-form');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    var porcentaje_alcohol_min_value = parseFloat(porcentaje_alcohol_min.value);
    var porcentaje_alcohol_max_value = parseFloat(porcentaje_alcohol_max.value);

    if (porcentaje_alcohol_min_value > porcentaje_alcohol_max_value) {
        alert("El valor mínimo no puede ser mayor que el valor máximo para el alcohol.");
        return; 
    } else if (porcentaje_alcohol_min_value === porcentaje_alcohol_max_value) {
        alert("Los valores mínimo y máximo para el alcohol no pueden ser iguales.");
        return; 
    }

    var metanol_min_value = parseFloat(metanol_min.value);
    var metanol_max_value = parseFloat(metanol_max.value);

    if (metanol_min_value > metanol_max_value) {
        alert("El valor mínimo no puede ser mayor que el valor máximo para el metanol");
        return; 
    } else if (metanol_min_value === metanol_max_value) {
        alert("Los valores mínimo y máximo para el metanol no pueden ser iguales.");
        return; 
    }
    
   
    var datos = new FormData(formulario);
    fetch('../../controller/Calidad/Modificar_ValoresMinMaxDCL.php', {
        method: 'POST',
        body: datos
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data === 'exito') {
            const form = document.getElementById('advanced-form');
            form.reset();
            alert("Modificacion exitosa");
            window.location.href = '../../view/Calidad/Mostrar_DCL.html';
        }
    })
});

var porcentaje_alcohol_min = document.getElementById('min_alcohol');
var porcentaje_alcohol_max = document.getElementById('max_alcohol');
var metanol_min = document.getElementById('min_metanol');
var metanol_max = document.getElementById('max_metanol');
var alcoholes_superiores_min = document.getElementById('min_alc_sup');

fetch('../../controller/Calidad/Obtener_Datos_Calidad.php?tipo=minmaxDCL')
.then(response => response.json())
.then(data => {
    data.forEach(item => {
        porcentaje_alcohol_min.value = item['PorcentajeAlcoholMin'];
        porcentaje_alcohol_max.value = item['PorcentajeAlcoholMax'];
        metanol_min.value = item['MetanolMin'];
        metanol_max.value = item['MetanolMax'];
        alcoholes_superiores_min.value = item['AlcoholesSuperioresMin'];
    });
})
.catch(error => console.error('Error al obtener categorías:', error));

