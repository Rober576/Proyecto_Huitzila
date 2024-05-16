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
                EventoEditar();
                EventoEliminar();
                EventoVerMas();
                
            } else {
                console.log("elementos");
            }
        } else {
            console.error("Error al realizar la solicitud:", xhr.statusText);
        }
    };

    xhr.send();
}

function EventoEditar() {
    var botonesModificar = document.querySelectorAll(".boton-modificar");
    for (var j = 0; j < botonesModificar.length; j++) {
        botonesModificar[j].addEventListener('click', function(e) {
            window.location.href = "#";
            var selectPlanta = document.getElementById('plantacionSele');
            var id = e.target.id;
            var valorSeleccionado = selectPlanta.value;
            console.log("Plantacion:", valorSeleccionado);
            console.log("Actividad:", id)
        });
    }
}

function EventoEliminar() {
    var botonesModificar = document.querySelectorAll(".boton-eliminar");
    for (var j = 0; j < botonesModificar.length; j++) {
        botonesModificar[j].addEventListener('click', function(e) {
            window.location.href = "#";
            var selectPlanta = document.getElementById('plantacionSele');
            var id = e.target.id;
            var valorSeleccionado = selectPlanta.value;
            console.log("Plantacion:", valorSeleccionado);
            console.log("Actividad:", id)
        });
    }
}

function EventoVerMas() {
    var botonesModificar = document.querySelectorAll(".boton-vermas");
    for (var j = 0; j < botonesModificar.length; j++) {
        botonesModificar[j].addEventListener('click', function(e) {
            window.location.href = "#";
            var selectPlanta = document.getElementById('plantacionSele');
            var id = e.target.id;
            var valorSeleccionado = selectPlanta.value;
            console.log("Plantacion:", valorSeleccionado);
            console.log("Actividad:", id)
        });
    }
}

document.addEventListener('keyup', function(event) {
    if (event.target.id === 'busqueda') {
        var valorBusqueda = event.target.value.trim(); 
        buscar_datos(valorBusqueda, "");
    }
});
