// Selecciona todos los enlaces de obtener información
var linkObtenerInfo = document.querySelectorAll(".table_item__link.obtener-informacion");

console.log(linkObtenerInfo);

// Agrega el evento click a cada enlace de obtener información
for (var i = 0; i < linkObtenerInfo.length; i++) {
    linkObtenerInfo[i].addEventListener('click', function(e) {
        e.preventDefault();
        var id = this.getAttribute('data-id');
        console.log(id);

        // Realiza una solicitud fetch para enviar el ID a un script PHP
        fetch('../../controller/ejemplo/Modificar2_Equipo4.php?id=' + id, {
            method: 'GET',
        })
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parsea la respuesta como JSON
        })
        .then(function(data) {
            // Maneja la respuesta del PHP
            console.log(data);
            // Aquí puedes hacer lo que necesites con la respuesta
            // Por ejemplo, redirigir a otra página o mostrar información en el DOM
        })
        .catch(function(error) {
            console.error('There has been a problem with your fetch operation:', error);
        });
    });
}
