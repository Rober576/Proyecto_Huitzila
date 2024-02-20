// Selecciona todos los enlaces de obtener información
var linkObtenerInfo = document.querySelectorAll(".table_item__link.obtener-informacion");

console.log(linkObtenerInfo);

// Agrega el evento click a cada enlace de obtener información
for (var i = 0; i < linkObtenerInfo.length; i++) {
    linkObtenerInfo[i].addEventListener('click', function(e) {
        e.preventDefault();
        var id = this.getAttribute('data-id');
        console.log(id);

        fetch('../../controller/ejemplo/Modificar2_Equipo4.php?id=' + id, {
            method: 'GET',
        })

        .then(res => res.json())
        .then(data => {
            // Establece los valores de los campos del formulario con la información obtenida
            document.getElementById('campo1').value = data.campo1;
            document.getElementById('campo2').value = data.campo2;
            document.getElementById('campo3').value = data.campo3;
            document.getElementById('campo4').value = data.campo4;
            document.getElementById('campo5').value = data.campo5;

            // Redirige al formulario de modificación
            window.location.href = "../../view/ejemplo/Mod_Equipo4.html";
        });
    });
}
