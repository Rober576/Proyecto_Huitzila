
let banderaTanque = false;
let banderaEdad = false;

let botonRegistrar = document.getElementById("submitButton");

botonRegistrar.addEventListener("click", (e) => {
    // Se revisa si la entrada es válida
    validarTanque();
    validarEdad();

    if (banderaTanque && banderaEdad) {
        // Si es válida se muestra un mensaje de éxito
        console.log("Registro exitoso");
    } else {
        // Si no es válida se cancela el envío
        console.log("Envío cancelado");
        e.preventDefault();

       
        if (!banderaTanque) {
            document.getElementById("tanque").style.border = "5px solid red"; 
        }
        if (!banderaEdad) {
            document.getElementById("edad").style.border = "5px solid red"; 
        }
    }
});

let botonCancelar = document.getElementById("cancel");

botonCancelar.addEventListener("click", (e) => {
    limpiarCampos();
});

function limpiarCampos() {
   
    document.getElementById("tanque").value = "";
    document.getElementById("edad").value = "";
}

// Expresiones regulares para validar los campos
const expresion = {
   
    tanque: /^[a-zA-Z0-9]*$/,
    edad: /^\d*$/ // Edad: Solo acepta números
};

// Función para validar el campo de tanque
function validarTanque() {
    let valorInput = document.getElementById("tanque").value;

    // Eliminar todos los caracteres no numéricos
    valorInput = valorInput.replace(/[^a-zA-Z0-9]/g, '');

    document.getElementById("tanque").value = valorInput;

    // Validar si la entrada coincide con la expresión regular para LA CLAVE
    if (!expresion.tanque.test(valorInput)) {
        document.getElementById("tanque").style.border = "5px solid red"; 
        banderaTanque = false; 
    } else {
        document.getElementById("tanque").removeAttribute("style"); 
        banderaTanque = true; 
    }
}

// Función para validar el campo de edad
function validarEdad() {
    let valorInput = document.getElementById("edad").value;

    // Eliminar todos los caracteres no permitidos
    valorInput = valorInput.replace(/[^0-9]/g, ''); // Solo se permiten números

    // Actualizar el valor del campo con los caracteres permitidos
    document.getElementById("edad").value = valorInput;

    // Validar si la entrada coincide con la expresión regular para la clave
    if (!expresion.edad.test(valorInput)) {
        banderaEdad = false;
    } else {
        banderaEdad = true;
    }
}


var Formulario = document.getElementById("form_datos");
var edad = Formulario.edad.addEventListener('input', validarEdad);
var edad = Formulario.tanque.addEventListener('input', validarTanque);