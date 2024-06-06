document.addEventListener("DOMContentLoaded", function() {
    var cancelarButton = document.getElementById("cancelarButton");
    
    if (cancelarButton) {
        cancelarButton.addEventListener("click", function() {
            var confirmacion = confirm("¿Estás seguro de que deseas cancelar?");
            
            if (confirmacion) {
                window.location.href = "../../view/Calidad/Valores_Min_Max.html"; // Cambiar por la ruta correcta
            }
        });
    }
});
