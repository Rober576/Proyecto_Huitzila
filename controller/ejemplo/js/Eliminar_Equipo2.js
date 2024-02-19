//esta función se activa con el click del link eliminar, y le pregunta al usuario si esta seguro de eliminar el registro
//si el usuario da click en aceptar, conecta con el php de controller
function confirmacion(e){
    //aqui se le pregunta al usuario si esta seguro de eliminar el registro
    if(confirm('¿Estas seguro de eliminar el registro?')){
        //si el usuario da click en aceptar, se conecta con el php de controller

        e.preventDefault();
        var id = $(this).data('id');

        fetch('../../controller/ejemplo/Eliminar_Equipo2.php?id='+id, {
            method: 'GET',
    
        })

        //recibe la respuesta para mandar la alerta
        .then(res => res.json())
        .then(data => {
            alert(data);
            location.reload();
        })
    }

    else{
        //si el usuario cancela, es aborta la operacion
        e.preventDefault()
    }
}

//selecciona todos los links que tengan la clase table_item__link
var linkDelete = document.querySelectorAll(".table_item__link");

for (var i = 0; i < linkDelete.length; i++) {
    linkDelete[i].addEventListener('click', confirmacion);
}