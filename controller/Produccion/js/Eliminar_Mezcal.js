function agregarEventosEliminar() {
    // Selecciona todos los enlaces de eliminar
    var linkDelete = document.querySelectorAll(".table_item__link.eliminar-elemento");

    // Agrega el evento click a cada enlace de eliminar
    for (var i = 0; i < linkDelete.length; i++) {
        linkDelete[i].addEventListener('click', function(e) {
            e.preventDefault();
            var Lote = this.dataset.Lote;
            console.log("Valor de Lote:", Lote);

            if (confirm('¿Estás seguro de eliminar el registro?')) {
                fetch('../../../controller/Produccion/php/Eliminar_Mezcal.php?Lote=' + Lote, {
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