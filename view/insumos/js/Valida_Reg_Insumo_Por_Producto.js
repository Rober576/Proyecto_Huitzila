let cu = true
let ct = true


const expresiones = {
    costo :  /^[0-9]+(.([0-9])+)*$/
}

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
    
    if(expresiones.costo.test(e.target.value)){
        UCosto.removeAttribute("style");
        cu = true
        var costo = parseFloat(insumos_form.UCosto.value) * parseFloat(insumos_form.Cantidad.value);
        CostoT.value = costo.toFixed(2);
    }
    else{
        UCosto.style.border = "3px solid red";
        cu = false
    }
});

insumos_form.Cantidad.addEventListener("keyup", (e) =>{
    let valorInput = e.target.value;
    insumos_form.Cantidad.value = valorInput
    
    //elimina los espacios en blanco
    .replace(/\s+/g, '')

    //elimina caracteres especiales
    .replace(/[☺☻♥♦•○◙♂♀üâäàåçê♪ëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒª`´¨°º¿⌐¬½¼«»÷±~!¡@#$%^&^*()_+\-=\[\]{};':" \\|,<>\/?]/g, '')

    //elimina las letras
    .replace(/[qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNMéáíóúñÑªº¿®ÁÉ±|.Í¶ÓÚ]/g, '')
    
    //elimina el ultimo espacio en blanco
    .trim()


    if (verificarPuntos(valorInput) == true) {
        Cantidad.style.border = "3px solid red";
        valorInput = valorInput.substr(0, valorInput.length - 1);
        insumos_form.Cantidad.value = valorInput;
        cu = false
    }

    //elimina el tercer decimal
    if (validarDecimales(valorInput) == true) {
        valorInput = valorInput.substr(0, valorInput.length - 1);
        insumos_form.Cantidad.value = valorInput;
    }

    //elimina el primer caracter si es un punto
    if (primeroNum(valorInput) == true) {
        Cantidad.style.border = "3px solid red";
        valorInput = valorInput.substr(1, valorInput.length);
        insumos_form.Cantidad.value = valorInput;
        cu = false
    }
    
    if(expresiones.costo.test(e.target.value)){
        Cantidad.removeAttribute("style");
        cu = true
        var costo = parseFloat(insumos_form.UCosto.value) * parseFloat(insumos_form.Cantidad.value);
        CostoT.value = costo.toFixed(2);
    }
    else{
        Cantidad.style.border = "3px solid red";
        cu = false
    }
});

insumos_form.CantidadM.addEventListener("keyup", (e) =>{
    let valorInput = e.target.value;
    insumos_form.CantidadM.value = valorInput
    
    //elimina los espacios en blanco
    .replace(/\s+/g, '')

    //elimina caracteres especiales
    .replace(/[☺☻♥♦•○◙♂♀üâäàåçê♪ëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒª`´¨°º¿⌐¬½¼«»÷±~!¡@#$%^&^*()_+\-=\[\]{};':" \\|,<>\/?]/g, '')

    //elimina las letras
    .replace(/[qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNMéáíóúñÑªº¿®ÁÉ±|.Í¶ÓÚ]/g, '')
    
    //elimina el ultimo espacio en blanco
    .trim()


    if (verificarPuntos(valorInput) == true) {
        CantidadM.style.border = "3px solid red";
        valorInput = valorInput.substr(0, valorInput.length - 1);
        insumos_form.CantidadM.value = valorInput;
        cu = false
    }

    //elimina el tercer decimal
    if (validarDecimales(valorInput) == true) {
        valorInput = valorInput.substr(0, valorInput.length - 1);
        insumos_form.CantidadM.value = valorInput;
    }

    //elimina el primer caracter si es un punto
    if (primeroNum(valorInput) == true) {
        CantidadM.style.border = "3px solid red";
        valorInput = valorInput.substr(1, valorInput.length);
        insumos_form.CantidadM.value = valorInput;
        cu = false
    }
    
    if(expresiones.costo.test(e.target.value)){
        CantidadM.removeAttribute("style");
        cu = true
        
    }
    else{
        CantidadM.style.border = "3px solid red";
        cu = false
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



