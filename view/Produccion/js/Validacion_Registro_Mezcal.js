let banderaLote = false;
let banderaTanque = false;
let banderaEdad = false;

let botonRegistrar = document.getElementById("submitButton");

botonRegistrar.addEventListener("click", (e) => {
    // Se revisa si la entrada es válida
    validarLote();
    validarTanque();
    validarEdad();

    if (banderaLote == true && banderaTanque == true && banderaEdad == true) {
        // Si es válida se muestra un mensaje de éxito
        console.log("Registro exitosoa");
    } else {
        // Si no es válida se cancela el envío
        console.log("Envío cancelado");
        e.preventDefault();

        if (!banderaLote) {
            Formulario.lote.style.border = "5px solid red"; 
        }
        if (!banderaTanque) {
            Formulario.tanque.style.border = "5px solid red"; 
        }
        if (!banderaEdad) {
            Formulario.edad.style.border = "5px solid red"; 
        }
    }
})


// Expresiones regulares para validar los campos
const expresion = {
    lote: /^[a-zA-Z0-9]*$/, // Lote y Tanque: Alfanuméricos
    tanque: /^[a-zA-Z0-9]*$/,
    edad: /^\d*$/ // Edad: Solo acepta números
};


// Función para validar el campo de lote
function validarLote() {
    let valorInput = Formulario.lote.value;

    // Eliminar todos los caracteres no numéricos
    valorInput = valorInput.replace(/[^a-zA-Z0-9]/g, '');

    Formulario.lote.value = valorInput;

    // Validar si la entrada coincide con la expresión regular para LA CLAVE
    if (!expresion.lote.test(valorInput)) {
        Formulario.lote.style.border = "5px solid red"; 
        banderaLote = false; 
    } else {
        Formulario.lote.removeAttribute("style"); 
        banderaLote = true; 
    }
}

// Función para validar el campo de tanque
function validarTanque() {
    let valorInput = Formulario.tanque.value;

    // Eliminar todos los caracteres no numéricos
    valorInput = valorInput.replace(/[^a-zA-Z0-9]/g, '');

    Formulario.tanque.value = valorInput;

    // Validar si la entrada coincide con la expresión regular para LA CLAVE
    if (!expresion.tanque.test(valorInput)) {
        Formulario.tanque.style.border = "5px solid red"; 
        banderaTanque = false; 
    } else {
        Formulario.tanque.removeAttribute("style"); 
        banderaTanque = true; 
    }
}

// Función para validar el campo de edad
function validarEdad() {
    let valorInput = Formulario.edad.value;

    // Eliminar todos los caracteres no permitidos
    valorInput = valorInput.replace(/[^0-9]/g, ''); // Solo se permiten números

    // Actualizar el valor del campo con los caracteres permitidos
    Formulario.edad.value = valorInput;

    // Validar si la entrada coincide con la expresión regular para la clave
    if (!expresion.edad.test(valorInput)) {
        banderaEdad = false;
    } else {
        banderaEdad = true;
    }
}


// Agrega los listener para los eventos input de cada campo
Formulario = document.getElementById("form_datos");
Formulario.lote.addEventListener('input', validarLote);
Formulario.tanque.addEventListener('input', validarTanque);
Formulario.edad.addEventListener('input', validarEdad);
