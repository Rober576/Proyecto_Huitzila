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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//definición de la expresión regular para el campo
const expresion = {
    campo1: /^[A-Za-z0-9]{3,5}$/,
}

// Define una función para validar el campo1 de Equipo2
function validarCampo1() {
    let valorInput = Equipo2.campo1.value;

    // Eliminar todos los caracteres no numéricos
    valorInput = valorInput.replace(/\D/g, '');

    // Limitar la longitud a 10 caracteres
    if (valorInput.length > 10) {
        valorInput = valorInput.slice(0, 10);
    }

    // Actualizar el valor del campo con los cambios realizados
    Equipo2.campo1.value = valorInput;

    // Validar si la entrada coincide con la expresión regular para el teléfono
    if (valorInput.length !== 10) {
        Equipo2.campo1.style.border = "5px solid red"; 
        bandera = false; 
    } else {
        Equipo2.campo1.removeAttribute("style"); 
        bandera = true; 
    }
}
// Agrega un listener para el evento keyup del campo1 de Equipo2
Equipo2.campo1.addEventListener('keyup', validarCampo1);
// Llama a la función de validación cuando la página se carga
window.addEventListener('load', validarCampo1);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Define una función para validar el campo2 de Equipo2
function validarCampo2() {
    let valorInput = Equipo2.campo2.value;

    // Elimina todos los caracteres no alfabéticos y espacios adicionales
    valorInput = valorInput.replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]/g, '');

    // Limita la longitud a 20 caracteres
    valorInput = valorInput.slice(0, 20);

    Equipo2.campo2.value = valorInput;

    // Verifica que se cumpla con la expresión correspondiente
    if (valorInput.trim() === '' || valorInput.length > 20) {
        Equipo2.campo2.style.border = "5px solid red";
        bandera2 = false;
    } else {
        Equipo2.campo2.removeAttribute("style");
        bandera2 = true;
    }
}
// Agrega un listener para el evento input del campo2 de Equipo2
Equipo2.campo2.addEventListener('input', validarCampo2);
// Llama a la función de validación cuando la página se carga
window.addEventListener('load', validarCampo2);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const expresion2 = {
    campo3: /^[A-Z]{4}[A-Z\d]{6}[A-Z]{6}[A-Z\d]{2}$/, // CURP pattern
};

// Define una función para validar el campo3 de Equipo2
function validarCampo3() {
    let valorInput = Equipo2.campo3.value;

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
}

// Agrega un listener para el evento input del campo3 de Equipo2
Equipo2.campo3.addEventListener('input', validarCampo3);
// Llama a la función de validación cuando la página se carga
window.addEventListener('load', validarCampo3);



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const expresion4 = {
    campo4: /^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ]{5,}$/, // Solo letras y acentos; mínimo 5 caracteres
}
// Define una función para validar el campo4 de Equipo2
function validarCampo4() {
    let valorInput = Equipo2.campo4.value;

    // Elimina todos los caracteres no alfabéticos, incluyendo acentos
    valorInput = valorInput.replace(/[^A-Za-zñÑáéíóúÁÉÍÓÚüÜ]/g, '');

    // Limita la longitud a 5 caracteres como mínimo
    valorInput = valorInput.slice(0, Math.max(5, valorInput.length));

    Equipo2.campo4.value = valorInput;

    // Verifica que se cumpla con la expresión correspondiente
    if (!expresion4.campo4.test(valorInput) || valorInput.length < 5) {
        Equipo2.campo4.style.border = "5px solid red";
        bandera4 = false;
    } else {
        Equipo2.campo4.removeAttribute("style");
        bandera4 = true;
    }
}
// Agrega un listener para el evento input del campo4 de Equipo2
Equipo2.campo4.addEventListener('input', validarCampo4);
// Llama a la función de validación cuando la página se carga
window.addEventListener('load', validarCampo4);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Agrega una expresión regular para campo1 (comentario)
const expresion5 = {
    campo5: /.*/, // Cualquier tipo de caracter; no es obligatorio; admite saltos de línea
}
// Define una función para validar el campo5 de Equipo2
function validarCampo5() {
    let valorInput = Equipo2.campo5.value;

    // Limita la longitud a lo que se haya ingresado
    valorInput = valorInput.slice(0);

    Equipo2.campo5.value = valorInput;

    // Verifica que se cumpla con la expresión correspondiente
    if (!expresion5.campo5.test(valorInput)) {
        Equipo2.campo5.style.border = "5px solid red";
        bandera5 = false;
    } else {
        Equipo2.campo5.removeAttribute("style");
        bandera5 = true;
    }
}
// Agrega un listener para el evento input del campo5 de Equipo2
Equipo2.campo5.addEventListener('input', validarCampo5);
// Llama a la función de validación cuando la página se carga
window.addEventListener('load', validarCampo5);
