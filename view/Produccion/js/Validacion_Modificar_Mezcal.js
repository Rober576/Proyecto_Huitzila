
let tanque = false;
let edad = false;

console.log("entra a validacion de modificar")

const expresiones = {
   
    tanque: /^[a-zA-Z0-9]*$/,
    edad: /^\d*$/ // Edad: Solo acepta números
};

form_datos.tanque.addEventListener('input', (e) => {
    let valorInput = e.target.value;

    // Limitar la longitud a 50 caracteres
    if (valorInput.length > 50) {
        valorInput = valorInput.slice(0, 50);
    }

    form_datos.tanque.value = valorInput
        .replace(/[^a-zA-Z0-9ÁÉÍÓÚÑáéíóúñ.\-/,]/g, '')
        // Reemplazar más de un espacio en blanco por solo un espacio
        .replace(/\s{2,}/g, ' ')

    if (!valorInput || !expresiones.tanque.test(valorInput)) {
        form_datos.tanque.style.border = "3px solid red";
        tanque = false;
    } else {
        form_datos.tanque.removeAttribute("style");
        tanque = true;
    }

    validar(tanque);
});

form_datos.edad.addEventListener('input', (e) => {
    let valorInput = e.target.value;
    let claseSeleccionada = document.getElementById('clase').value;
    form_datos.edad.value = valorInput;


    if (claseSeleccionada === "Reposado") {
        // Permitir valores como si fueran meses, con un máximo de 11 meses
        valorInput = valorInput.match(/^\d{0,2}(\.\d{0,2})?/)[0];
        // Verificar si el valor es mayor a 11 y ajustarlo si es necesario
        if  (parseInt(valorInput) < 1 || parseInt(valorInput) > 11) {
            form_datos.edad.style.border = "5px solid red"; 
            edad = false;
        }
    } else {
        // Validar la edad estándar
        valorInput = valorInput.match(/^\d{0,3}(\.\d{0,2})?/)[0];
    }

    // Limitar la longitud a 50 caracteres
    if (valorInput.length > 50) {
        valorInput = valorInput.slice(0, 50);
    }

    form_datos.edad.value = valorInput;

    if (claseSeleccionada === "Blanco") {
        // Si la clase seleccionada es "Blanco", no aplicar validación de edad
        // Restablecer estilo del campo de edad
        form_datos.edad.removeAttribute("style");
        edad = true;
    } else if (claseSeleccionada === "Reposado") {
          // Verificar si el valor es mayor a 11 y ajustarlo si es necesario
        if  (parseInt(valorInput) < 1 || parseInt(valorInput) > 11) {
        form_datos.edad.style.border = "5px solid red"; 
        edad = false;
        }
        else{
            // Permitir valores como si fueran meses, no aplicar validación de edad
        form_datos.edad.removeAttribute("style");
        edad = true;}
    } else {
        // Aplicar validación de edad si la clase no es "Blanco" ni "Reposado"
        if (!valorInput || !expresiones.edad.test(valorInput)) {
            form_datos.edad.style.border = "3px solid red";
            edad = false;
        } else {
            form_datos.edad.removeAttribute("style");
            edad = true;
        }
    }

    validar(edad);
});


function validar(bandera){
    const guardar = document.getElementById('submitButton');

    if(bandera == false){              
        guardar.disabled=true;
        
    }else{
        guardar.disabled=false;
    }

}