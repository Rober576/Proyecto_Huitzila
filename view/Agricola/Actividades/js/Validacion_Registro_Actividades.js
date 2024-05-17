document.addEventListener('DOMContentLoaded', function() {

var bandera1 = false;
var bandera2 = false;
var bandera3 = false;

var paso = false;
try{
    Formulario = document.getElementById("advanced-form");
    let valorInicial = Formulario.canFecha2.value.trim(); // Obtener el valor inicial y eliminar espacios en blanco
    let minimoPermitido = parseInt(valorInicial);
}catch{
    
}
var bandera11= false;

let botonRegistrar = document.getElementById("submitButton");

window.addEventListener('load', (event) => {
    Validar_Cantidad_Semanas();
    try{
    let valorInicial = Formulario.canFecha2.value.trim(); // Obtener el valor inicial y eliminar espacios en blanco
    Validar_Cantidad_Semanas2();
    }catch{

    }
    
    
    Validar_Costo_General()
});


botonRegistrar.addEventListener("click", (e) =>{

    Validar_Cantidad_Semanas()
    Validar_Cantidad_Semanas2()
    Validar_Costo_General()
    Validar_Descripcion_Actividad()
   
    Validar_Fecha()
    


    if(bandera1 == true && bandera2 == true && bandera3 == true  && bandera11 == true){
       console.log("Registro exitoso");
    }
    else{
        console.log("Envío cancelado");
        e.preventDefault();
        console.log(bandera1)
        console.log(bandera2)
        console.log(bandera3)
     
        console.log(bandera11)
  
        if (bandera1 == false){
            Formulario.canFecha.style.border = "5px solid red"; 
        }
        if (bandera2 == false){
            Formulario.cosGenral.style.border = "5px solid red"; 
        }
        if (bandera3 == false){
            Formulario.descAct.style.border = "5px solid red"; 
        }
        if (bandera11 == false){
            Formulario.fechaIni.style.border = "5px solid red"; 
        }
    }
      

    
})

function Validar_Cantidad_Semanas() {

    let valorInput = Formulario.canFecha.value;

   
    valorInput = valorInput.replace(/[^\d]/g, '');

    
    if (valorInput.length > 1) {
        valorInput = valorInput.slice(0, 1);
    }

   
    if (!/^[1-4]$/.test(valorInput)) {
        valorInput = "1";
    }

 
    Formulario.canFecha.value = valorInput;


    if (parseInt(valorInput) < 1 || parseInt(valorInput) > 4) {
        Formulario.canFecha.style.border = "5px solid red";
        bandera1 = false;
    } else {
        Formulario.canFecha.removeAttribute("style");
        bandera1 = true;
    }
}


function Validar_Costo_General() {
    let valorInput = Formulario.cosGenral.value;

    if (valorInput.trim() === "") {
        valorInput = "0";
    }


   valorInput = valorInput.replace(/[^\d.]+|(?<=\.\d{2})\d+/g, '');

   valorInput = valorInput.replace(/^0+(?=\d)/, '');

    if (valorInput.length > 10) {
        valorInput = valorInput.slice(0, 10);
    }

   Formulario.cosGenral.value = valorInput;

   if (!/^(\d{1,10}(\.\d{0,2})?)?$/.test(valorInput) || valorInput.trim() === "") {
        Formulario.cosGenral.style.border = "5px solid red";
        bandera2 = false;
    } else {
        Formulario.cosGenral.style.border = "";
        bandera2 = true;
    }
}


function Validar_Descripcion_Actividad() {
    let valorInput = Formulario.descAct.value;

   if (valorInput.length > 300) {
        valorInput = valorInput.slice(0, 300);
        bandera3 = true;
    }

    else{
        bandera3 = true;
    }
    Formulario.descAct.value = valorInput;


}






function Validar_Fecha() {
    let fechaInput = Formulario.fechaIni.value;

    if (fechaInput == ""){
        Formulario.fechaIni.style.border = "5px solid red"; 
        bandera11 = false;
    } else{
        Formulario.fechaIni.removeAttribute("style");
        bandera11 = true;
    }

}

function Validar_Cantidad_Semanas2() {

    if (paso == false) {
        let valorInicial = Formulario.canFecha2.value.trim(); // Obtener el valor inicial y eliminar espacios en blanco
  
        // Si el valor inicial es 4, deshabilitar el campo y salir de la función
        if (valorInicial === "4") {
            Formulario.canFecha2.disabled = true;
        }
        paso = true;
        toggleSections()
    }

    else{
    
        let valorInput = Formulario.canFecha2.value.trim().replace(/[^\d]/g, ''); // Obtener el valor del campo y eliminar espacios en blanco
      
        if (valorInput<minimoPermitido){
            
            Formulario.canFecha2.value=minimoPermitido
        }
        toggleSections()
        // Limitar el número de caracteres a uno
        if (valorInput.length > 1) {
            valorInput = valorInput.slice(0, 1);
        }

        // Si el valor de entrada es menor que el mínimo permitido, establecerlo como el mínimo permitido
        valorInput = Math.max(minimoPermitido, parseInt(valorInput));

        // Establecer el valor en el campo
        Formulario.canFecha2.value = valorInput;

        // Validar el rango permitido y aplicar estilo correspondiente
        if (parseInt(valorInput) > 4) {
            Formulario.canFecha2.style.border = "5px solid red";
            bandera1 = false;
        } else {
            Formulario.canFecha2.removeAttribute("style");
            bandera1 = true;
    
        }
    }
}




function limpiarOpciones(actividadSele) {
    if (actividadSele) {
        while (actividadSele.firstChild) {
            actividadSele.removeChild(actividadSele.firstChild);
        }
    }
}



// Función para manejar la visibilidad de las secciones
function toggleSections() {
    // Si se selecciona 'Sí', mostrar la segunda sección y ocultar la tercera
    
        section2.style.display = 'block';
        section3.style.display = 'block';



        const CantidadTrabajado = document.getElementById("canFecha2").value;


        const actividadSele = document.getElementById('semSele');
        const General = document.getElementById("cosGenral").value;
        const CostoGeneral = parseFloat(General);
        //document.getElementById("total").value = CostoGeneral;

        limpiarOpciones(actividadSele);
        for (let i = 1; i <= CantidadTrabajado; i++) {
            const item = `Semana ${i}`; 
            var option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            if (actividadSele) {
                actividadSele.appendChild(option);
            } 
                    
        }

    }










Formulario = document.getElementById("advanced-form");

Formulario.canFecha.addEventListener('input', Validar_Cantidad_Semanas);
try{
    Formulario.canFecha2.addEventListener('input', Validar_Cantidad_Semanas2);
}
catch{
    
}

Formulario.cosGenral.addEventListener('input', Validar_Costo_General);
Formulario.descAct.addEventListener('input', Validar_Descripcion_Actividad);

Formulario.fechaIni.addEventListener('input', Validar_Fecha);

})