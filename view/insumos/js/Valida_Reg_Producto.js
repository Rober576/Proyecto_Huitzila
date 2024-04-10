//banderas
let id = true
let nom = true
let des = true
let smax = true
let smin = true

//variables para los campos de texto
identificador = document.getElementById("Identificador");
nombre = document.getElementById("Nombre");
descripcion = document.getElementById("Descripcion");
stockma = document.getElementById("Stockma");
stockmi = document.getElementById("Stockmi");

//listener del click del boton
let botonRegistrar = document.getElementById("registrar");
botonRegistrar.addEventListener("click", (e) =>{
    if(id == false){
        e.preventDefault()
        identificador.style.border = "3px solid red";
    }

    else if(nom == false){
        e.preventDefault()
        nombre.style.border = "3px solid red";
    }

    else if(des == false){
        e.preventDefault()
        descripcion.style.border = "3px solid red";
    }

    else if(smax == false){
        e.preventDefault()
        stockma.style.border = "3px solid red";
    }

    else if(smin == false){
        e.preventDefault()
        stockmi.style.border = "3px solid red";
    }



    else{
        alert("exito")
    }
});

//definición de las expresiones de cada campo
const expresiones = {
    identificador: /^[0-9a-zA-Z]{1,40}$/,
    descripcion: /^[a-zA-ZÁ-ý0-9\s"-.,_]{0,100}$/,
    stock: /^[0-9]{1,10}$/,
    precio: /^[0-9]{1,10}$/
}

//funcion para validar los campos
insumos_form.Identificador.addEventListener("keyup", (e) =>{
    let valorInput = e.target.value;
    insumos_form.Identificador.value = valorInput
    
    //eliminar los carateres no permitidos
    .replace(/\s+/g, '')
    .replace(/[^0-9a-zA-Z]/g, '')

    /*//elimina caracteres especiales
    .replace(/[☺☻♥♦•○◙♂♀üâäàåçê♪ëèïîìÄÅæÆôöòûùÿÖÜ¢£¥₧ƒªº`´·¨·°¿⌐¬½¼«»÷±~!¡@#$%^&^*()_+\-=\[\]{};':"\\|,.<>\/?]/g, '')
*/
    if(expresiones.identificador.test(e.target.value)){
        identificador.style.border = "3px solid green";
        id = true
    }
    else{
        identificador.style.border = "3px solid red";
        id = false
    }
});

insumos_form.Stockma.addEventListener("keyup", (e) =>{
    let valorInput = e.target.value;
    insumos_form.Stockma.value = valorInput
    
    //eliminar los carateres no permitidos
    .replace(/\s+/g, '')

    .replace(/[^0-9]/g, '')

    if(expresiones.stock.test(e.target.value)){
        Stockma.style.border = "3px solid green";
        smax = true
    }
    else{
        Stockma.style.border = "3px solid red";
        smax = false
    }
});

insumos_form.Stockmi.addEventListener("keyup", (e) =>{
    let valorInput = e.target.value;
    insumos_form.Stockmi.value = valorInput
    
    //eliminar los carateres no permitidos
    .replace(/\s+/g, '')

    .replace(/[^0-9]/g, '')
    
    if(expresiones.stock.test(e.target.value)){
        Stockmi.style.border = "3px solid green";
        smin = true
    }
    else{
        Stockmi.style.border = "3px solid red";
        smin = false
    }
});

insumos_form.Descripcion.addEventListener("keyup", (e) =>{
    let valorInput = e.target.value;
    insumos_form.Descripcion.value = valorInput

    //elimina caracteres especiales
    .replace(/[☺☻♥♦•○◙♂♀üâäàåçê♪ëèïîìÄÅæÆôöòûùÿÖÜ¢£¥₧ƒªº`´¨°¿⌐¬½¼«»÷±~!¡@#$%^&^*()+\=\[\]{};':"\\|<>\/?]/g, '')

    if(expresiones.descripcion.test(e.target.value)){
        Descripcion.style.border = "3px solid green";
        smax = true
    }
    else{
        Descripcion.style.border = "3px solid red";
        smax = false
    }
});



