function agregarEventosEliminar() {
    // Selecciona todos los enlaces de eliminar
    var linkDelete = document.querySelectorAll(".table_item__link.eliminar-elemento");

    // Agrega el evento click a cada enlace de eliminar
    for (var i = 0; i < linkDelete.length; i++) {
        linkDelete[i].addEventListener('click', function(e) {
            e.preventDefault();
            var Lote = this.dataset.id;
            console.log("Valor de Lote:", Lote);

            if (confirm('¿Estás seguro de eliminar el registro MOV?')) {
                fetch('../../../controller/Produccion/php/Eliminar_Movimientos_Mezcal.php?id=' + Lote, {
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
}