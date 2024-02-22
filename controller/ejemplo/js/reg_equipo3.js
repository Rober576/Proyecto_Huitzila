document.getElementById('Equipo3').addEventListener('submit', function (event) {
    event.preventDefault();

    function todasBanderasAceptadas() {
        if((bandera1 && bandera2 && bandera3 && bandera4)==true){
            return true; 
        }else{
            return false;
        }
        
        
    }
    

    if (todasBanderasAceptadas()) {
        var datos = new FormData(this);
        fetch('../../controller/ejemplo/registro_equipo3.php', {
            method: 'POST',
            body: datos
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data === 'exito') {
                const form = document.getElementById('Equipo3');
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
