document.addEventListener("DOMContentLoaded", function() {
    var cancelarButton = document.getElementById("cancelarButton");
    
    if (cancelarButton) {
        cancelarButton.addEventListener("click", function() {
            var confirmacion = confirm("¿Estás seguro de que deseas cancelar?");
            
            if (confirmacion) {
                window.location.href = "../../view/Calidad/Mostrar_Calidad.html"; // Cambiar por la ruta correcta
            }
        });
    }
});
