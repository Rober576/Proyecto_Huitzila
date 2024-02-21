let bandera1 = false;
let bandera2 = false;
let bandera3 = false;
let bandera4 = false;
let bandera5 = false;

let botonRegistrar = document.getElementById("submitButton");
botonRegistrar.addEventListener("click", (e) =>{
    //se revisa si la entrada es válida
    if(bandera1 == true && bandera2 == true && bandera3 == true && bandera4 == true){
        //si es válida se muestra un mensaje de éxito
        console.log("Registro exitoso");
    }

    else{
        //si no es válida se cancela el envío
        console.log("Envío cancelado");
        e.preventDefault();
    }
})

const expresion = {
    telefono: /^\d{10}$/, 
    otraFuncion: /^\d{5}$/ 
};


Equipo4.campo1.addEventListener('input', (e) => {
    let valorInput = e.target.value;

    // Eliminar todos los caracteres no numéricos
    valorInput = valorInput.replace(/\D/g, '');

    // Limitar la longitud a 10 caracteres
    if (valorInput.length > 10) {
        valorInput = valorInput.slice(0, 10);
    }

    // Actualizar el valor del campo con los cambios realizados
    e.target.value = valorInput;
   
    // Validar si la entrada coincide con la expresión regular para el teléfono
    if (!expresion.telefono.test(valorInput)) {
        Equipo4.campo1.style.border = "5px solid red"; 
        bandera1 = false; 
    } else {
        Equipo4.campo1.removeAttribute("style"); 
        bandera1 = true; 
    }
});



Equipo4.campo2.addEventListener('input', (e) => {
    let valorInput = e.target.value;

    // Eliminar todos los caracteres no numéricos
    valorInput = valorInput.replace(/\D/g, '');

    // Limitar la longitud a 10 caracteres
    if (valorInput.length > 5) {
        valorInput = valorInput.slice(0, 5);
    }

    // Actualizar el valor del campo con los cambios realizados
    e.target.value = valorInput;
   
    // Validar si la entrada coincide con la expresión regular para el teléfono
    if (!expresion.otraFuncion.test(valorInput)) {
        Equipo4.campo2.style.border = "5px solid red"; 
        bandera2 = false; 
    } else {
        Equipo4.campo2.removeAttribute("style"); 
        bandera2 = true; 
    }
});


expresion.codigoPostal = /^\d{5}$/;


const expresionDireccion = /^[a-zA-Z0-9\s.#áéíóúÁÉÍÓÚüÜñÑ]+$/;

Equipo4.campo3.addEventListener('input', (e) => {
    let valorInput = e.target.value;

    // Si la entrada no coincide con la expresión regular, eliminar los caracteres no válidos
    if (!expresionDireccion.test(valorInput)) {
        // Guardar el valor antes de la limpieza
        let valorAnterior = e.target.value;
        // Limpiar el valor solo para detectar los caracteres no válidos
        valorInput = valorInput.replace(/[^a-zA-Z0-9\s.#]/g, '');
        // Restaurar los caracteres que se eliminaron incorrectamente
        valorInput = valorAnterior.split('').map((char, index) => {
            if (!expresionDireccion.test(char)) {
                return '';
            }
            return char;
        }).join('');
        // Actualizar el valor del campo
        e.target.value = valorInput;
    }

    // Verificar si la entrada es una cadena vacía o no cumple con la expresión regular
    if (!expresionDireccion.test(e.target.value) || e.target.value.trim() === '') {
        Equipo4.campo3.style.border = "5px solid red"; 
        bandera3 = false; 
    } else {
        Equipo4.campo3.removeAttribute("style");
        bandera3 = true; 
    }
});



const expresionApellido = /^[a-zA-Z\s.áéíóúÁÉÍÓÚüÜñÑ]{1,20}$/;

Equipo4.campo4.addEventListener('input', (e) => {
    let valorInput = e.target.value;

    // Si la entrada no coincide con la expresión regular, eliminar los caracteres no válidos
    if (!expresionApellido.test(valorInput)) {
        // Guardar el valor antes de la limpieza
        let valorAnterior = e.target.value;
        // Limpiar el valor solo para detectar los caracteres no válidos
        valorInput = valorInput.replace(/[^a-zA-Z\s.áéíóúÁÉÍÓÚüÜñÑ]/g, '');
        // Restaurar los caracteres que se eliminaron incorrectamente
        valorInput = valorAnterior.split('').map((char, index) => {
            if (!expresionApellido.test(char)) {
                return '';
            }
            return char;
        }).join('');
        // Actualizar el valor del campo
        e.target.value = valorInput;
    }

    // Limitar la longitud a 20 caracteres
    if (valorInput.length > 20) {
        e.target.value = valorInput.slice(0, 20);
    }

    // Verificar si la entrada es una cadena vacía o no cumple con la expresión regular
    if (!expresionApellido.test(e.target.value) || e.target.value.trim() === '') {
        Equipo4.campo4.style.border = "5px solid red";
        bandera4 = false;
    } else {
        Equipo4.campo4.removeAttribute("style");
        bandera4 = true;
    }
});




const expresionDescripcion = /^[^@~`;]+$/;

Equipo4.campo5.addEventListener('input', (e) => {
    let valorInput = e.target.value;

    if (!expresionDescripcion.test(valorInput)) {
        e.target.value = valorInput.replace(/[@~`;]/g, '');
    }

    if (!expresionDescripcion.test(e.target.value) || e.target.value.trim() === '') {
        Equipo4.campo5.style.border = "5px solid red";
        bandera5 = false;
    } else {
        Equipo4.campo5.removeAttribute("style");
        bandera5 = true;
    }
});