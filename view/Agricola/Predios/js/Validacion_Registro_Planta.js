var bandera1 = false;
var bandera2 = false;
var bandera3 = false;

let botonRegistrar = document.getElementById("submitButton");

botonRegistrar.addEventListener("click", (e) =>{
    //se revisa si la entrada es válida

    Validar_Nombre();
    Validar_Nombre_Cientifico();
    Validar_Descripcion();

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
            Formulario.nomPlanta.style.border = "5px solid red"; 
        }
        if (bandera2 == false){
            Formulario.nomCienti.style.border = "5px solid red"; 
        }
        if (bandera3 == false){
            Formulario.descPla.style.border = "5px solid red"; 
        }

    }
})

const expresion = {
    nombre: /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ.])[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s.]+$/
};

//Función para validar el campo de nombre
function Validar_Nombre(){
    let valorInput = Formulario.nomPlanta.value;

    valorInput = valorInput.replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ.\s]/g, '');

    // Limitar la longitud a 20 caracteres
    if (valorInput.length > 20) {
        valorInput = valorInput.slice(0, 20);
    }

    // Actualizar el valor del campo con los cambios realizados
    Formulario.nomPlanta.value = valorInput;

    // Validar si la entrada coincide con la expresión regular para el nombre
    if (!expresion.nombre.test(valorInput)) {
        Formulario.nomPlanta.style.border = "5px solid red"; 
        bandera1 = false; 
    } else {
        Formulario.nomPlanta.removeAttribute("style"); 
        bandera1 = true; 
    }

}

//Función para validar el campo de nombre
function Validar_Nombre_Cientifico(){
    let valorInput = Formulario.nomCienti.value;

    valorInput = valorInput.replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ.\s]/g, '');

    // Limitar la longitud a 20 caracteres
    if (valorInput.length > 20) {
        valorInput = valorInput.slice(0, 20);
    }

    // Actualizar el valor del campo con los cambios realizados
    Formulario.nomCienti.value = valorInput;

    // Validar si la entrada coincide con la expresión regular para el nombre
    if (!expresion.nombre.test(valorInput)) {
        Formulario.nomCienti.style.border = "5px solid red"; 
        bandera2 = false; 
    } else {
        Formulario.nomCienti.removeAttribute("style"); 
        bandera2 = true; 
    }

}

//Función para validar el campo de nombre
function Validar_Descripcion(){
    let valorInput = Formulario.descPla.value;

    valorInput = valorInput.replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ.,\-_$\s]/g, '');

    

    // Limitar la longitud a 20 caracteres
    if (valorInput.length > 100) {
        valorInput = valorInput.slice(0, 100);
    }

    // Actualizar el valor del campo con los cambios realizados
    Formulario.descPla.value = valorInput;

    if (valorInput != ""){
        Formulario.descPla.removeAttribute("style"); 
        bandera3 = true;

    } else{
        Formulario.descPla.style.border = "5px solid red"; 
        bandera3 = false
    }

}

// Agrega los listener para los eventos input de cada campo
Formulario = document.getElementById("advanced-form");
Formulario.nomPlanta.addEventListener('input', Validar_Nombre);
Formulario.nomCienti.addEventListener('input', Validar_Nombre_Cientifico);
Formulario.descPla.addEventListener('input', Validar_Descripcion);