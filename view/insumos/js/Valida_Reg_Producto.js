//banderas
let id = true
let nom = true
let des = true
let smax = true
let smin = true
let cprom = true
let cu = true
let can = true

//variables para los campos de texto
identificador = document.getElementById("Identificador");
nombre = document.getElementById("Nombre");
descripcion = document.getElementById("Descripcion");
stockma = document.getElementById("Stockma");
stockmi = document.getElementById("Stockmi");
costoProm = document.getElementById("CProm");
ultimoCosto = document.getElementById("UCosto");
cant = document.getElementById("cantidad");

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

    else if(cprom == false){
        e.preventDefault()
        costoProm.style.border = "3px solid red";
    }

    else if(cu == false){
        e.preventDefault()
        ultimoCosto.style.border = "3px solid red";
    }


    else{
        console.log("exito")
    }
});

//definición de las expresiones de cada campo
const expresiones = {
    identificador: /^[0-9a-zA-Z]{1,40}$/,
    descripcion: /^[a-zA-ZÁ-ý0-9\s"-.,_]{0,100}$/,
    stock: /^[0-9]{1,10}$/,
    precio: /^[0-9]+(.([0-9])+)*$/,
    nombre: /^[0-9.a-zA-ZÁ-ý\s]{1,50}$/
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
        identificador.removeAttribute("style");
        id = true
    }
    else{
        identificador.style.border = "3px solid red";
        id = false
    }
});

insumos_form.Nombre.addEventListener("keyup", (e) =>{
    let valorInput = e.target.value;
    insumos_form.Nombre.value = valorInput
    
   
    //elimina caracteres especiales
    .replace(/[☺☻♥♦•○◙♂♀üâäàåçê♪ëèïîìÄÅæÆôöòûùÿÖÜ¢£¥₧ƒªº`´¨°¿⌐¬½¼«»÷±~!¡@#$%^&^*()_+\-=\[\]{};':"\\|,<>\/?]/g, '')

    if(expresiones.nombre.test(e.target.value)){
        Nombre.removeAttribute("style");
        nom = true
    }
    else{
        Nombre.style.border = "3px solid red";
        nom = false
    }
});


insumos_form.Stockma.addEventListener("keyup", (e) =>{
    let valorInput = e.target.value;
    insumos_form.Stockma.value = valorInput
    
    //eliminar los carateres no permitidos
    .replace(/\s+/g, '')

    .replace(/[^0-9]/g, '')

    if(Number(valorInput) < Number(insumos_form.Stockmi.value)){
        Stockmi.style.border = "3px solid red";

        Stockma.style.border = "3px solid red";
        smax = false
    }

    else{
        Stockmi.removeAttribute("style");
        Stockma.removeAttribute("style");
    }

    if(expresiones.stock.test(e.target.value)){
        Stockma.removeAttribute("style");
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

    if(Number(valorInput) > Number(insumos_form.Stockma.value)){
        Stockmi.style.border = "3px solid red";
        smin = false

        Stockma.style.border = "3px solid red";
    }

    else{
        Stockmi.removeAttribute("style");
        Stockma.removeAttribute("style");
    }
    
    if(expresiones.stock.test(e.target.value)){
        Stockmi.removeAttribute("style");
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
        Descripcion.removeAttribute("style");
        smax = true
    }
    else{
        Descripcion.style.border = "3px solid red";
        smax = false
    }
});

insumos_form.CProm.addEventListener("keyup", (e) =>{
    let valorInput = e.target.value;
    insumos_form.CProm.value = valorInput
    
    //elimina los espacios en blanco
    .replace(/\s+/g, '')

    //elimina caracteres especiales
    .replace(/[☺☻♥♦•○◙♂♀üâäàåçê♪ëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒª`´¨°º¿⌐¬½¼«»÷±~!¡@#$%^&^*()_+\-=\[\]{};':" \\|,<>\/?]/g, '')

    //elimina las letras
    .replace(/[qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNMéáíóúñÑªº¿®ÁÉ±|Í¶ÓÚ]/g, '')
    
    //elimina el ultimo espacio en blanco
    .trim()


    if (verificarPuntos(valorInput) == true) {
        CProm.style.border = "3px solid red";
        valorInput = valorInput.substr(0, valorInput.length - 1);
        insumos_form.CProm.value = valorInput;
        cprom = false
    }

    //elimina el tercer decimal
    if (validarDecimales(valorInput) == true) {
        valorInput = valorInput.substr(0, valorInput.length - 1);
        insumos_form.CProm.value = valorInput;
    }

    //elimina el primer caracter si es un punto
    if (primeroNum(valorInput) == true) {
        CProm.style.border = "3px solid red";
        valorInput = valorInput.substr(1, valorInput.length);
        insumos_form.CProm.value = valorInput;
        cprom = false
    }
    
    if(expresiones.precio.test(e.target.value)){
        CProm.removeAttribute("style");
        cprom = true
    }
    else{
        CProm.style.border = "3px solid red";
        cprom = false
    }
});

insumos_form.UCosto.addEventListener("keyup", (e) =>{
    let valorInput = e.target.value;
    insumos_form.UCosto.value = valorInput
    
    //elimina los espacios en blanco
    .replace(/\s+/g, '')

    //elimina caracteres especiales
    .replace(/[☺☻♥♦•○◙♂♀üâäàåçê♪ëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒª`´¨°º¿⌐¬½¼«»÷±~!¡@#$%^&^*()_+\-=\[\]{};':" \\|,<>\/?]/g, '')

    //elimina las letras
    .replace(/[qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNMéáíóúñÑªº¿®ÁÉ±|Í¶ÓÚ]/g, '')
    
    //elimina el ultimo espacio en blanco
    .trim()


    if (verificarPuntos(valorInput) == true) {
        UCosto.style.border = "3px solid red";
        valorInput = valorInput.substr(0, valorInput.length - 1);
        insumos_form.UCosto.value = valorInput;
        cu = false
    }

    //elimina el tercer decimal
    if (validarDecimales(valorInput) == true) {
        valorInput = valorInput.substr(0, valorInput.length - 1);
        insumos_form.UCosto.value = valorInput;
    }

    //elimina el primer caracter si es un punto
    if (primeroNum(valorInput) == true) {
        UCosto.style.border = "3px solid red";
        valorInput = valorInput.substr(1, valorInput.length);
        insumos_form.UCosto.value = valorInput;
        cu = false
    }
    
    if(expresiones.precio.test(e.target.value)){
        UCosto.removeAttribute("style");
        cu = true
    }
    else{
        UCosto.style.border = "3px solid red";
        cu = false
    }
});

insumos_form.cantidad.addEventListener("keyup", (e) =>{
    let valorInput = e.target.value;
    insumos_form.cantidad.value = valorInput
    
    //eliminar los carateres no permitidos
    .replace(/\s+/g, '')

    .replace(/[^0-9]/g, '')
    
    if(expresiones.stock.test(e.target.value)){
        cantidad.removeAttribute("style");
        can = true
    }
    else{
        cantidad.style.border = "3px solid red";
        can = false
    }
});

//funcion para verificar que la cadena no tenga mas de un punto
function verificarPuntos(cadena){
    var puntos = 0;
    
    for (i = 0; i < cadena.length; i++){
        if (cadena[i] == '.') {
            puntos++;
        }
    }

    if (puntos >= 2) {
        return true
    }

    else {
        return false
    }
}

//funcion para verificar que el primer caracter no sea un punto, retorna true si si es un punto
function primeroNum(cadena){
    if (cadena[0] == '.') {
        return true
    }

    else {
        return false
    }
}

//verifica que si el ultimo caracter de una cadena es un punto
function ultimoNum(cadena)
{
    //alert(cadena.length);
    if (cadena.length >= 1) {
        if (cadena[cadena.length - 1] == '.') {
            return true
        }
        else {
            return false
        }
    }

    else {
        return false;
    }
}


//verifica que la cadena no tenga mas de dos decimales
function validarDecimales(cadena){
    var decimales = 0
    var j = cadena.length - 1
    var puntos = 0;
    console.log(cadena);
    for (i = 0; i < cadena.length; i++) {
        if (cadena[i] == '.') {
            puntos++;
        }
    }

    if (puntos == 1) {
        while (cadena[j] != '.' && j > 1) {
            decimales++;
            j--;
            console.log("decimales: " + decimales);
        }

        if (decimales >= 3) {
            return true
        }

        else {
            return false
        }
    }

    else {
        return false
    }
}

