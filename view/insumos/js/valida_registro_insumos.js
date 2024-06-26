//Se crean banderas para controlar si es válido el campo de entrada
let bandera1 = false;
let bandera2 = false;
let bandera3 = false;
let bandera4 = false;
let bandera5 = true;
let bandera6 = false;
let bandera7 = false;
let bandera8 = false;


// Se pone un escuchador de eventos para el botón, para que cuando se haga click se ejecute la función
let botonRegistrar = document.getElementById("registrar");
botonRegistrar.addEventListener("click", (e) => {
    // se revisa si todas las entradas son válidas
    if (bandera1 && bandera2 && bandera3 && bandera4 && bandera5 && bandera6 && bandera7 && bandera8) {
        // si todas son válidas se muestra un mensaje de éxito
        console.log("Registro exitoso");
    } else {
        // si alguna no es válida se cancela el envío
        //alert("Uno o más campos están vacios o son incorrectos \nPor favor verifique nuevamente.")
        console.log("Envío cancelado");
        e.preventDefault();
    }
});



// Definición de la expresión regular para cada campo
const expresion = {
    Identificador: /^[a-zA-Z0-9\s]{1,40}$/,
    Nombre: /^[a-zA-Z0-9\s.ñÑ]{1,50}$/,
    Descripcion: /^$|^[a-zA-Z0-9\s.,_-]{1,100}$/,
    Unidades: /^[a-zA-Z\s]{1,10}$/,
    Existencia: /^\d+$/,
    FechaReg: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/,
    Stockmi: /^\d+$/,
    Stockma: /^\d+$/,
    Costo: /^\d+(\.\d{1,2})?$/,
};


// Escuchador de eventos para el campo Identificador
insumos_form.Identificador.addEventListener('input', (e) =>{
    let valorInput = e.target.value;

    // Elimina los simbolos especiales del valor de entrada
    valorInput = valorInput.replace(/[^a-zA-Z0-9]/g, '');
    //Elimina los caracteres extra cuando sobrepasa de los 40
    if (valorInput.length > 40) {
        valorInput = valorInput.substring(0, 40);
    }


    // Asigna el valor al campo
    insumos_form.Identificador.value = valorInput;

    // Verifica con la expresión regular
    if(!expresion.Identificador.test(valorInput)){
        insumos_form.Identificador.style.border = "5px solid red";
        bandera1 = false;
    } else {
        insumos_form.Identificador.removeAttribute("style");
        bandera1 = true;
    }
});


insumos_form.Nombre.addEventListener('input', (e) =>{
    let valorInput = e.target.value;

    
    valorInput = valorInput.replace(/[^a-zA-Z0-9ñÑ.\s]/g, '');

    if (valorInput.length > 50) {
        valorInput = valorInput.substring(0, 50);
    }

    insumos_form.Nombre.value = valorInput;


    if(!expresion.Nombre.test(valorInput)){
        insumos_form.Nombre.style.border = "5px solid red";
        bandera2 = false;
    } else {
        insumos_form.Nombre.removeAttribute("style");
        bandera2 = true;
    }
});

// Escuchador de eventos para el campo Descripcion
insumos_form.Descripcion.addEventListener('keyup', (e) =>{
    let valorInput = e.target.value;

    // Elimina los simbolos especiales del valor de entrada excepto (puntos, comas, guiones bajos y guiones)
    valorInput = valorInput.replace(/[^\w\s\d.,_-]/g, '');
    //Elimina los caracteres extra cuando sobrepasa de los 100
    if (valorInput.length > 100) {
        valorInput = valorInput.substring(0, 100);
    }


    // Asigna el valor al campo
    insumos_form.Descripcion.value = valorInput;

    // Verifica con la expresión regular
    if(!expresion.Descripcion.test(valorInput)){
        insumos_form.Descripcion.style.border = "5px solid red";
        bandera3 = false;
    } else {
        insumos_form.Descripcion.removeAttribute("style");
        bandera3 = true;
    }
});


// Escuchador de eventos para el campo Unidades
insumos_form.Unidades.addEventListener('input', (e) =>{
    let valorInput = e.target.value;

    // Elimina los simbolos especiales del valor de entrada
    valorInput = valorInput.replace(/[^a-zA-Z]/g, '');
    

    // Asigna el valor al campo
    insumos_form.Unidades.value = valorInput;

    // Verifica con la expresión regular
    if(!expresion.Unidades.test(valorInput)){
        insumos_form.Unidades.style.border = "5px solid red";
        bandera4 = false;
    } else {
        insumos_form.Unidades.removeAttribute("style");
        bandera4 = true;
    }
});

// Escuchador de eventos para el campo Existencia
insumos_form.Existencia.addEventListener('keyup', (e) =>{
    let valorInput = e.target.value;

    // Asigna el valor al campo
    insumos_form.Existencia.value = valorInput;

    // Verifica con la expresión regular
    if(!expresion.Existencia.test(valorInput)){
        insumos_form.Existencia.style.border = "5px solid red";
        bandera5 = false;
    } else {
        insumos_form.Existencia.removeAttribute("style");
        bandera5 = true;
    }
});


// Escuchador de eventos para el campo FechaReg
insumos_form.FechaReg.addEventListener('input', (e) => {
    let valorInput = e.target.value;

    // Verifica con la expresión regular
    if (!expresion.FechaReg.test(valorInput)) {
        insumos_form.FechaReg.style.border = "5px solid red";
        bandera6 = false;
    } else {
        insumos_form.FechaReg.style.border = "none";
        bandera6 = true;
    }
});



// Escuchador de eventos para el campo Stockmi
insumos_form.Stockmi.addEventListener('input', (e) =>{
    let valorInput = e.target.value;

    // Asigna el valor al campo
    insumos_form.Stockmi.value = valorInput;

    // Verifica con la expresión regular
    if(!expresion.Stockmi.test(valorInput)){
        insumos_form.Stockmi.style.border = "5px solid red";
        bandera7 = false;
    } else if (parseInt(valorInput) > parseInt(insumos_form.Stockma.value)) {
        // Verifica que Stock mínimo no sea mayor que Stock máximo
        insumos_form.Stockmi.style.border = "5px solid red";
        insumos_form.Stockma.style.border = "5px solid red";
        bandera7 = false;
        bandera8 = false;
    } else {
        insumos_form.Stockmi.removeAttribute("style");
        insumos_form.Stockma.removeAttribute("style");
        bandera7 = true;
        bandera8 = true;
    }
});


// Escuchador de eventos para el campo Stockma
insumos_form.Stockma.addEventListener('input', (e) =>{
    let valorInput = e.target.value;

    // Asigna el valor al campo
    insumos_form.Stockma.value = valorInput;

    // Verifica con la expresión regular
    if(!expresion.Stockma.test(valorInput)){
        insumos_form.Stockma.style.border = "5px solid red";
        bandera8 = false;
    } else if (parseInt(valorInput) < parseInt(insumos_form.Stockmi.value)) {
        // Verifica que Stock máximo no sea menor que Stock mínimo
        insumos_form.Stockmi.style.border = "5px solid red";
        insumos_form.Stockma.style.border = "5px solid red";
        bandera7 = false;
        bandera8 = false;
    } else {
        insumos_form.Stockma.removeAttribute("style");
        insumos_form.Stockmi.removeAttribute("style");
        bandera7 = true;
        bandera8 = true;
    }
});


// Escuchador de eventos para el campo Costo
insumos_form.Costo.addEventListener('keyup', (e) =>{
    let valorInput = e.target.value;

    // Elimina los simbolos especiales del valor de entrada excepto (puntos)
    valorInput = valorInput.replace(/[^\d.]/g, '');


    // Asigna el valor al campo
    insumos_form.Costo.value = valorInput;

    // Verifica con la expresión regular
    if(!expresion.Costo.test(valorInput)){
        insumos_form.Costo.style.border = "5px solid red";
        bandera9 = false;
    } else {
        insumos_form.Costo.removeAttribute("style");
        bandera9 = true;
    }
});