function buscar_datos(consulta) {
    var url = '../../controller/Produccion/Mostrar_Bitacora.php';

    if (consulta !== "") {
        url += '?consulta=' + consulta;
    }

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById("tabla_Bit").innerHTML = xhr.responseText;
            agregarEventosEliminar();
            agregarEventosEditar();
        } else {
            console.error("Error al realizar la solicitud:", xhr.statusText);
        }
    };

    xhr.onerror = function() {
        console.error("Error al realizar la solicitud.");
    };

    xhr.send();
}

function agregarEventosEliminar() {
    var botonesEliminar = document.querySelectorAll(".boton-eliminar");

    for (var i = 0; i < botonesEliminar.length; i++) {
        botonesEliminar[i].addEventListener('click', function(e) {
            e.preventDefault();
            var Guia = this.dataset.id;
            console.log("Valor de Guia:", Guia);

            if (confirm('¿Estás seguro de eliminar el registro?')) {
                fetch('../../controller/Produccion/Eliminar_Bitacora.php?id=' + Guia, {
                        method: 'GET',
                    })
                    .then(res => res.json())
                    .then(data => {
                        alert(data);
                        location.reload();
                    });
            }
        });
    }
}

function agregarEventosEditar() {
    var botonesModificar = document.querySelectorAll(".boton-modificar");

    for (var j = 0; j < botonesModificar.length; j++) {
        botonesModificar[j].addEventListener('click', function(e) {
            window.location.href = "#";
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    buscar_datos("");
});

document.addEventListener("DOMContentLoaded", function() {
    var buscarInput = document.getElementById('buscar-txt');
    if (buscarInput) {
        buscarInput.addEventListener('input', function(event) {
            var valorBusqueda = event.target.value.trim(); 
            buscar_datos(valorBusqueda);
        });
    }
});


