document.addEventListener("DOMContentLoaded", function() {
    const btnModificar = document.querySelector(".boton-modificar");
    const btnEliminar = document.querySelector(".boton-eliminar");

    btnModificar.addEventListener("click", function() {
        // Redirigir a la ventana de modificación

        console.log("entro al de rutas de interfaz")
        window.location.href = "../../controller/Produccion/php/Get_Mezcal.php";
    });

    btnEliminar.addEventListener("click", function() {
        // Mostrar una alerta de confirmación para eliminar
        const confirmarEliminar = confirm("¿Estás seguro de que deseas eliminar este registro?");
        if (confirmarEliminar) {
            // Aquí puedes agregar el código para eliminar el registro
            alert("El registro ha sido eliminado.");
        }
    });
});
