document.addEventListener('DOMContentLoaded', function() {
    var selectPlanta = document.getElementById('plantacionSele');

    selectPlanta.addEventListener('change', function() {
        var valorSeleccionado = selectPlanta.value;
        console.log("Valor seleccionado:", valorSeleccionado);
        buscar_datos("", valorSeleccionado);
    });
});

function buscar_datos(consulta, plantacion) {
    var url = '../../../controller/Agricola/Actividades/php/Consultar_Actividad.php';

    if (consulta !== "") {
        url += '?consulta=' + consulta;
    }

    if (plantacion) {
        url += (consulta !== "" ? '&' : '?') + 'plantacion=' + plantacion;
    }
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            var tabla2 = document.getElementById("tabla");
            if (tabla2) {
                tabla2.innerHTML = xhr.responseText;
            } else {
                console.log("elementos");
            }
        } else {
            console.error("Error al realizar la solicitud:", xhr.statusText);
        }
    };

    xhr.send();
}

document.addEventListener('keyup', function(event) {
    if (event.target.id === 'busqueda') {
        var valorBusqueda = event.target.value.trim(); 
        buscar_datos(valorBusqueda, "");
    }
});
