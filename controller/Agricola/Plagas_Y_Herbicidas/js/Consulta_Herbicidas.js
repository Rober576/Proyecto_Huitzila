function buscar_datos(consulta) {
    var url = '../../../controller/Agricola/Plagas_Y_Herbicidas/php/Consulta_Hierbicida.php';

    if (consulta !== "") {
        url += '?consulta=' + consulta;
    }
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById("tabla").innerHTML = xhr.responseText;
            EventoEliminar();
            EventoEditar();
        } else {
            console.error("Error al realizar la solicitud:", xhr.statusText);
        }
    };

    xhr.onerror = function() {
        console.error("Error al realizar la solicitud.");
    };


    xhr.send();
}

function EventoEditar() {
    var botonesModificar = document.querySelectorAll(".boton-modificar");
    for (var j = 0; j < botonesModificar.length; j++) {
        botonesModificar[j].addEventListener('click', function(e) {
            window.location.href = "#";
            var id = e.target.id;
            console.log(id)
            
        });
    }
}


function EventoEliminar() {
    var botonesEliminar = document.querySelectorAll(".boton-eliminar");
    for (var j = 0; j < botonesEliminar.length; j++) {
        botonesEliminar[j].addEventListener('click', function(e) {
            var id = e.target.id;
            console.log(id)
        }
            );
    }
}







document.addEventListener("DOMContentLoaded", function() {
    buscar_datos("");
});

document.addEventListener('keyup', function(event) {
    if (event.target.id === 'busqueda') {
        var valorBusqueda = event.target.value.trim(); 
        buscar_datos(valorBusqueda);
    }
});
