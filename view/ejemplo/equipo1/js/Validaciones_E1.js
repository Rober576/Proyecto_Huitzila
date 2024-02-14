//se declara una bandera para saber si la entrada es válida
let bandera1 = false;
let bandera2 = false;
let bandera3 = false;
let bandera4 = false;
let bandera5 = false;


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
    campo1: /^[A-Za-z .]{1,40}$/,
    campo2: /^\d{10}$/,
    campo3: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    campo4: /^\d{2}[A-Za-z]{5}$/,
    campo5:/^([^@~`;]{0,}|)$/,
};


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

// Escuchador de eventos para el campo de teléfono
formulario.campo2.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    // Elimina todo excepto los números
    valorInput = valorInput.replace(/\D/g, '');

    // Limita la longitud a 10 caracteres
    valorInput = valorInput.slice(0, 10);

    // Asigna el valor al campo
    formulario.campo2.value = valorInput;

    // Verifica si cumple con la expresión regular
    if (!expresion.campo2.test(valorInput)) {
        campo2.style.border = "5px solid red";
        bandera = false;
    } else {
        campo2.removeAttribute("style");
        bandera = true;
    }
})

// Escuchador de eventos para el campo de correo electrónico
formulario.campo3.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    // Limita la longitud a 60 caracteres
    valorInput = valorInput.slice(0, 60);

    // Asigna el valor al campo
    formulario.campo3.value = valorInput;

    // Verifica si cumple con la expresión regular
    if (!expresion.campo3.test(valorInput)) {
        campo3.style.border = "5px solid red";
        bandera = false;
    } else {
        campo3.removeAttribute("style");
        bandera = true;
    }
})

formulario.campo4.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    // Limita la longitud a 7 caracteres (2 números + 5 letras)
    valorInput = valorInput.slice(0, 7);

    // Asigna el valor al campo
    formulario.campo4.value = valorInput;

    // Verifica si cumple con la expresión regular
    if (!expresion.campo4.test(valorInput)) {
        campo4.style.border = "5px solid red";
        bandera = false;
    } else {
        campo4.removeAttribute("style");
        bandera = true;
    }
})

// Escuchador de eventos para el campo de descripción
formulario.campo5.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    // Limita la longitud a un máximo (opcional)
    valorInput = valorInput.slice(0, 255); // Por ejemplo, se limita a 255 caracteres

    // Asigna el valor al campo
    formulario.campo5.value = valorInput;

    // Verifica si cumple con la expresión regular
    if (!expresion.campo5.test(valorInput)) {
        campo5.style.border = "5px solid red";
        bandera = false;
    } else {
        campo5.removeAttribute("style");
        bandera = true;
    }
});