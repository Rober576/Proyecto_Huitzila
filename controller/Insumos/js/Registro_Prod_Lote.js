// Escuchador de cuando se envía el formulario
document.getElementById('insumos_form').addEventListener('submit', function (event) {
    event.preventDefault();


    // Hace el envío del formulario al controlador del registro de producción de lote
    if (true) {
        var datos = new FormData(this);
        
        fetch("../../controller/Insumos/Registro_Prod_Lote.php", {
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
                location.reload();

            } else if(data === 'fallido'){
                const form = document.getElementById('insumos_form');
                form.reset();
                alert("Registro fallido.\nNo se cuenta con insumos suficientes para producir este lote");
                location.reload();
            } 
            else if(data === 'existente'){
                const form = document.getElementById('insumos_form');
                form.reset();
                alert("Registro fallido.\nEl lote que se intenta registrar ya existe");
                location.reload();
            }
        })
       
    } else {
        console.log("Registro fallido. Por favor, revise los campos resaltados.");
        alert("Registro fallido. Por favor, revise los campos resaltados.");
    }
    }
) ;