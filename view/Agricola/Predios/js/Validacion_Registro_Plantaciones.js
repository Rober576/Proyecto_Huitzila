var bandera1 = false;
var bandera2 = false;
var bandera3 = false;
var bandera4 = false;
var bandera5 = false;
var bandera6 = false;
var bandera7 = false;
var bandera8 = false;
var bandera9 = false;

let botonRegistrar = document.getElementById("submitButton");


botonRegistrar.addEventListener("click", (e) =>{
    //se revisa si la entrada es válida

    Validar_Clave();
    Validar_Numero_Plantas();
    Validar_Superficie();
    Validar_Nombre();
    Validar_Datos_Vehiculo();
    Validar_Costo_Gasolina();
    Validar_Costo_Material();
    Validar_Fecha_Inicio_Fin();
    Validar_Inicio();
    Validar_Fin();
    Validar_Fecha_Plantacion();


    if(bandera1 == true && bandera2 == true && bandera3 == true && bandera4 == true && bandera5 == true && bandera6 == true && bandera7 == true && bandera8 == true && bandera9 == true ){
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
        console.log(bandera4)
        console.log(bandera5)
        console.log(bandera6)
        console.log(bandera7)
        console.log(bandera8)
        console.log(bandera9)

        if (bandera1 == false){
            Formulario.codPlantacion.style.border = "5px solid red"; 
        }
        if (bandera2 == false){
            Formulario.canPlan.style.border = "5px solid red"; 
        }
        if (bandera3 == false){
            Formulario.superfPre.style.border = "5px solid red"; 
        }
        if (bandera4 == false){
            Formulario.nomTraba.style.border = "5px solid red"; 
        }
        if (bandera5 == false){
            Formulario.datVec.style.border = "5px solid red"; 
        }
        if (bandera6 == false){
            Formulario.costGas.style.border = "5px solid red"; 
        }
        if (bandera7 == false){
            Formulario.cosMate.style.border = "5px solid red"; 
        }
        if (bandera8 == false){
            Formulario.fecIni.style.border = "5px solid red"; 
            Formulario.fecFin.style.border = "5px solid red"; 
        }
        if (bandera9 == false){
            Formulario.fecPlant.style.border = "5px solid red"; 
        }

    }
})
const expresion = {
    clave: /^[a-zA-Z0-9]{5}[a-zA-Z0-9]*$/,
    cantidadPlantas: /^[0-9]+$/,    
    superficie: /^[0-9]+(\.[0-9]*)?$/,
    nombre: /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9.])[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9\s.]+$/
};


//Función para validar la clave
function Validar_Clave(){
    let valorInput = Formulario.codPlantacion.value;

    // Eliminar todos los caracteres no numéricos
    valorInput = valorInput.replace(/[^a-zA-Z0-9]/g, '');


    // Limitar la longitud a 10 caracteres
    if (valorInput.length > 10) {
        valorInput = valorInput.slice(0, 10);
    }

    // Actualizar el valor del campo con los cambios realizados
    Formulario.codPlantacion.value = valorInput;
   
    // Validar si la entrada coincide con la expresión regular para LA CLAVE
    if (!expresion.clave.test(valorInput)) {
        Formulario.codPlantacion.style.border = "5px solid red"; 
        bandera1 = false; 
    } else {
        Formulario.codPlantacion.removeAttribute("style"); 
        bandera1 = true; 
    }
}

//Función para validar el campo numero de plantas
function Validar_Numero_Plantas() {
    let valorInput = Formulario.canPlan.value;

    // Eliminar todos los caracteres no numéricos
    valorInput = valorInput.replace(/[^\d]/g, '');


    // Limitar la longitud a 10 caracteres
    if (valorInput.length > 5) {
        valorInput = valorInput.slice(0, 10);
    }

    // Actualizar el valor del campo con los cambios realizados
    Formulario.canPlan.value = valorInput;
   
    // Validar si la entrada coincide con la expresión 
    if (!expresion.cantidadPlantas.test(valorInput)) {
        Formulario.canPlan.style.border = "5px solid red"; 
        bandera2 = false; 
    } else {
        Formulario.canPlan.removeAttribute("style"); 
        bandera2 = true; 
    }
}

//Función para validar el campo de superficie
function Validar_Superficie() {
    let valorInput = Formulario.superfPre.value;

    // Eliminar todos los caracteres no numéricos
    valorInput = valorInput.replace(/[^\d.]+|(?<=\.\d*)\./g, '');



    // Limitar la longitud a 10 caracteres
    if (valorInput.length > 5) {
        valorInput = valorInput.slice(0, 5);
    }

    // Actualizar el valor del campo con los cambios realizados
    Formulario.superfPre.value = valorInput;
   
    // Validar si la entrada coincide con la expresión regular para LA CLAVE
    if (!expresion.superficie.test(valorInput)) {
        Formulario.superfPre.style.border = "5px solid red"; 
        bandera3 = false; 
    } else {
        Formulario.superfPre.removeAttribute("style"); 
        bandera3 = true; 
    }
}

//Función para validar el campo de nombre
function Validar_Nombre(){
    let valorInput = Formulario.nomTraba.value;

    valorInput = valorInput.replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9.\s]/g, '');

    // Limitar la longitud a 20 caracteres
    if (valorInput.length > 30) {
        valorInput = valorInput.slice(0, 30);
    }

    // Actualizar el valor del campo con los cambios realizados
    Formulario.nomTraba.value = valorInput;

    // Validar si la entrada coincide con la expresión regular para el nombre
    if (!expresion.nombre.test(valorInput)) {
        Formulario.nomTraba.style.border = "5px solid red"; 
        bandera4 = false; 
    } else {
        Formulario.nomTraba.removeAttribute("style"); 
        bandera4 = true; 
    }

}

//Función para validar el campo de nombre
function Validar_Datos_Vehiculo(){
    let valorInput = Formulario.datVec.value;

    valorInput = valorInput.replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9.()#,"'-\s]/g, '');

    // Limitar la longitud a 20 caracteres
    if (valorInput.length > 70) {
        valorInput = valorInput.slice(0, 70);
    }

    // Actualizar el valor del campo con los cambios realizados
    Formulario.datVec.value = valorInput;

    // Validar si la entrada coincide con la expresión regular para el nombre
    if (valorInput.trim() === "") {
        Formulario.datVec.style.border = "5px solid red"; 
        bandera5 = false; 
    } else {
        Formulario.datVec.removeAttribute("style"); 
        bandera5 = true; 
    }

}

//Función para validar el campo de superficie
function Validar_Costo_Gasolina() {
    let valorInput = Formulario.costGas.value;

    // Eliminar todos los caracteres no numéricos
    valorInput = valorInput.replace(/[^\d.]+|(?<=\.\d*)\./g, '');



    // Limitar la longitud a 10 caracteres
    if (valorInput.length > 10) {
        valorInput = valorInput.slice(0, 10);
    }

    // Actualizar el valor del campo con los cambios realizados
    Formulario.costGas.value = valorInput;
   
    // Validar si la entrada coincide con la expresión regular para LA CLAVE
    if (!expresion.superficie.test(valorInput)) {
        Formulario.costGas.style.border = "5px solid red"; 
        bandera6 = false; 
    } else {
        Formulario.costGas.removeAttribute("style"); 
        bandera6 = true; 
    }
}

//Función para validar el campo de superficie
function Validar_Costo_Material() {
    let valorInput = Formulario.cosMate.value;

    // Eliminar todos los caracteres no numéricos
    valorInput = valorInput.replace(/[^\d.]+|(?<=\.\d*)\./g, '');



    // Limitar la longitud a 10 caracteres
    if (valorInput.length > 10) {
        valorInput = valorInput.slice(0, 10);
    }

    // Actualizar el valor del campo con los cambios realizados
    Formulario.cosMate.value = valorInput;
   
    // Validar si la entrada coincide con la expresión regular para LA CLAVE
    if (!expresion.superficie.test(valorInput)) {
        Formulario.cosMate.style.border = "5px solid red"; 
        bandera7 = false; 
    } else {
        Formulario.cosMate.removeAttribute("style"); 
        bandera7 = true; 
    }
}

//Funcion validar fechas inicio y fin
function Validar_Fecha_Inicio_Fin(){
    let fechaInicio = Formulario.fecIni.value;
    let fechaFin = Formulario.fecFin.value;

    if (fechaInicio > fechaFin) {
        Formulario.fecIni.style.border = "5px solid red"; 
        Formulario.fecFin.style.border = "5px solid red"; 
        bandera8 = false; 
    } else {
        Formulario.fecIni.removeAttribute("style"); 
        Formulario.fecFin.removeAttribute("style"); 
        bandera8 = true; 
    }

    if (fechaInicio == ""){
        Formulario.fecIni.style.border = "5px solid red";
    }
    
    if (fechaFin == ""){
        Formulario.fecFin.style.border = "5px solid red";

    }
    
}

function Validar_Inicio(){
    let fechaInicio = Formulario.fecIni.value;
    let fechaFin = Formulario.fecFin.value;
    if (fechaInicio != ""){
        Formulario.fecIni.removeAttribute("style"); 
    }

    if (fechaInicio < fechaFin){
        Formulario.fecIni.removeAttribute("style");
        Formulario.fecFin.removeAttribute("style");
    }
}

function Validar_Fin(){
    let fechaInicio = Formulario.fecIni.value;
    let fechaFin = Formulario.fecFin.value;
    if (fechaFin != ""){
        Formulario.fecFin.removeAttribute("style"); 
    }
    if (fechaInicio < fechaFin){
        Formulario.fecIni.removeAttribute("style");
        Formulario.fecFin.removeAttribute("style");
    }

}

function Validar_Fecha_Plantacion(){
    let fechaPlantacion = Formulario.fecPlant.value;

    if (fechaPlantacion == ""){
        Formulario.fecPlant.style.border = "5px solid red"; 
        bandera9 = false;
    } else{
        Formulario.fecPlant.removeAttribute("style");
        bandera9 = true;
    }
}

// Agrega los listener para los eventos input de cada campo
Formulario = document.getElementById("advanced-form");
Formulario.canPlan.addEventListener('input', Validar_Numero_Plantas);
Formulario.codPlantacion.addEventListener('input', Validar_Clave);
Formulario.superfPre.addEventListener('input', Validar_Superficie);
Formulario.nomTraba.addEventListener('input', Validar_Nombre);
Formulario.datVec.addEventListener('input', Validar_Datos_Vehiculo);
Formulario.costGas.addEventListener('input', Validar_Costo_Gasolina);
Formulario.cosMate.addEventListener('input', Validar_Costo_Material);
Formulario.fecIni.addEventListener('input', Validar_Inicio);
Formulario.fecFin.addEventListener('input', Validar_Fin);
Formulario.fecPlant.addEventListener('input', Validar_Fecha_Plantacion);