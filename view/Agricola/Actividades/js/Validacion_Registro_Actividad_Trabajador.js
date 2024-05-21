
var bandera4 = false;
var bandera5 = false;
var bandera6 = false;
var bandera7 = false;
var bandera8 = false;
var bandera9 = false;
var bandera10 = false;
var bandera12 = false;


document.addEventListener("DOMContentLoaded", function () {
    //const boton = document.getElementById("anadirGasto");
    
  
    Validar_Gasto_Gasolina()
    
    Validar_Gastos_Liquidos()
    Validar_Compra_Material()
    Validar_Gastos_Extra()

  
    
    //boton.addEventListener("click", central);
});
function central(){


    Validar_Nombre_Trabajador()
    Validar_Gasto_Gasolina()
    Validar_Datos_Vehiculo()
    Validar_Gastos_Liquidos()
    Validar_Compra_Material()
    Validar_Gastos_Extra()
    Validar_Actividad_Desarrollada()
    validar_Dias()
    


    if(bandera4 == true && bandera5 == true && bandera6 == true && bandera7 == true && bandera8 == true && bandera9 == true && bandera10 == true && bandera12 == true  ){
      
       return true
    }
    else{
        console.log("Envío cancelado");
       
       
        console.log(bandera4)
        console.log(bandera5)
        console.log(bandera6)
        console.log(bandera7)
        console.log(bandera8)
        console.log(bandera9)
        console.log(bandera10)
     
  
      
        return false
    }
}




function Validar_Nombre_Trabajador() {
    let valorInput = Formulario.nomTrab.value;

     if (valorInput.length > 40) {
        valorInput = valorInput.slice(0, 40);
    }

    valorInput = valorInput.replace(/[^a-zA-ZñÑ\s]/g, '');

   Formulario.nomTrab.value = valorInput;

   if (valorInput.trim() === "") {
        Formulario.nomTrab.style.border = "5px solid red";
       bandera4 = false;
    } else {
        Formulario.nomTrab.removeAttribute("style");
         bandera4 = true;
    }
}


function Validar_Gasto_Gasolina() {
    let valorInput = Formulario.gasGas.value;

    if (valorInput.trim() === "") {
        valorInput = "0";
    }

    valorInput = valorInput.replace(/[^\d.]+|(?<=\.\d{2})\d+/g, '');

   valorInput = valorInput.replace(/^0+(?=\d)/, '');

    if (valorInput.length > 10) {
        valorInput = valorInput.slice(0, 10);
    }

    Formulario.gasGas.value = valorInput;

    if (!/^(\d{1,10}(\.\d{0,2})?)?$/.test(valorInput)) {
        Formulario.gasGas.style.border = "5px solid red";
        bandera5 = false;
    } else {
       Formulario.gasGas.removeAttribute("style");
       bandera5 = true;
    }
}


function Validar_Datos_Vehiculo() {
    let valorInput = Formulario.desVei.value;

    if (valorInput.trim() !== "") {
        if (valorInput.length > 40) {
            valorInput = valorInput.slice(0, 40);
        }

        valorInput = valorInput.replace(/[^a-zA-Z0-9\s]/g, '');

        if (/^[a-zA-Z0-9\s]*$/.test(valorInput)) {
            bandera6 = true;
        } else {
            bandera6 = false;
        }

        Formulario.desVei.value = valorInput;
    } else {
        bandera6 = true;
    }
}
function Validar_Gastos_Liquidos() {
    let valorInput = Formulario.gasLiq.value.trim();

    if (valorInput === "") {
        valorInput = "0";
    }

    valorInput = valorInput.replace(/[^0-9.]/g, '');

    let partes = valorInput.split('.');
    if (partes[0].length > 10) {
        partes[0] = partes[0].slice(0, 10);
    }

    if (partes.length > 1 && partes[1].length > 2) {
        partes[1] = partes[1].slice(0, 2);
    }

    valorInput = partes.join('.');

    Formulario.gasLiq.value = valorInput;

    if (!/^(\d{1,10}(\.\d{0,2})?)?$/.test(valorInput)) {
        Formulario.gasLiq.style.border = "5px solid red";
        bandera7 = false;
    } else {
        Formulario.gasLiq.removeAttribute("style");
        bandera7 = true;
    }
}



function Validar_Compra_Material() {
    let valorInput = Formulario.gasMat.value;

    if (valorInput.trim() === "") {
        valorInput = "0";
    }

    valorInput = valorInput.replace(/[^\d.]+|(?<=\.\d{2})\d+/g, '');

    valorInput = valorInput.replace(/^0+(?=\d)/, '');

    if (valorInput.length > 10) {
        valorInput = valorInput.slice(0, 10);
    }

    Formulario.gasMat.value = valorInput;

    if (!/^(\d{1,10}(\.\d{0,2})?)?$/.test(valorInput)) {
        Formulario.gasMat.style.border = "5px solid red";
        bandera8 = false;
    } else {
        Formulario.gasMat.removeAttribute("style");
        bandera8 = true;
    }
}

function Validar_Gastos_Extra() {
    let valorInput = Formulario.gasExt.value;

    if (valorInput.trim() === "") {
       valorInput = "0";
    }

    valorInput = valorInput.replace(/[^\d.]+|(?<=\.\d{2})\d+/g, '');

    valorInput = valorInput.replace(/^0+(?=\d)/, '');

    if (valorInput.length > 10) {
        valorInput = valorInput.slice(0, 10);
    }

    Formulario.gasExt.value = valorInput;

    if (!/^(\d{1,10}(\.\d{0,2})?)?$/.test(valorInput)) {
        Formulario.gasExt.style.border = "5px solid red";
        bandera9 = false;
    } else {
        Formulario.gasExt.removeAttribute("style");
        bandera9 = true;
    }
}



function Validar_Actividad_Desarrollada() {
    let valorInput = Formulario.actDes.value;

    if (valorInput.length > 300) {
        valorInput = valorInput.slice(0, 300);
    }
    else{
        bandera10 = true;
        Formulario.actDes.removeAttribute("style");
    }

   Formulario.actDes.value = valorInput;

    if (valorInput.trim() !== "") {
        bandera10 = true;
    } else {
        bandera10 = false;
        Formulario.actDes.style.border = "5px solid red";
    }
}




function validar_Dias() {
    
    const checkboxes = document.querySelectorAll('.custom-checkbox');

   
    let seleccionados = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            seleccionados++;
            checkbox.style.border = ''; 
        } else {
            checkbox.style.border = '1px solid red'; 
        }
    });

   if (seleccionados === 0) {
        alert("Debes seleccionar al menos un día trabajado.");
        bandera12 = false;
    } else {
        bandera12 = true;
    }
}




Formulario = document.getElementById("advanced-form");



Formulario.nomTrab.addEventListener('input', Validar_Nombre_Trabajador);
Formulario.gasGas.addEventListener('input', Validar_Gasto_Gasolina);
Formulario.desVei.addEventListener('input', Validar_Datos_Vehiculo);
Formulario.gasLiq.addEventListener('input', Validar_Gastos_Liquidos);
Formulario.gasMat.addEventListener('input', Validar_Compra_Material);
Formulario.gasExt.addEventListener('input', Validar_Gastos_Extra);
Formulario.actDes.addEventListener('input', Validar_Actividad_Desarrollada);

