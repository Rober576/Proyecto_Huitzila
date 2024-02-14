document.getElementById('formulario').addEventListener('submit', function (event) {
    if (!validateNombre() || !validateTelefono() || !validateCorreo() || !validateId()) {
        alertUser('Registro fallido. Por favor, revise los campos resaltados.');
        event.preventDefault();
    } else {
        alertUser('Registro exitoso');
    }
});

let bandera = false;

let botonRegistrar = document.getElementById("registrar");
botonRegistrar.addEventListener("click", (e) =>{
    //se revisa si la entrada es válida
    if(bandera == true){
        //si es válida se muestra un mensaje de éxito
        console.log("Registro exitoso");
    }

    else{
        //si no es válida se cancela el envío
        console.log("Envío cancelado");
        e.preventDefault();
    }
})


function val_Password(){

}

function val_Nombre() {
    
}

function val_Telefono() {
    
}

function val_Correo() {
    
}

function val_ID() {
    
}
