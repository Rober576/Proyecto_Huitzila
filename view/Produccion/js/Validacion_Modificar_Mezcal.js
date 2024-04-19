
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

    form_datos.tanque.value = valorInput;

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

    // Obtener el valor del campo de clase
    let claseSeleccionada = document.getElementById('clase').value;

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
    } else {
        // Aplicar validación de edad si la clase no es "Blanco"
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



// Expresiones regulares para validar los campos


function validar(bandera){
    const guardar = document.getElementById('submitButton');

    if(bandera == false){              
        guardar.disabled=true;
        
    }else{
        guardar.disabled=false;
    }

}