let bandera1 = false;
let bandera2 = false;
let bandera3 = false;
let bandera4 = false;
let bandera5 = false;
let bandera6 = false;

let botonRegistrar = document.getElementById("submitButton");

botonRegistrar.addEventListener("click", (e) => {

    Validar_Lote();
    Validar_Tanque();
    Validar_Categoria();
    Validar_Especie();
    Validar_Clase();
    Validar_Edad();
    Validar_Concentracion();
    Validar_Volumen();

    if (bandera1 && bandera2 && bandera3 && bandera4 && bandera5 && bandera6) {

        console.log("Registro exitoso");
    } else {
        // Si no es válida se cancela el envío
        console.log("Envío cancelado");
        e.preventDefault();
    }
});

const expresion = {
    numeros: /^\d+$/,
    letras: /^[a-zA-Z]+$/,
    letrasNumeros: /^[a-zA-Z0-9]+$/
};

// Función para validar el campo Lote
function Validar_Lote() {
    let valorInput = document.getElementById("lote").value;

    // Validar si la entrada coincide con la expresión regular para letras y números
    if (!expresion.letrasNumeros.test(valorInput)) {
        document.getElementById("lote").style.border = "5px solid red";
        bandera1 = false;
    } else {
        document.getElementById("lote").removeAttribute("style");
        bandera1 = true;
    }
}

// Función para validar el campo Tanque
function Validar_Tanque() {
    let valorInput = document.getElementById("tanque").value;

    // Validar si la entrada coincide con la expresión regular para letras y números
    if (!expresion.letrasNumeros.test(valorInput)) {
        document.getElementById("tanque").style.border = "5px solid red";
        bandera2 = false;
    } else {
        document.getElementById("tanque").removeAttribute("style");
        bandera2 = true;
    }
}

// Función para validar el campo Categoría (se asume que se cargará dinámicamente)
function Validar_Categoria() {
    let valorInput = document.getElementById("categoria").value;

    // No se aplica validación específica aquí, ya que es un campo de selección y se asume que tendrá opciones válidas
    bandera3 = true;
}

// Función para validar el campo Especie (se asume que se cargará dinámicamente)
function Validar_Especie() {
    let valorInput = document.getElementById("especie").value;

    // No se aplica validación específica aquí, ya que es un campo de selección y se asume que tendrá opciones válidas
    bandera4 = true;
}

// Función para validar el campo Clase (se asume que se cargará dinámicamente)
function Validar_Clase() {
    let valorInput = document.getElementById("clase").value;

    // No se aplica validación específica aquí, ya que es un campo de selección y se asume que tendrá opciones válidas
    bandera5 = true;
}

// Función para validar el campo Edad
function Validar_Edad() {
    let valorInput = document.getElementById("edad").value;

    // Validar si la entrada es un número positivo
    if (!expresion.numeros.test(valorInput) || parseInt(valorInput) <= 0) {
        document.getElementById("edad").style.border = "5px solid red";
        bandera6 = false;
    } else {
        document.getElementById("edad").removeAttribute("style");
        bandera6 = true;
    }
}

// Función para validar el campo Concentración
function Validar_Concentracion() {
    let valorInput = document.getElementById("concentracion").value;

    // Validar si la entrada es un número positivo
    if (!expresion.numeros.test(valorInput) || parseInt(valorInput) <= 0) {
        document.getElementById("concentracion").style.border = "5px solid red";
        bandera7 = false;
    } else {
        document.getElementById("concentracion").removeAttribute("style");
        bandera7 = true;
    }
}

// Función para validar el campo Volumen
function Validar_Volumen() {
    let valorInput = document.getElementById("volumen").value;

    // Validar si la entrada es un número positivo
    if (!expresion.numeros.test(valorInput) || parseInt(valorInput) <= 0) {
        document.getElementById("volumen").style.border = "5px solid red";
        bandera8 = false;
    } else {
        document.getElementById("volumen").removeAttribute("style");
        bandera8 = true;
    }
}
