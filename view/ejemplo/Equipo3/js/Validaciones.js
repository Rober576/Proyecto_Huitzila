document.getElementById('Equipo3').addEventListener('keyup', function (event) {
    if (!val_Correo() || !val_Password() || !val_ID() || !val_Nombre() || !val_clave()) {
        console.log('Registro fallido. Por favor, revise los campos resaltados.');
        event.preventDefault();
    } else {
        console.log('Registro exitoso');
    }
});

let bandera = false;

let botonRegistrar = document.getElementById("registrar");
botonRegistrar.addEventListener("click", (e) =>{
    //se revisa si la entrada es válida
    if(val_Nombre() == true){
        bandera = true;
    }

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
const expresion = {
    campo4: /^[A-Za-z0-9]{3,400}$/,
}


function val_Nombre() {
    console.log("nombre")
    var nombre = document.getElementById("campo4").value;
    let regex = /^[A-Za-z\s]{0,400}$/;
    if(!expresion.campo4.test(nombre)){
        campo4.style.border = "5px solid red";
        console.log("El nombre es obligatorio");
        return false;
    }else{
        campo4.removeAttribute("style");
        console.log("Nombre correctamente ingresado");
        return true;
    }
}

function val_clave() {
    
}



