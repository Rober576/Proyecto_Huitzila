function buscar_datos(consulta) {
    var url = '../../../controller/Agricola/Predios/php/Consultar_Predio.php';

    if (consulta !== "") {
        url += '?consulta=' + consulta;
    }

    // Crear una nueva instancia de XMLHttpRequest
    var xhr = new XMLHttpRequest();
    // Configurar la solicitud GET
    xhr.open('GET', url, true);

    // Definir la función de retorno de llamada (callback) para manejar la respuesta
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById("tabla").innerHTML = xhr.responseText;
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
    // Agrega el evento click a cada botón de modificar
    for (var j = 0; j < botonesModificar.length; j++) {
        botonesModificar[j].addEventListener('click', function(e) {
            // Redirige a una URL, por ejemplo:
            window.location.href = "#";
            
            // Imprime la ID del botón en la consola
            console.log("ID del botón:", e.target.id);

            // Realiza el proceso que quieres que se haga
            var id = e.target.id; // Obteniendo la ID del botón

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
                // Convierte el objeto JSON en una cadena de texto y guárdalo en el localStorage
                localStorage.setItem('data', JSON.stringify(data));
                // Redirige a la página Mod_Equipo4.html
                window.location.href = '../../../view/Agricola/Predios/Editar_Predios.html';
            })
            .catch(function(error) {
                console.error('There has been a problem with your fetch operation:', error);
            });
        });
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
