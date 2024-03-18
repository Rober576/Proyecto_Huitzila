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
        alert("Datos incorrectos");
        e.preventDefault();
    }
})

const expresion = {
    clave: /^[A-Za-z0-9]{1,7}$/,
    nombre: /^[A-Za-záéíóúÁÉÍÓÚüÜ. ]{1,40}$/,
    paterno: /^[A-Za-záéíóúÁÉÍÓÚüÜ. ]{1,20}$/,
    materno: /^[A-Za-záéíóúÁÉÍÓÚüÜ. ]{0,20}$/,
    email:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
}

var clave_us = document.getElementById('clave_us');
var nombre_us = document.getElementById('nombre_us');
var apellido_pat = document.getElementById('apellido_pat');
var apellido_mat = document.getElementById('apellido_mat');
var email_us = document.getElementById('email_us');
var email = document.getElementById('email');
clave_us.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    clave_us.value = valorInput

    if (!expresion.clave.test(valorInput)) {
        clave_us.style.border = "5px solid red";
        bandera1 = false;
    }

    else {
        clave_us.removeAttribute("style");
        bandera1 = true;
    }
});

nombre_us.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    nombre_us.value = valorInput;

    if (!expresion.nombre.test(valorInput)) {
        nombre_us.style.border = "5px solid red";
        bandera2 = false;
    } else {
        nombre_us.removeAttribute("style");
        bandera2 = true;
    }
});

apellido_pat.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    apellido_pat.value = valorInput

    if (!expresion.paterno.test(valorInput)) {
        apellido_pat.style.border = "5px solid red";
        bandera3 = false;
    } else {
        apellido_pat.removeAttribute("style");
        bandera3 = true;
    }
});

apellido_mat.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    apellido_mat.value = valorInput
    if (!expresion.materno.test(valorInput)) {
        apellido_mat.style.border = "5px solid red";
        bandera4 = false;
    } else {
        apellido_mat.removeAttribute("style");
        bandera4 = true;
    }
});

email_us.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    email_us.value = valorInput

    if (!expresion.email.test(valorInput)) {
        email_us.style.border = "5px solid red";
        bandera5 = false;
    } else {
        email_us.removeAttribute("style");
        bandera5 = true;
    }
});

email.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    email.value = valorInput

    if (!expresion.password.test(valorInput)) {
        email.style.border = "5px solid red";
        bandera6 = false;
    } else {
        email.removeAttribute("style");
        bandera6 = true;
    }
});