function buscar_datos(consulta) {
    var url = '../../controller/Insumos/Mostrar_Mezcal.php';
    console.log("entra al js");
    if (consulta !== "") {
        url += '?consulta=' + consulta;
    }

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            // Insertar los datos dentro del <tbody> del <table>
            document.querySelector("#tablaResultado tbody").innerHTML = xhr.responseText;
        } else {
            console.error("Error al realizar la solicitud:", xhr.statusText);
        }
    };

    xhr.onerror = function() {
        console.error("Error al realizar la solicitud.");
    };

    xhr.send();
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

