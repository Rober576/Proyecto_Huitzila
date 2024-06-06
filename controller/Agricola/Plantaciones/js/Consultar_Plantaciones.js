function buscar_datos2(consulta) {
    var url = '../../../controller/Agricola/Plantaciones/php/Consultar_Plantaciones.php';
    if (consulta !== "") {
        url += '?consulta=' + consulta;
    }
    // Obtener el valor de predio si está presente en la URL
    var urlParams = new URLSearchParams(window.location.search);
    var predio = urlParams.get('predio');
    // Incluir predio en la URL si está definido
    if (predio) {
        url += (consulta !== "" ? '&' : '?') + 'predio=' + predio;
    }
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            var tabla2 = document.getElementById("tabla2");
            if (tabla2) {
                tabla2.innerHTML = xhr.responseText;
                EventoActividad();
                EventoEliminarP();
                EventoEditarP();
            } else {
                console.log("elementos");
            }
        } else {
            console.error("Error al realizar la solicitud:", xhr.statusText);
        }
    };


    xhr.send();
}

function EventoEditarP() {
    var botonesModificar = document.querySelectorAll(".boton-modificarP");
    for (var j = 0; j < botonesModificar.length; j++) {
        botonesModificar[j].addEventListener('click', function(e) {
            window.location.href = "#";
            var id = e.target.id;
            localStorage.setItem('id', id);
            fetch('../../../controller/Agricola/Plantaciones/php/Modificar_Datos_Plantacion.php?id=' + id, {
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
                window.location.href = '../../../view/Agricola/Predios/Editar_Plantaciones.html';
            })
            .catch(function(error) {
                console.error('There has been a problem with your fetch operation:', error);
            });
        });
    }
}


function EventoActividad() {
    var botonesModificar = document.querySelectorAll(".boton-RegistroA");
    for (var j = 0; j < botonesModificar.length; j++) {
        botonesModificar[j].addEventListener('click', function(e) {
            var id = e.target.id;
            console.log(id)
            window.location.href = '../../../view/Agricola/Actividades/Registro_de_actividades.html?plantacion=' + id;
        });
    }
}


function verificarEliminacion(id) {
    fetch('../../../controller/Agricola/Plantaciones/php/Verificar_Plantacion.php?id=' + id, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => {
            if (data.registroExiste) {
                // El registro existe, no hacemos nada más
                alert('Imposible eliminar plantación, tiene actividades registradas.');
            } else {
                // El registro no existe, llamamos a otra función
                confirmarEliminacion(id);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
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
            verificarEliminacion(id);
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
