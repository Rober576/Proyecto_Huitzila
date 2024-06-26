function buscar_datos(consulta) {
    var url = '../../../controller/Agricola/Predios/php/Consultar_Predio.php';

    if (consulta !== "") {
        url += '?consulta=' + consulta;
    }
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            var tabla = document.getElementById("tabla");
            if (tabla) {
                tabla.innerHTML = xhr.responseText;
                EventoVerPlantaciones();
                EventoEliminar();
                EventoNewPlantacion();
                EventoEditar();
            } else {
                console.log("No hay elementos");
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
            var id = e.target.id;
            localStorage.setItem('id', id);
            fetch('../../../controller/Agricola/Predios/php/Modificar_Datos_Predio.php?id=' + id, {
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
                window.location.href = '../../../view/Agricola/Predios/Editar_Predios.html';
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

function EventoVerPlantaciones() {
    var botonesEliminar = document.querySelectorAll(".boton-ver-plantacion");
    for (var j = 0; j < botonesEliminar.length; j++) {
        botonesEliminar[j].addEventListener('click', function(e) {    
            var id = e.target.id;
            window.location.href = '../../../view/Agricola/Predios/Mostrar_Plantaciones.html?predio=' + id;
            
        }
            );
    }
}

function EventoNewPlantacion() {
    var botonesEliminar = document.querySelectorAll(".boton-agragar-plantacion");
    for (var j = 0; j < botonesEliminar.length; j++) {
        botonesEliminar[j].addEventListener('click', function(e) {

            var id = e.target.id;
            console.log("codigo de predio en el js");
            console.log(id);
            window.location.href = '../../../view/Agricola/Predios/Registro_Plantaciones.html?predio=' + id;
            
        });
    }
}





function confirmacion(e, id) {
    // Preguntar al usuario si está seguro de eliminar el registro
    if (confirm('¿Estás seguro de eliminar el registro?')) {
        // Prevenir la acción predeterminada del evento
        e.preventDefault();

        // Realizar la solicitud fetch al script PHP para eliminar el registro
        fetch('../../../controller/Agricola/Predios/php/Eliminar_Predio.php?id=' + id, {
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => {
            alert('Eliminado con éxito');
            location.reload(); // Recargar la página después de eliminar el registro
        })
        .catch(error => {
            console.error('Error al eliminar el registro:', error);
            alert('Imposible eliminar, este predio tiene plantaciones registradas');
        });
    } else {
        // Si el usuario cancela, no se hace nada
    }
}






document.addEventListener("DOMContentLoaded", function() {
    buscar_datos("");
});

document.addEventListener('keyup', function(event) {
    if (event.target.id === 'buscar-txt') {
        var valorBusqueda = event.target.value.trim();
        buscar_datos(valorBusqueda);
    }
});
