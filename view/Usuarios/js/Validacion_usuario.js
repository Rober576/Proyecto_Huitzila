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
    materno: /^[A-Za-z. ]{0,20}$/,
    email:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
}

var registro = document.getElementById('registro');
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

registro.apellido_mat.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    registro.apellido_mat.value = valorInput
    if (!expresion.materno.test(valorInput)) {
        apellido_mat.style.border = "5px solid red";
        bandera4 = false;
    } else {
        apellido_mat.removeAttribute("style");
        bandera4 = true;
    }
});

registro.email_us.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    registro.email_us.value = valorInput

    if (!expresion.email.test(valorInput)) {
        email_us.style.border = "5px solid red";
        bandera5 = false;
    } else {
        email_us.removeAttribute("style");
        bandera5 = true;
    }
});

registro.email.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    registro.email.value = valorInput

    if (!expresion.password.test(valorInput)) {
        email.style.border = "5px solid red";
        bandera6 = false;
    } else {
        email.removeAttribute("style");
        bandera6 = true;
    }
});