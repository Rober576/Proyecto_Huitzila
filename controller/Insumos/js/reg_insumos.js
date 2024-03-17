// Escuchador de cuando se envía el formulario
document.getElementById('insumos_form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Verifica que todas las banderas de los campos sean válidas
    function todasBanderasAceptadas() {
        if((bandera1 && bandera2 && bandera3 && bandera4 && bandera5 && bandera6 && bandera7 && bandera8)==true){
            return true; 
        }else{
            return false;
        }
        
        
    }

    // Hace el envío del formulario al controlador del registro de insumos
    if (todasBanderasAceptadas()) {
        var datos = new FormData(this);
        
        fetch("../../../controller/Insumos/registro_insumos.php", {
            method: 'POST',
            body: datos
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data === 'exito') {
                const form = document.getElementById('insumos_form');
                form.reset();
                alert("Registro exitoso");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Error al procesar el registro");
        });
    } else {
        console.log("Registro fallido. Por favor, revise los campos resaltados.");
        alert("Registro fallido. Por favor, revise los campos resaltados.");
    }
    }
) ;