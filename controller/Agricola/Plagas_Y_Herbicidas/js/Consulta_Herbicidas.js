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
            localStorage.setItem('id', id);
            fetch('../../../controller/Agricola/Plagas_Y_Herbicidas/php/Modificar_Datos_Herbicidas.php?id=' + id, {
                method: 'GET',
            })
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); 
            })
            .then(function(data) {
                localStorage.setItem('data', JSON.stringify(data));
                window.location.href = '../../../view/Agricola/Plagas_y_herbicidas/Editar_Herbicidas.html';
            })
            .catch(function(error) {
                console.error('There has been a problem with your fetch operation:', error);
            });
        });
    }
}




function EventoEliminar() {
    var botonesEliminar = document.querySelectorAll(".boton-eliminar");
    for (var j = 0; j < botonesEliminar.length; j++) {
        botonesEliminar[j].addEventListener('click', function(e) {
            
            var id = e.target.id;
            confirmacion(e,id);
        }
            );
    }
}

function confirmacion(e, id) {
    // Preguntar al usuario si está seguro de eliminar el registro
    if (confirm('¿Estás seguro de eliminar el registro?')) {
        // Prevenir la acción predeterminada del evento
        e.preventDefault();

        // Realizar la solicitud fetch al script PHP para eliminar el registro
        fetch('../../../controller/Agricola/Plagas_Y_Herbicidas/php/Eliminar_Herbicidas.php?id=' + id, {
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






document.addEventListener("DOMContentLoaded", function() {
    buscar_datos("");
});

document.addEventListener('keyup', function(event) {
    if (event.target.id === 'busqueda') {
        var valorBusqueda = event.target.value.trim(); 
        buscar_datos(valorBusqueda);
    }
});
