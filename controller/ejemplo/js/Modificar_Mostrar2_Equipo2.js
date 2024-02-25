
var linkObtenerInfo = document.querySelectorAll(".table_item__link.obtener-informacion");

for (var i = 0; i < linkObtenerInfo.length; i++) {
    linkObtenerInfo[i].addEventListener('click', function(e) {
        e.preventDefault();
        var id = this.getAttribute('data-id');
        console.log(id);
        console.log("!");

        localStorage.setItem('id', id);

        // Realiza una solicitud fetch para enviar el ID a un script PHP
        fetch('../../controller/ejemplo/Modificar2_Equipo2.php?id=' + id, {
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
            // Convierte el objeto JSON en una cadena de texto y guárdalo en el localStorage
            localStorage.setItem('data', JSON.stringify(data));
            // Redirige a la página Mod_Equipo4.html
            window.location.href = '../../view/ejemplo/Mod_equipo2.html';
        })
        .catch(function(error) {
            console.error('There has been a problem with your fetch operation:', error);
        });

    });
}
/*// Selecciona todos los enlaces de obtener información
var linkObtenerInfo = document.querySelectorAll(".table_item__link.obtener-informacion");

// Agrega el evento click a cada enlace de obtener información
for (var i = 0; i < linkObtenerInfo.length; i++) {
    linkObtenerInfo[i].addEventListener('click', function(e) {
        e.preventDefault();
        var id = this.getAttribute('data-id');
        console.log(id);
        console.log("!");
       

        // Guarda el ID en el localStorage
        localStorage.setItem('id', id);

        // Realiza una solicitud fetch para enviar el ID a un script PHP
        fetch('../../controller/ejemplo/Modificar2_Equipo2.php?id=' + id, {
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
            // Convierte el objeto JSON en una cadena de texto y guárdalo en el localStorage
            localStorage.setItem('data', JSON.stringify(data));
            // Redirige a la página Mod_Equipo4.html
            window.location.href = '../../view/ejemplo/Mod_equipo2.html';
        })
        .catch(function(error) {
            console.error('There has been a problem with your fetch operation:', error);
        });
        
    });
}
*/