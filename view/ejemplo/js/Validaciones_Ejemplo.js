//se declara una bandera para saber si la entrada es válida
let bandera = false;

//se pone un escuchador de eventos para el botón, para que cuando se haga click se ejecute la función
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

//definición de la expresión regular para el campo
const expresion = {
    campo1: /^[A-Za-z0-9]{3,5}$/,
}

//se pone un escuchador de eventos para el campo, para que cuando se escriba se ejecute la función
formulario.campo1.addEventListener('keyup', (e) => {5
    let valorInput = e.target.value;
    formulario.campo1.value = valorInput

    //elimina los espacios en blanco
    .replace(/\s+/g, '')

    //elimina caracteres especiales
    .replace(/[☺☻♥♦•○◙♂♀üâäàåçê♪ëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒª`´.·¨°º¿⌐¬½¼«»÷±~!¡@#$%^&^*()_+\-=\[\]{};':" \\|,<>\/?]/g, '')
    
    //elimina el ultimo espacio en blanco
    .trim()

    //verifica que se cumpla con la expresion correpondiente
    if (!expresion.campo1.test(valorInput)) {
        campo1.style.border = "5px solid red";
        bandera = false
    }

    else {
        campo1.removeAttribute("style");
        bandera = true;
    }
})