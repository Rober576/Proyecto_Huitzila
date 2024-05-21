document.addEventListener('DOMContentLoaded', function() {

var bandera1 = false;
var bandera2 = false;
var bandera3 = false;
var bandera20 = false;

var bandera11= false;

let botonRegistrar = document.getElementById("submitButton");

window.addEventListener('load', (event) => {
    Validar_Cantidad_Semanas();

    
    
    Validar_Costo_General()
});


botonRegistrar.addEventListener("click", (e) =>{

    Validar_Cantidad_Semanas()
    Validar_Plantacion_Seleccionada()
    Validar_Costo_General()
    Validar_Descripcion_Actividad()
   
    Validar_Fecha()
    


    if(bandera1 == true && bandera2 == true && bandera3 == true  && bandera11 == true && bandera20 == true){
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
        if (bandera20 == false){
            Formulario.platacionSele.style.border = "5px solid red"; 
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

function Validar_Plantacion_Seleccionada() {
    let seleccion = Formulario.platacionSele.value;

    if (seleccion.trim() === "") {
        Formulario.plantacionSele.style.border = "5px solid red";
        bandera20 = false;
    } else {
        Formulario.plantacionSele.removeAttribute("style");
        bandera20 = true;
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





function limpiarOpciones(actividadSele) {
    if (actividadSele) {
        while (actividadSele.firstChild) {
            actividadSele.removeChild(actividadSele.firstChild);
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
Formulario.platacionSele.addEventListener('input', Validar_Plantacion_Seleccionada);
Formulario.fechaIni.addEventListener('input', Validar_Fecha);

})