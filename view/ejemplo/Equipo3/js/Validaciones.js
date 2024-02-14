document.getElementById('Equipo3').addEventListener('submit', function (event) {
    if (!val_Correo() || !val_Password() || !val_ID() || !val_Nombre() || !val_clave()) {
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

function val_Correo() {
    
}

function val_Password() {

}

function val_ID() {
    const idInput = document.getElementById('id');
    const idRegex = /^[0-9]{2}[A-Za-z]{5}$/;

    if (!idRegex.test(idInput.value)) {
        highlightElement(idInput);
        return false;
    } else {
        unhighlightElement(idInput);
        return true;
    }
}


function val_Nombre() {
    
}

function val_clave() {
    
}



