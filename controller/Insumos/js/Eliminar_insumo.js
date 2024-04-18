//esta función se activa con el click del link eliminar, y le pregunta al usuario si esta seguro de eliminar el registro
//si el usuario da click en aceptar, conecta con el php de controller
function confirmacion(e) {
    // Aquí se le pregunta al usuario si está seguro de eliminar el registro
    if (confirm('¿Estás seguro de eliminar el registro?')) {
        // Si el usuario cancela, se aborta la operación
       
        e.preventDefault();
        var id = $(this).data('id');

        fetch('../../controller/Insumos/Eliminar_Insumo.php?id='+id, {
            method: 'GET',
            //id: id
        })

        //recibe la respuesta para mandar la alerta
        .then(res => res.json())
        .then(data => {
            alert(data);
            location.reload();
        })
    }

    else{
        //si el usuario cancela, aborta la operacion
        e.preventDefault()
    }
}

//selecciona todos los links que tengan la clase table_item__link
var linkDelete = document.querySelectorAll(".table_item__link");

for (var i = 0; i < linkDelete.length; i++) {
    linkDelete[i].addEventListener('click', confirmacion);
}