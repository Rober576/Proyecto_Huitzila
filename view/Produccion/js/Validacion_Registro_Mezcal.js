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

let botonCancelar = document.getElementById("cancelButton");

botonCancelar.addEventListener("click", (e) => {
    limpiarCampos();
});

function limpiarCampos() {
    document.getElementById("lote").value = "";
    document.getElementById("tanque").value = "";
    document.getElementById("categoria").selectedIndex = 0;
    document.getElementById("especie").selectedIndex = 0;
    document.getElementById("clase").selectedIndex = 0;
    document.getElementById("edad").value = "";
}

// Expresiones regulares para validar los campos
const expresion = {
    lote: /^[a-zA-Z0-9]{5}$/, // Lote y Tanque: Máximo 5 caracteres alfanuméricos
    tanque: /^[a-zA-Z0-9]{5}$/,
    edad: /^\d{1,3}$/ // Edad: Solo acepta números del 0 al 999
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

    // Eliminar todos los caracteres no numéricos
    valorInput = valorInput.replace(/[^a-zA-Z0-9]/g, '');

    Formulario.edad.value = valorInput;

    // Validar si la entrada coincide con la expresión regular para LA CLAVE
    if (!expresion.edad.test(valorInput)) {
        Formulario.edad.style.border = "5px solid red"; 
        banderaEdad = false; 
    } else {
        Formulario.edad.removeAttribute("style"); 
        banderaEdad = true; 
    }
}


// Agrega los listener para los eventos input de cada campo
Formulario = document.getElementById("form_datos");
Formulario.lote.addEventListener('input', validarLote);
Formulario.tanque.addEventListener('input', validarTanque);
Formulario.edad.addEventListener('input', validarEdad);
