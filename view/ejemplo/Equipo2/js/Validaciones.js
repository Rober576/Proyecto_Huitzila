// se declara una bandera para saber si la entrada es válida
let bandera = true;
let bandera2 = true;
let bandera3 = true;
let bandera4 = true;
let bandera5 = true;

   

// se pone un escuchador de eventos para el botón, para que cuando se haga click se ejecute la función
let botonRegistrar = document.getElementById("registrar");
botonRegistrar.addEventListener("click", (e) => {
    // se revisa si la entrada es válida
    if (bandera && bandera2 && bandera3 && bandera4 && bandera5) {
        // si es válida se muestra un mensaje de éxito
        console.log("Registro exitoso");
    } else {
        // si no es válida se cancela el envío
        console.log(bandera, bandera2, bandera3, bandera4, bandera5);
        console.log("Envío cancelado");
        e.preventDefault();
    }
});

// definición de la expresión regular para el campo
const expresion = {
    campo1: /^[A-Za-z0-9]{3,5}$/,
};

// validación del campo1
Equipo2.campo1.addEventListener('input', (e) => {
    let valorInput = e.target.value;

    // Elimina todos los caracteres no numéricos
    valorInput = valorInput.replace(/\D/g, '');

    // Limita la longitud a 10 caracteres
    valorInput = valorInput.slice(0, 10);

    Equipo2.campo1.value = valorInput;

    // Verifica que se cumpla con la expresión correspondiente
    if (valorInput.length !== 10) {
        Equipo2.campo1.style.border = "5px solid red";
        bandera = false;
    } else {
        Equipo2.campo1.removeAttribute("style");
        bandera = true;
    }
});

// validación del campo2
Equipo2.campo2.addEventListener('input', (e) => {
    let valorInput = e.target.value;

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
});

// validación del campo3
const expresion2 = {
    campo3: /^[A-Z]{4}[A-Z\d]{6}[A-Z]{6}[A-Z\d]{2}$/, // CURP pattern
};

Equipo2.campo3.addEventListener('input', (e) => {
    let valorInput = e.target.value;

    // Elimina todos los caracteres no alfabéticos y numéricos adicionales
    valorInput = valorInput.replace(/[^A-Z\d]/g, '');

    // Verifica que se cumpla con la expresión correspondiente
    if (!expresion2.campo3.test(valorInput) || valorInput.length !== 18) {
        Equipo2.campo3.style.border = "5px solid red";
        bandera3 = false;
    } else {
        Equipo2.campo3.removeAttribute("style");
        bandera3 = true;
    }
});

// validación del campo4
const expresion4 = {
    campo4: /^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ]{5,}$/, // Solo letras y acentos; mínimo 5 caracteres
};

Equipo2.campo4.addEventListener('input', (e) => {
    let valorInput = e.target.value;

    // Elimina todos los caracteres no alfabéticos, incluyendo acentos y números
    valorInput = valorInput.replace(/[^A-Za-zñÑáéíóúÁÉÍÓÚüÜ]/g, '');

    // Verifica que se cumpla con la expresión correspondiente
    if (!expresion4.campo4.test(valorInput) || valorInput.length < 5) {
        Equipo2.campo4.style.border = "5px solid red";
        bandera4 = false;
    } else {
        Equipo2.campo4.removeAttribute("style");
        bandera4 = true;
    }

    // Asignar el valor modificado al campo de entrada
    e.target.value = valorInput;
});

// validación del campo5
const expresion5 = {
    campo5: /.*/, // Cualquier tipo de caracter; no es obligatorio; admite saltos de línea
};

Equipo2.campo5.addEventListener('input', (e) => {
    let valorInput = e.target.value;

    // Verifica que se cumpla con la expresión correspondiente
    if (!expresion5.campo5.test(valorInput)) {
        Equipo2.campo5.style.border = "5px solid red";
        bandera5 = false;
    } else {
        Equipo2.campo5.removeAttribute("style");
        bandera5 = true;
    }
});
