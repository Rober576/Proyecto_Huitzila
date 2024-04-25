document.addEventListener("DOMContentLoaded", function() {
    var cancelarButton = document.getElementById("Boton_cancelar");
    
    if (cancelarButton) {
        cancelarButton.addEventListener("click", function() {
            var confirmacion = confirm("¿Estás seguro de que deseas cancelar?");
            
            if (confirmacion) {
                window.location.href = "../../view/insumos/Mostrar_Movimiento_Insumos_General.html";
            }
        });
    }
});
