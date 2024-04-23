let bandera1=false;
let bandera2=false;
let bandera3=false;
let bandera4=false;
let bandera5=false;
let bandera6=false;
let bandera7=false;
let bandera8=false;
let bandera9=false;

let botonRegistrar = document.getElementById("submitButton");
botonRegistrar.addEventListener("click", (e) =>{
    if(bandera1 == true && bandera2 == true && bandera3 == true && bandera4 == true && bandera5 == true && bandera6 == true && bandera7 == true && bandera8 == true && bandera9 == true){
        console.log("Registro exitoso");
    }

    else{
        alert("Datos incorrectos");
        e.preventDefault();
    }
})



const expresion = {
    Clave: /^[a-zA-Z0-9]{1,10}$/,
    Alcohol: /^\d{1,3}\.\d{1,4}$/,
    Extracto: /^\d{1,3}\.\d{1,4}$/,
    Metanol: /^\d{1,3}\.\d{1,4}$/,
    Superiores: /^\d{1,3}\.\d{1,4}$/,
    Aldheídos: /^\d{1,3}\.\d{1,4}$/,
    Furfural: /^\d{1,3}\.\d{1,4}$/,
    Plomo: /^\d{1,3}\.\d{1,4}$/,
    Cobre: /^\d{1,3}\.\d{1,4}$/,
}

var clave_analisis = document.getElementById('clave_analisis');
var alcohol = document.getElementById('alcohol');
var ext_seco = document.getElementById('ext_seco');
var metanol = document.getElementById('metanol');
var alcohol_sup = document.getElementById('alcohol_sup');
var aldehidos = document.getElementById('aldehidos');
var furfural = document.getElementById('furfural');
var plomo = document.getElementById('plomo');
var cobre = document.getElementById('cobre');

clave_analisis.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    clave_analisis.value = valorInput

    .replace(/[^a-zA-Z0-9]/g, '')
    .trim();


    if (!expresion.Clave.test(valorInput)) {
        clave_analisis.style.border = "5px solid red";
        bandera1 = false;
    }

    else {
        clave_analisis.removeAttribute("style");
        bandera1 = true;
    }
});

alcohol.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    alcohol.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();


    if (!expresion.Alcohol.test(valorInput)) {
        alcohol.style.border = "5px solid red";
        bandera2 = false;
    } else {
        alcohol.removeAttribute("style");
        bandera2 = true;
    }
});

ext_seco.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    ext_seco.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();

   

    if (!expresion.Extracto.test(valorInput)) {
        ext_seco.style.border = "5px solid red";
        bandera3 = false;
    } else {
        ext_seco.removeAttribute("style");
        bandera3 = true;
    }
});

metanol.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    metanol.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();


    if (!expresion.Metanol.test(valorInput)) {
        metanol.style.border = "5px solid red";
        bandera4 = false;
    } else {
        metanol.removeAttribute("style");
        bandera4 = true;
    }
});

alcohol_sup.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    alcohol_sup.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();

   

    if (!expresion.Superiores.test(valorInput)) {
        alcohol_sup.style.border = "5px solid red";
        bandera5 = false;
    } else {
        alcohol_sup.removeAttribute("style");
        bandera5 = true;
    }
});

aldehidos.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    aldehidos.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();


    if (!expresion.Aldheídos.test(valorInput)) {
        aldehidos.style.border = "5px solid red";
        bandera6 = false;
    } else {
        aldehidos.removeAttribute("style");
        bandera6 = true;
    }
});

furfural.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    furfural.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();

   

    if (!expresion.Furfural.test(valorInput)) {
        furfural.style.border = "5px solid red";
        bandera7 = false;
    } else {
        furfural.removeAttribute("style");
        bandera7 = true;
    }
});

plomo.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    plomo.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();


    if (!expresion.Plomo.test(valorInput)) {
        plomo.style.border = "5px solid red";
        bandera8 = false;
    } else {
        plomo.removeAttribute("style");
        bandera8 = true;
    }
});

cobre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    cobre.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();

   

    if (!expresion.Cobre.test(valorInput)) {
        cobre.style.border = "5px solid red";
        bandera9 = false;
    } else {
        cobre.removeAttribute("style");
        bandera9 = true;
    }
});