var formulario = document.getElementById('login_form');

formulario.addEventListener('submit', function (e) {
    
    // Verifica que todas las banderas de los campos sean válidas
    function todasBanderasAceptadas() {
        if((bandera1 && bandera2)==true){
            return true; 
        }else{
            return false;
        }
        
        
    }
    e.preventDefault();

    if (todasBanderasAceptadas()){

    var datos= new FormData(formulario);
    fetch('../../controller/Login/Login_Control.php', {
        method: 'POST',
        body: datos
    })

    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data === 'exito') {
            const form= document.getElementById('login_form');
            form.reset();
            alert("Ingreso exitoso");
            //window.location.href = 'Mostrar_Usuarios.html';
        }
    })
    } else {
        alert("Ingreso fallido. Vuelva a intentarlo")
    }
})

/*

// Escuchador de cuando se envía el formulario de Login
document.getElementById('login_form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Verifica que todas las banderas de los campos sean válidas
    function todasBanderasAceptadas() {
        if((bandera1 && bandera2)==true){
            return true; 
        }else{
            return false;
        }
        
        
    }

        // Hace el envío del formulario al controlador del Login
        if (todasBanderasAceptadas()) {
            var datos = new FormData(this);
            
            fetch("controller/Login/Login_Control.php", {
                method: 'POST',
                body: datos
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data === 'exito') {
                    const form = document.getElementById('login_form');
                    form.reset();
                    alert("Ingreso exitoso");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("Error al ingresar al sistema");
            });
        } else {
            console.log("Ingreso fallido. Por favor, revise los campos resaltados.");
            alert("Ingreso fallido al sistema. Por favor, revise los campos resaltados.");
        }
        }
    ) ;
    */