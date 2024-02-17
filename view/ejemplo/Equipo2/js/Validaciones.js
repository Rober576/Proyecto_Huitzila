//se declara una bandera para saber si la entrada es válida
let bandera  = false;
let bandera2 = false;
let bandera3 = false;
let bandera4 = false;
let bandera5 = false;

//se pone un escuchador de eventos para el botón, para que cuando se haga click se ejecute la función
let botonRegistrar = document.getElementById("registrar");
botonRegistrar.addEventListener("click", (e) =>{
    //se revisa si la entrada es válida
    if(bandera == true & bandera2 == true & bandera3 == true & bandera4 == true & bandera5 == true ){
        //si es válida se muestra un mensaje de éxito
        console.log("Registro exitoso");
    }

    else{
        //si no es válida se cancela el envío
        console.log(bandera,bandera2,bandera3,bandera4,bandera5);
        console.log("Envío cancelado");
        e.preventDefault();
    }
})

//definición de la expresión regular para el campo
const expresion = {
    campo1: /^[A-Za-z0-9]{3,5}$/,
}

Equipo2.campo1.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    // Elimina todos los caracteres no numéricos
    valorInput = valorInput.replace(/\D/g, '');

    // Limita la longitud a 10 caracteres
    valorInput = valorInput.slice(0, 10);

    Equipo2.campo1.value = valorInput;

    // Verifica que se cumpla con la expresión correspondiente
    if (valorInput.length !== 10) {
        campo1.style.border = "5px solid red";
        bandera = false;
    } else {
       
        campo1.removeAttribute("style");
        bandera = true;
    }
});



Equipo2.campo2.addEventListener('input', (e) => {
    let valorInput = e.target.value;

    // Elimina todos los caracteres no alfabéticos y espacios adicionales
    valorInput = valorInput.replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]/g, '');

    // Limita la longitud a 20 caracteres
    valorInput = valorInput.slice(0, 20);

    Equipo2.campo2.value = valorInput;

    // Verifica que se cumpla con la expresión correspondiente
    if (valorInput.trim() === '' || valorInput.length > 20) {
        campo2.style.border = "5px solid red";
        bandera2 = false;
    } else {
        campo2.removeAttribute("style");
        bandera2 = true;
    }
});

// Agrega una expresión regular para campo3 (CURP)
/*const expresion2 = {
    campo3: /^[A-Z]{4}\d{6}[A-Z]{6}[A-Z\d]{2}$/, // CURP pattern
}

Equipo2.campo3.addEventListener('input', (e) => {
    let valorInput = e.target.value;

    // Elimina todos los caracteres no alfabéticos y numéricos adicionales
    valorInput = valorInput.replace(/[^A-Z\d]/g, '');

    // Limita la longitud a 18 caracteres
    valorInput = valorInput.slice(0, 18);

    Equipo2.campo3.value = valorInput;

    // Verifica que se cumpla con la expresión correspondiente
    if (!expresion2.campo3.test(valorInput) || valorInput.length !== 18) {
        Equipo2.campo3.style.border = "5px solid red";
        bandera3 = false;
    } else {
        Equipo2.campo3.removeAttribute("style");
        bandera3 = true;
    }
});*/

const expresion2 = {
    campo3: /^[A-Z]{4}[A-Z\d]{6}[A-Z]{6}[A-Z\d]{2}$/, // CURP pattern
};

Equipo2.campo3.addEventListener('input', (e) => {
    let valorInput = e.target.value;

    // Elimina todos los caracteres no alfabéticos y numéricos adicionales
    valorInput = valorInput.replace(/[^A-Z\d]/g, '');

    // Limita la longitud a 18 caracteres
    valorInput = valorInput.slice(0, 18);

    // Verifica si los primeros cuatro caracteres son letras
    if (/^[A-Z]{1,4}/.test(valorInput)) {
        // Actualiza el campo solo con los primeros cuatro caracteres
        valorInput = valorInput.slice(0, 18);
    } else {
        // Elimina los números al principio
        valorInput = valorInput.replace(/^\d+/, '');
    }

    Equipo2.campo3.value = valorInput;

    // Verifica que se cumpla con la expresión correspondiente
    if (!expresion2.campo3.test(valorInput) || valorInput.length !== 18) {
        Equipo2.campo3.style.border = "5px solid red";
        bandera3 = false;
    } else {
        Equipo2.campo3.removeAttribute("style");
        bandera3 = true;
    }
});




const expresion4 = {
    campo4: /^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ]{5,}$/, // Solo letras y acentos; mínimo 5 caracteres
}

Equipo2.campo4.addEventListener('input', (e) => {
    let valorInput = e.target.value;

    // Elimina todos los caracteres no alfabéticos, incluyendo acentos
    valorInput = valorInput.replace(/[^A-Za-zñÑáéíóúÁÉÍÓÚüÜ]/g, '');

    // Limita la longitud a 5 caracteres como mínimo
    valorInput = valorInput.slice(0, Math.max(5, valorInput.length));

    Equipo2.campo4.value = valorInput;

    // Verifica que se cumpla con la expresión correspondiente
    if (!expresion4.campo4.test(valorInput) || valorInput.length < 5) {
        campo4.style.border = "5px solid red";
        bandera4 = false;
    } else {
        campo4.removeAttribute("style");
        bandera4 = true;
    }
});

// Agrega una expresión regular para campo1 (comentario)
const expresion5 = {
    campo5: /.*/, // Cualquier tipo de caracter; no es obligatorio; admite saltos de línea
}

Equipo2.campo5.addEventListener('input', (e) => {
    let valorInput = e.target.value;

    // Limita la longitud a lo que se haya ingresado
    valorInput = valorInput.slice(0);

    Equipo2.campo5.value = valorInput;

    // Verifica que se cumpla con la expresión correspondiente
    if (!expresion5.campo5.test(valorInput)) {
        campo5.style.border = "5px solid red";
        bandera5 = false;
    } else {
        campo5.removeAttribute("style");
        bandera5 = true;
    }
});

