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
            e.preventDefault(); // Previene la acción predeterminada del botón

            var selectPlanta = document.getElementById('plantacionSele');
            var id = e.target.id;
            var valorSeleccionado = selectPlanta.value;

            console.log("Plantacion:", valorSeleccionado);
            console.log("Actividad:", id);

            localStorage.setItem('id', id);
            localStorage.setItem('plantacion', valorSeleccionado);

            var url = '../../../controller/Agricola/Actividades/php/Modificar_Datos_Actividades.php?id=' + id + '&plantacion=' + valorSeleccionado;

            fetch(url, {
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
                window.location.href = '../../../view/Agricola/Actividades/Editar_actividades.html';
            })
            .catch(function(error) {
                console.error('There has been a problem with your fetch operation:', error);
            });

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
            console.log(" Eliminar Plantacion:", valorSeleccionado);
            console.log(" Eliminar Actividad:", id)
            confirmacion(e,id,valorSeleccionado);
        });
    }
}



function confirmacion(e, id, valorSeleccionado) {
    // Preguntar al usuario si está seguro de eliminar el registro
    if (confirm('¿Estás seguro de eliminar el registro?')) {
        // Prevenir la acción predeterminada del evento
        e.preventDefault();

        // Realizar la solicitud fetch al script PHP para eliminar el registro
        fetch(`../../../controller/Agricola/Actividades/php/Eliminar_Actividades.php?id=${id}&valorSeleccionado=${valorSeleccionado}`, {
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

function EventoVerMas() {
    var botonesModificar = document.querySelectorAll(".boton-vermas");
    for (var j = 0; j < botonesModificar.length; j++) {
        botonesModificar[j].addEventListener('click', function(e) {
            e.preventDefault(); // Previene la acción predeterminada del botón

            var selectPlanta = document.getElementById('plantacionSele');
            var id = e.target.id;
            var valorSeleccionado = selectPlanta.value;

            console.log("Plantacion:", valorSeleccionado);
            console.log("Actividad:", id);

            localStorage.setItem('id', id);
            localStorage.setItem('plantacion', valorSeleccionado);

            var url = '../../../controller/Agricola/Actividades/php/Modificar_Datos_Actividades.php?id=' + id + '&plantacion=' + valorSeleccionado;

            fetch(url, {
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
                window.location.href = '../../../view/Agricola/Actividades/Especificacion_de_actividad.html';
            })
            .catch(function(error) {
                console.error('There has been a problem with your fetch operation:', error);
            });

        });
    }
}

document.addEventListener('keyup', function(event) {
    if (event.target.id === 'busqueda') {
        var valorBusqueda = event.target.value.trim(); 
        buscar_datos(valorBusqueda, "");
    }
});
