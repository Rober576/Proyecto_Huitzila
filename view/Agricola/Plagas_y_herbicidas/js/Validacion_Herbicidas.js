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
            Formulario.nomHerb.style.border = "5px solid red"; 
        }
        if (bandera2 == false){
            Formulario.fabriHerb.style.border = "5px solid red"; 
        }
        if (bandera3 == false){
            Formulario.descHerb.style.border = "5px solid red"; 
        }

    }
})

const expresion = {
    nombre: /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ.])[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s.]+$/
};


//Función para validar el campo de nombre
function Validar_Nombre(){
    let valorInput = Formulario.nomHerb.value;

    valorInput = valorInput.replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ.\s]/g, '');

    // Limitar la longitud a 20 caracteres
    if (valorInput.length > 40) {
        valorInput = valorInput.slice(0, 40);
    }

    // Actualizar el valor del campo con los cambios realizados
    Formulario.nomHerb.value = valorInput;

    // Validar si la entrada coincide con la expresión regular para el nombre
    if (!expresion.nombre.test(valorInput)) {
        Formulario.nomHerb.style.border = "5px solid red"; 
        bandera1 = false; 
    } else {
        Formulario.nomHerb.removeAttribute("style"); 
        bandera1 = true; 
    }

}


//Función para validar el campo de nombre cientifico
function Validar_Nombre_Cientifico(){
    let valorInput = Formulario.fabriHerb.value;

    valorInput = valorInput.replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ.\s]/g, '');

    // Limitar la longitud a 20 caracteres
    if (valorInput.length > 60) {
        valorInput = valorInput.slice(0, 60);
    }

    // Actualizar el valor del campo con los cambios realizados
    Formulario.fabriHerb.value = valorInput;

    // Validar si la entrada coincide con la expresión regular para el nombre
    if (!expresion.nombre.test(valorInput)) {
        Formulario.fabriHerb.style.border = "5px solid red"; 
        bandera2 = false; 
    } else {
        Formulario.fabriHerb.removeAttribute("style"); 
        bandera2 = true; 
    }

}

//Función para validar el campo de nombre
function Validar_Descripcion(){
    let valorInput = Formulario.descHerb.value;

    // Limitar la longitud a 20 caracteres
    if (valorInput.length > 200) {
        valorInput = valorInput.slice(0, 200);
    }

    // Actualizar el valor del campo con los cambios realizados
    Formulario.descHerb.value = valorInput;

    if (valorInput != ""){
        Formulario.descHerb.removeAttribute("style"); 
        bandera3 = true;

    } else{
        Formulario.descHerb.style.border = "5px solid red"; 
        bandera3 = false
    }

}

// Agrega los listener para los eventos input de cada campo
Formulario = document.getElementById("advanced-form");
Formulario.nomHerb.addEventListener('input', Validar_Nombre);
Formulario.fabriHerb.addEventListener('input', Validar_Nombre_Cientifico);
Formulario.descHerb.addEventListener('input', Validar_Descripcion);