let bandera1 = false;
let bandera2 = false;
let bandera3 = false;

let botonRegistrar = document.getElementById("submitButton");


botonRegistrar.addEventListener("click", (e) =>{
    //se revisa si la entrada es válida
    if(bandera1 == true && bandera2 == true && bandera3 == true){
        //si es válida se muestra un mensaje de éxito
        console.log("Registro exitoso");
    }
    else{
        //si no es válida se cancela el envío
        console.log("Envío cancelado");
        e.preventDefault();
        console.log(bandera1)
        console.log(bandera2)
        console.log(bandera3)

        if (bandera1 == false){
            Formulario.codArea.style.border = "5px solid red"; 
        }
        if (bandera2 == false){
            Formulario.nomPred.style.border = "5px solid red"; 
        }
        if (bandera3 == false){
            Formulario.superfPre.style.border = "5px solid red"; 
        }
    }
})

const expresion = {
    clave: /^[a-zA-Z0-9]{5}[a-zA-Z0-9]*$/,
    superficie: /^[0-9]+(\.[0-9]*)?$/,
    nombre: /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9.])[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9\s.]+$/
};

//Función para validar la clave
function Validar_Clave(){
    let valorInput = Formulario.codArea.value;

    // Eliminar todos los caracteres no numéricos
    valorInput = valorInput.replace(/[^a-zA-Z0-9]/g, '');


    // Limitar la longitud a 10 caracteres
    if (valorInput.length > 10) {
        valorInput = valorInput.slice(0, 10);
    }

    // Actualizar el valor del campo con los cambios realizados
    Formulario.codArea.value = valorInput;
   
    // Validar si la entrada coincide con la expresión regular para LA CLAVE
    if (!expresion.clave.test(valorInput)) {
        Formulario.codArea.style.border = "5px solid red"; 
        bandera1 = false; 
    } else {
        Formulario.codArea.removeAttribute("style"); 
        bandera1 = true; 
    }
}

//Función para validar el campo de nombre
function Validad_Nombre(){
    let valorInput = Formulario.nomPred.value;

    valorInput = valorInput.replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9.\s]/g, '');

    // Limitar la longitud a 20 caracteres
    if (valorInput.length > 20) {
        valorInput = valorInput.slice(0, 20);
    }

    // Actualizar el valor del campo con los cambios realizados
    Formulario.nomPred.value = valorInput;

    // Validar si la entrada coincide con la expresión regular para el nombre
    if (!expresion.nombre.test(valorInput)) {
        Formulario.nomPred.style.border = "5px solid red"; 
        bandera2 = false; 
    } else {
        Formulario.nomPred.removeAttribute("style"); 
        bandera2 = true; 
    }

}

//Función para validar el campo de superficie
function Validar_Superficie() {
    let campo = Formulario.superfPre;
    let inicioSeleccion = campo.selectionStart;
    let finSeleccion = campo.selectionEnd;

    let valorInput = campo.value;

    // Limitar la longitud a 5 caracteres
    if (valorInput.length > 5) {
        // Guardar la posición del cursor antes de truncar el valor
        let cursorOffset = inicioSeleccion - (valorInput.length - 5);
        valorInput = valorInput.slice(0, 5);
        // Actualizar el valor del campo con los cambios realizados
        campo.value = valorInput;
        // Restaurar la posición del cursor
        campo.setSelectionRange(inicioSeleccion - cursorOffset, finSeleccion - cursorOffset);
    }

    // Validar si la entrada coincide con la expresión regular para el nombre
    if (!expresion.superficie.test(valorInput)) {
        Formulario.superfPre.style.border = "5px solid red"; 
        bandera3 = false; 
    } else {
        Formulario.superfPre.removeAttribute("style"); 
        bandera3 = true; 
    }
}

//Función para validar el campo de descripción
function Validar_Descripcion(){
    let valorInput = Formulario.descPre.value;

    // Limitar la longitud a 120 caracteres
    if (valorInput.length > 120) {
        valorInput = valorInput.slice(0, 120);
    }

    // Actualizar el valor del campo con los cambios realizados
    Formulario.descPre.value = valorInput;
}





// Agrega los listener para los eventos input de cada campo

Formulario = document.getElementById("advanced-form");
Formulario.codArea.addEventListener('input', Validar_Clave);
Formulario.nomPred.addEventListener('input', Validad_Nombre);
Formulario.superfPre.addEventListener('input', Validar_Superficie);
Formulario.descPre.addEventListener('input', Validar_Descripcion);
