let bandera1=false;
let bandera2=false;
let bandera3=false;
let bandera4=false;
let bandera5=false;
let bandera6=false;

let botonRegistrar = document.getElementById("submitButton");
botonRegistrar.addEventListener("click", (e) =>{
    if(bandera1 == true && bandera2 == true && bandera3 == true && bandera4 == true && bandera5 == true && bandera6 == true){
        console.log("Registro exitoso");
    }

    else{
        console.log("Envío cancelado");
        e.preventDefault();
    }
})

const expresion = {
    clave: /^[A-Za-z0-9]{1,7}$/,
    nombre: /^[A-Za-z. ]{1,40}$/,
    paterno: /^[A-Za-z. ]{1,20}$/,
    materno: /^\d{2}[A-Za-z]{5}$/,
    email:/^([^@~`;]{0,}|)$/,
    password:/^([^@~`;]{0,}|)$/,
}


//se pone un escuchador de eventos para el campo, para que cuando se escriba se ejecute la función
registro.clave_us.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    registro.clave_us.value = valorInput

    if (!expresion.clave.test(valorInput)) {
        clave_us.style.border = "5px solid red";
        bandera1 = false;
    }

    else {
        clave_us.removeAttribute("style");
        bandera1 = true;
    }
});

registro.nombre_us.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    registro.nombre_us.value = valorInput;

    if (!expresion.nombre.test(valorInput)) {
        nombre_us.style.border = "5px solid red";
        bandera2 = false;
    } else {
        nombre_us.removeAttribute("style");
        bandera2 = true;
    }
});

registro.apellido_pat.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    registro.apellido_pat.value = valorInput

    if (!expresion.paterno.test(valorInput)) {
        apellido_pat.style.border = "5px solid red";
        bandera3 = false;
    } else {
        apellido_pat.removeAttribute("style");
        bandera3 = true;
    }
});

Equipo1.campo4.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    // Limita la longitud a 7 caracteres (2 números + 5 letras)
    valorInput = valorInput.slice(0, 7);

    // Asigna el valor al campo
    Equipo1.campo4.value = valorInput

    //elimina caracteres especiales
    .replace(/[☺☻♥♦•○◙♂♀üâäàåçê♪ëèïîìÄÅÉæÆôöòûáéíóúÁÉÍÓÚùÿÖÜ¢£¥₧ƒª`´·.¨°º¿⌐¬½¼«»÷±~!¡@#$%^&^*()_+\-=\[\]{};':"\\|,<>\/?]/g, '')

    // Verifica si cumple con la expresión regular
    if (!expresion.campo4.test(valorInput)) {
        campo4.style.border = "5px solid red";
        bandera4 = false;
    } else {
        campo4.removeAttribute("style");
        bandera4 = true;
    }
});

// Escuchador de eventos para el campo de descripción
Equipo1.campo5.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    // Limita la longitud a un máximo (opcional)
    valorInput = valorInput.slice(0); // Por ejemplo, se limita a 255 caracteres

    // Asigna el valor al campo
    Equipo1.campo5.value = valorInput

    .replace(/[@~`;]/g, '')

    // Verifica si cumple con la expresión regular
    if (!expresion.campo5.test(valorInput)) {
        campo5.style.border = "5px solid red";
        bandera5 = false;
    } else {
        campo5.removeAttribute("style");
        bandera5 = true;
    }
});