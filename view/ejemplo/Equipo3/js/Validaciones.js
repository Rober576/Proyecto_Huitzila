let bandera1 = false;
let bandera2 = false;
let bandera3 = false;
let bandera4 = false; 
let bandera5 = false;

document.getElementById('Equipo3').addEventListener('sumnit', function (event) {
    if (!val_Correo() || !val_Password() || !val_ID() || !val_Nombre() || !val_clave()) {
        console.log('Registro fallido. Por favor, revise los campos resaltados.');
        event.preventDefault();
    } else {
        console.log('Registro exitoso');
    }
});



let botonRegistrar = document.getElementById("registrar");
botonRegistrar.addEventListener("click", (e) =>{
    //se revisa si la entrada es válida
    

    if(bandera4 == true){
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




function val_clave() {
    
}

// Se declara una bandera para saber si la entrada es válida
botonRegistrar.addEventListener("click", (e) => {
    // Se revisa si la entrada es válida
    if (bandera4) {
        // Si es válida se muestra un mensaje de éxito
        console.log("Registro exitoso");
    } else {
        // Si no es válida se cancela el envío
        console.log("Envío cancelado");
        e.preventDefault();
    }
});

// Definición de la expresión regular para el campo
const expresion = {
    nombre: /^[a-zA-Z\s]{1,400}$/ // Solo letras y espacios, máximo 400 caracteres
};

// Se pone un escuchador de eventos para el campo, para que cuando se escriba se ejecute la función
campo4.addEventListener('input', (e) => {
    let valorInput = e.target.value;

    // Elimina los caracteres no deseados y limita la longitud
    valorInput = valorInput.replace(/[^a-zA-Z\s]/g, '').substr(0, 400);

    // Actualiza el valor del campo con el texto modificado
    campo4.value = valorInput;

    // Verifica si el campo está vacío
    if (valorInput.trim() === '') {
        campo4.style.border = "5px solid red"; // Aplica estilo si el campo está vacío
        bandera4 = false;
    } else {
        // Verifica que se cumpla con la expresión correspondiente
        if (!expresion.nombre.test(valorInput)) {
            campo4.style.border = "5px solid red"; // Aplica estilo si no se cumple la expresión
            bandera4 = false;
        } else {
            campo4.removeAttribute("style");
            bandera4 = true;
        }
    }
});


