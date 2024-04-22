var formulario = document.getElementById('advanced-form');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener los valores mínimo y máximo
    var min_alcohol_value = parseFloat(min_alcohol.value);
    var max_alcohol_value = parseFloat(max_alcohol.value);

    // Verificar si el valor mínimo es mayor que el valor máximo
    if (min_alcohol_value > max_alcohol_value) {
        alert("El valor mínimo no puede ser mayor que el valor máximo para el alcohol.");
        return; // Detener el envío del formulario
    } else if (min_alcohol_value === max_alcohol_value) {
        alert("Los valores mínimo y máximo para el alcohol no pueden ser iguales.");
        return; // Detener el envío del formulario
    }

    var min_ext_seco_value = parseFloat(min_ext_seco.value);
    var max_ext_seco_value = parseFloat(max_ext_seco.value);

    // Verificar si el valor mínimo es mayor que el valor máximo
    if (min_ext_seco_value > max_ext_seco_value) {
        alert("El valor mínimo no puede ser mayor que el valor máximo para el extracto seco.");
        return; // Detener el envío del formulario
    } else if (min_ext_seco_value === max_ext_seco_value) {
        alert("Los valores mínimo y máximo para el extracto seco no pueden ser iguales.");
        return; // Detener el envío del formulario
    }
    // Obtener los valores mínimo y máximo del metanol
    var min_metanol_value = parseFloat(min_metanol.value);
    var max_metanol_value = parseFloat(max_metanol.value);

    // Verificar si el valor mínimo es mayor que el valor máximo
    if (min_metanol_value > max_metanol_value) {
        alert("El valor mínimo no puede ser mayor que el valor máximo para el metanol.");
        return; // Detener el envío del formulario
    } else if (min_metanol_value === max_metanol_value) {
        alert("Los valores mínimo y máximo para el metanol no pueden ser iguales.");
        return; // Detener el envío del formulario
    }

    // Obtener los valores mínimo y máximo de los aldehídos
    var min_aldehidos_value = parseFloat(min_aldehidos.value);
    var max_aldehidos_value = parseFloat(max_aldehidos.value);

    // Verificar si el valor mínimo es mayor que el valor máximo
    if (min_aldehidos_value > max_aldehidos_value) {
        alert("El valor mínimo no puede ser mayor que el valor máximo para los aldehídos.");
        return; // Detener el envío del formulario
    } else if (min_aldehidos_value === max_aldehidos_value) {
        alert("Los valores mínimo y máximo para los aldehídos no pueden ser iguales.");
        return; // Detener el envío del formulario
    }

    var min_furfural_value = parseFloat(min_furfural.value);
    var max_furfural_value = parseFloat(max_furfural.value);

    // Verificar si el valor mínimo es mayor que el valor máximo
    if (min_furfural_value > max_furfural_value) {
        alert("El valor mínimo no puede ser mayor que el valor máximo para el furfural.");
        return; // Detener el envío del formulario
    } else if (min_furfural_value === max_furfural_value) {
        alert("Los valores mínimo y máximo para el furfural no pueden ser iguales.");
        return;
    }



    
    var datos = new FormData(formulario);
    fetch('../../controller/Calidad/Modificar_ValoresMinMax.php', {
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
            window.location.href = '../../view/Calidad/Valores_Min_Max.html';
        }
    })
});

// Resto del código para obtener y asignar valores omitido por brevedad...



var min_alcohol = document.getElementById('min_alcohol');
var max_alcohol = document.getElementById('max_alcohol');
var min_ext_seco = document.getElementById('min_ext_seco');
var max_ext_seco = document.getElementById('max_ext_seco');
var min_metanol = document.getElementById('min_metanol');
var max_metanol = document.getElementById('max_metanol');
var min_alc_sup = document.getElementById('min_alc_sup');
var max_alc_sup = document.getElementById('max_alc_sup');
var min_aldehidos = document.getElementById('min_aldehidos');
var max_aldehidos = document.getElementById('max_aldehidos');
var min_furfural = document.getElementById('min_furfural');
var max_furfural = document.getElementById('max_furfural');
var max_plomo = document.getElementById('max_plomo');
var max_arsenico = document.getElementById('max_arsenico');

fetch('../../controller/Calidad/Obtener_Datos_Calidad.php?tipo=minmax')
.then(response => response.json())
.then(data => {
    data.forEach(item => {
        min_alcohol.value = item['ALCVolMin'];
        max_alcohol.value = item['ALCVolMax'];
        min_ext_seco.value = item['ExtractoSecoMin'];
        max_ext_seco.value = item['ExtractoSecoMax'];
        min_metanol.value = item['MetanolMin'];
        max_metanol.value = item['MetanolMax'];
        min_alc_sup.value = item['AlcoholesSuperioresMin'];
        max_alc_sup.value = item['AlcoholesSuperioresMax'];
        min_aldehidos.value = item['AldehidosMin'];
        max_aldehidos.value = item['AldehidosMax'];
        min_furfural.value = item['FurfuralMin'];
        max_furfural.value = item['FurfuralMax'];
        max_plomo.value = item['PlomoMax'];
        max_arsenico.value = item['ArsenicoMax'];
    });
})
.catch(error => console.error('Error al obtener categorías:', error));

