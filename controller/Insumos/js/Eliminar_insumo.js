function confirmacion(event) {
    // Aquí se le pregunta al usuario si está seguro de eliminar el registro
    if (!confirm('¿Estás seguro de eliminar el registro?')) {
        // Si el usuario cancela, se aborta la operación
        event.preventDefault();
    }
    else{
        alert('Registro eliminado');
    }
}

// Selecciona todos los links que tengan la clase table_item__link
var linkDelete = document.querySelectorAll(".table_item__link");
console.log('Sí entra al js de eliminar');
for (var i = 0; i < linkDelete.length; i++) {
    linkDelete[i].addEventListener('click', confirmacion);
}
