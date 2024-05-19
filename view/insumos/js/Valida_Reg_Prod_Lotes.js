//Se crean banderas para controlar si es válido el campo de entrada
let bandera1 = false;
let bandera2 = false;
let bandera3 = false;


// Se pone un escuchador de eventos para el botón, para que cuando se haga click se ejecute la función
let botonProducir = document.getElementById("produccion");
botonProducir.addEventListener("click", (e) => {
    // se revisa si todas las entradas son válidas
    if (bandera1 && bandera2 && bandera3) {
        // si todas son válidas se muestra un mensaje de éxito
        console.log("Registro exitoso");
    } else {
        // si alguna no es válida se cancela el envío
        //alert("Uno o más campos están vacios o son incorrectos \nPor favor verifique nuevamente.")
        console.log("Envío cancelado");
        e.preventDefault();
        alert("Por favor rellene todos los campos");
    }
});

const expresion = {
    Lote :  /^[a-zA-Z0-9]{5}$/,
    Cantidad: /^\d+$/

}


// Escuchador de eventos para el campo Lote
insumos_form.Lote.addEventListener('input', (e) =>{
    let valorInput = e.target.value;

    // Elimina los simbolos especiales del valor de entrada
    valorInput = valorInput.replace(/[^a-zA-Z0-9]/g, '');
    //Elimina los caracteres extra cuando sobrepasa de los 40
    if (valorInput.length > 5) {
        valorInput = valorInput.substring(0, 5);
    }
     // Asigna el valor al campo
     insumos_form.Lote.value = valorInput;

     // Verifica con la expresión regular
     if(!expresion.Lote.test(valorInput)){
         insumos_form.Lote.style.border = "5px solid red";
         bandera1 = false;
     } else {
         insumos_form.Lote.removeAttribute("style");
         bandera1 = true;
     }
 });


// Escuchador de eventos para el campo Producto (combobox)
insumos_form.Id_productos.addEventListener('change', (e) => {
    let valorSeleccionado = e.target.value;

    // Verifica si la opción seleccionada no es la opción por defecto
    if (valorSeleccionado === '' || valorSeleccionado === 'default') {
        // Marca el campo con un borde rojo para indicar un error
        insumos_form.Id_productos.style.border = "5px solid red";
        bandera2 = false;
    } else {
        // Elimina el estilo de error si la selección es válida
        insumos_form.Id_productos.removeAttribute("style");
        bandera2 = true;
    }
});

 // Escuchador de eventos para el campo Cantidad
insumos_form.Cantidad.addEventListener('input', (e) =>{
    let valorInput = e.target.value;

    // Elimina todo excepto los dígitos (0-9)
    valorInput = valorInput.replace(/[^0-9]/g, '');

    //Elimina los caracteres extra cuando sobrepasa de los 40
    
     // Asigna el valor al campo
     insumos_form.Cantidad.value = valorInput;

     // Verifica con la expresión regular
     if(!expresion.Cantidad.test(valorInput)){
         insumos_form.Identificador.style.border = "5px solid red";
         bandera3 = false;
     } else {
         insumos_form.Cantidad.removeAttribute("style");
         bandera3 = true;
     }
 });