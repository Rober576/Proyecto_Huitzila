// Selecciona todos los enlaces de eliminar
var linkDelete = document.querySelectorAll(".table_item__link.eliminar-elemento");

// Agrega el evento click a cada enlace de eliminar
for (var i = 0; i < linkDelete.length; i++) {
    linkDelete[i].addEventListener('click', function(e) {
        e.preventDefault();
        var id = this.dataset.id;

        if (confirm('¿Estás seguro de eliminar el registro?')) {
            fetch('../../controller/ejemplo/Eliminar_Equipo4.php?id=' + id, {
                method: 'GET',
            })
            .then(res => res.json())
            .then(data => {
                alert(data);
                location.reload();
            });
        }
    });
}

// Selecciona todos los enlaces de editar
var linkEdit = document.querySelectorAll(".table_item__link.editar-elemento");

// Agrega el evento click a cada enlace de editar
for (var j = 0; j < linkEdit.length; j++) {
    linkEdit[j].addEventListener('click', function(e) {
        // Agrega el código necesario para manejar la acción de editar
        // Puedes redirigir a la página de edición o realizar otras acciones
        // Por ejemplo:
        window.location.href = "../../../view/ejemplo/Mod_equipo4.html";
    });
}
