document.addEventListener("DOMContentLoaded", function() {
    // Realiza una solicitud AJAX para obtener los datos del servidor PHP
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var datos = JSON.parse(xhr.responseText);

            // Actualiza las celdas de la tabla con la información obtenida
            document.getElementById("campo1").innerHTML = datos[0].campo1;
            document.getElementById("campo2").innerHTML = datos[0].campo2;
            document.getElementById("campo3").innerHTML = datos[0].campo3;
            document.getElementById("campo4").innerHTML = datos[0].campo4;
            document.getElementById("campo5").innerHTML = datos[0].campo5;
        }
    };

    // Ajusta la URL del script PHP que obtiene los datos
    xhr.open("GET", "../../model/mostrar/equipo2/mostrar.php", true);
    xhr.send();
});
