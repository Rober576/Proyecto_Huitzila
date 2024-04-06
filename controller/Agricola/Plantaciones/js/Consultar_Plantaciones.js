function buscar_datos2(consulta) {
    var url = '../../../controller/Agricola/Plantaciones/php/Consultar_Plantaciones.php';
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
            
            var id = e.target.id;
         
        }
            );
    }
}







function confirmarEliminacion(id) {
    // Preguntar al usuario si está seguro de eliminar el registro
    if (confirm('¿Estás seguro de eliminar la plantación?')) {
        // Realizar la solicitud fetch al script PHP para eliminar el registro
        fetch('../../../controller/Agricola/Plantaciones/php/Eliminar_Plantacion.php?id=' + id, {
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => {
            alert('Eliminado con éxito');
            location.reload(); // Recargar la página después de eliminar el registro
        })
        .catch(error => {
            console.error('Error al eliminar el registro:', error);
            alert('Error al eliminar el registro. Por favor, intenta de nuevo más tarde.');
        });
    } else {
        // Si el usuario cancela, no se hace nada
    }
}

function EventoEliminarP() {
    var botonesEliminar = document.querySelectorAll(".boton-eliminarP");
    for (var j = 0; j < botonesEliminar.length; j++) {
        botonesEliminar[j].addEventListener('click', function(e) {
            var id = e.target.id;
            confirmarEliminacion(id);
        });
    }
}

// Llamar a EventoEliminarP() en el evento "DOMContentLoaded"
document.addEventListener("DOMContentLoaded", function() {
    buscar_datos2("");
});

document.addEventListener('keyup', function(event) {
    if (event.target.id === 'busqueda') {
        var valorBusqueda = event.target.value.trim(); 
        buscar_datos2(valorBusqueda);
    }
});
