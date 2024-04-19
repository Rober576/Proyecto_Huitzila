var formulario = document.getElementById('advanced-form');

formulario.addEventListener('submit', function (e)
{
    e.preventDefault();

    var datos= new FormData(formulario);
    fetch('../../controller/Calidad/Modificar_ValoresMinMax.php', {
        method: 'POST',
        body: datos
    })

    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data === 'exito') {
            const form= document.getElementById('advanced-form');
            form.reset();
            alert("Modificacion exitosa");
            window.location.href = '../../view/Calidad/Valores_Min_Max.html';
        }
    })
})


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

