document.addEventListener('DOMContentLoaded', function () {
    // Obtener el ID del URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    // Realizar una solicitud AJAX para obtener los datos del registro
    fetch(`../../controller/ejemplo/obtener_registro2.php?id=${id}`)
        .then(response => response.json())
        .then(data => {
            // Llenar los campos del formulario con los datos obtenidos
            console.log(data)
            document.getElementById('campo1').value = data.campo1;
            document.getElementById('campo2').value = data.campo2;
            document.getElementById('campo3').value = data.campo3;
            document.getElementById('campo4').value = data.campo4;
            document.getElementById('campo5').value = data.campo5;
        });
});
