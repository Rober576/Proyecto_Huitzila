document.addEventListener("DOMContentLoaded", function() {
    var cancelarButton = document.getElementById("cancelar");
    
    if (cancelarButton) {
        cancelarButton.addEventListener("click", function() {
            var confirmacion = confirm("¿Estás seguro de que deseas cancelar?");
            
            if (confirmacion) {
                window.location.href = "../../view/insumos/Mostrar_Insumos.html";
            }
        });
    }
});
