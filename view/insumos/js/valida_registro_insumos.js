// validacion.js

// Definición de la expresión regular para cada campo
const expresion = {
    Identificador: /^[0-9]{1,40}$/,
    Nombre: /^[a-zA-Z0-9\s.]{1,50}$/,
    Descripción: /^[a-zA-Z0-9\s.,_-]{1,100}$/,
    Unidades: /^[a-zA-Z\s]{1,10}$/,
    Existencia: /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/,
    Stockmi: /^\d+$/,
    Stockma: /^\d+$/,
    Costo: /^\d+(\.\d{1,2})?$/,
};

// Se pone un escuchador de eventos para el botón, para que cuando se haga click se ejecute la función
let botonRegistrar = document.getElementById("registrar");
botonRegistrar.addEventListener("click", (e) => {
    // Se revisa si todas las entradas son válidas
    if (!validarCampo('Identificador', expresion.Identificador) ||
        !validarCampo('Nombre', expresion.Nombre) ||
        !validarCampo('Descripción', expresion.Descripción) ||
        !validarCampo('Unidades', expresion.Unidades) ||
        !validarCampo('Existencia', expresion.Existencia) ||
        !validarCampo('Stockmi', expresion.Stockmi) ||
        !validarCampo('Stockma', expresion.Stockma) ||
        !validarCampo('Costo', expresion.Costo)) {
        // Si alguna no es válida se cancela el envío
        console.log("Envío cancelado");
        e.preventDefault();
    } else {
        // Si todas son válidas se muestra un mensaje de éxito
        console.log("Registro exitoso");
    }
});

// Función para validar un campo dado una expresión regular
function validarCampo(campo, expresion) {
    let valorInput = document.getElementById(campo).value;

    // Asigna el valor al campo
    document.getElementById(campo).value = valorInput.trim();

    // Verifica si cumple con la expresión regular
    if (!expresion.test(valorInput)) {
        document.getElementById(campo).style.border = "5px solid red";
        return false;
    } else {
        document.getElementById(campo).style.border = ""; // Elimina el borde rojo si es válido
        return true;
    }
}
