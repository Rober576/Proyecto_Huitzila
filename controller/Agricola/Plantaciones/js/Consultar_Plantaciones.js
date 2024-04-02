function buscar_datos2(consulta) {
    var url = '../../../controller/Agricola/Plantaciones/php/Consultar_Plantaciones.php';
    console.log("entro");

    if (consulta !== "") {
        url += '?consulta=' + consulta;
    }
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById("tabla2").innerHTML = xhr.responseText;
            EventoEliminarP();
            EventoEditarP();
        } else {
            console.error("Error al realizar la solicitud:", xhr.statusText);
        }
    };

    xhr.onerror = function() {
        console.error("Error al realizar la solicitud.");
    };


    xhr.send();
}

function EventoEditarP() {
    var botonesModificar = document.querySelectorAll(".boton-modificarP");
    for (var j = 0; j < botonesModificar.length; j++) {
        botonesModificar[j].addEventListener('click', function(e) {
            window.location.href = "#";
            var id = e.target.id;
            console.log(id);
        });
    }
}

function EventoEliminarP() {
    var botonesModificar = document.querySelectorAll(".boton-eliminarP");
    for (var j = 0; j < botonesModificar.length; j++) {
        botonesModificar[j].addEventListener('click', function(e) {
            window.location.href = "#";
            var id = e.target.id;
            console.log(id);
        });
    }
}



document.addEventListener("DOMContentLoaded", function() {
    buscar_datos2("");
});

document.addEventListener('keyup', function(event) {
    if (event.target.id === 'busqueda') {
        var valorBusqueda = event.target.value.trim(); 
        buscar_datos2(valorBusqueda);
    }
});
