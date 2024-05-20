let bandera1=true;
let bandera2=true;
let bandera3=true;
let bandera4=true;
let bandera5=true;
let bandera6=true;
let bandera7=true;
let bandera8=true;
let bandera10=true;
let bandera11=true;
let bandera12=true;
let bandera13=true;
let bandera14=true;


let botonRegistrar = document.getElementById("submitButton");
botonRegistrar.addEventListener("click", (e) =>{
    if(bandera1 == true && bandera2 == true && bandera3 == true && bandera4 == true && bandera5 == true && bandera6 == true && bandera7 == true && bandera8 == true && bandera9 == true && bandera10 == true && bandera11 == true && bandera12 == true && bandera13 == true && bandera14 == true){
        console.log("Registro exitoso");
    }

    else{
        alert("Datos incorrectos");
        e.preventDefault();
    }
})



const expresion = {
    ALCVolMin: /^\d+(\.\d{1,2})?$/ ,
    ALCVolMax: /^\d+(\.\d{1,2})?$/,
    ExtractoSecoMin: /^\d+(\.\d{1,2})?$/,
    ExtractoSecoMax: /^\d+(\.\d{1,2})?$/,
    MetanolMin: /^\d+(\.\d{1,2})?$/,
    MetanolMax: /^\d+(\.\d{1,2})?$/,
    AlcoholesSuperioresMin: /^\d+(\.\d{1,2})?$/,
    AlcoholesSuperioresMax: /^\d+(\.\d{1,2})?$/,
    AldehidosMin: /^\d+(\.\d{1,2})?$/,
    AldehidosMax: /^\d+(\.\d{1,2})?$/,
    FurfuralMin: /^\d+(\.\d{1,2})?$/,
    FurfuralMax: /^\d+(\.\d{1,2})?$/,
    PlomoMax: /^\d+(\.\d{1,2})?$/,
    ArsenicoMax: /^\d+(\.\d{1,2})?$/,
}

var min_alcohol = document.getElementById('min_alcohol');
var max_alcohol = document.getElementById('max_alcohol');
var min_ext_seco = document.getElementById('min_ext_seco');
var max_ext_seco = document.getElementById('max_ext_seco');
var min_metanol = document.getElementById('min_metanol');
var max_metanol = document.getElementById('max_metanol');
var min_alc_sup = document.getElementById('min_alc_sup');
var max_alc_sup = document.getElementById('max_alc_sup');
var min_aldehidos = document.getElementById('min_aldehidos');
var max_aldehidos = document.getElementById('max_aldehidos');
var min_furfural = document.getElementById('min_furfural');
var max_furfural = document.getElementById('max_furfural');
var max_plomo = document.getElementById('max_plomo');
var max_arsenico = document.getElementById('max_arsenico');

min_alcohol.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    min_alcohol.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();


    if (!expresion.ALCVolMin.test(valorInput)) {
        min_alcohol.style.border = "5px solid red";
        bandera1 = false;
    }

    else {
        min_alcohol.removeAttribute("style");
        bandera1 = true;
    }
});

max_alcohol.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    max_alcohol.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();


    if (!expresion.ALCVolMax.test(valorInput)) {
        max_alcohol.style.border = "5px solid red";
        bandera2 = false;
    }

    else {
        max_alcohol.removeAttribute("style");
        bandera2 = true;
    }
});


min_ext_seco.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    min_ext_seco.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();


    if (!expresion.ExtractoSecoMin.test(valorInput)) {
        min_ext_seco.style.border = "5px solid red";
        bandera3 = false;
    }

    else {
        min_ext_seco.removeAttribute("style");
        bandera3 = true;
    }
});

max_ext_seco.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    max_ext_seco.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();


    if (!expresion.ExtractoSecoMax.test(valorInput)) {
        max_ext_seco.style.border = "5px solid red";
        bandera4 = false;
    }

    else {
        max_ext_seco.removeAttribute("style");
        bandera4 = true;
    }
});


min_metanol.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    min_metanol.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();


    if (!expresion.MetanolMin.test(valorInput)) {
        min_metanol.style.border = "5px solid red";
        bandera5 = false;
    }

    else {
        min_metanol.removeAttribute("style");
        bandera5 = true;
    }
});

max_metanol.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    max_metanol.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();


    if (!expresion.MetanolMax.test(valorInput)) {
        max_metanol.style.border = "5px solid red";
        bandera6 = false;
    }

    else {
        max_metanol.removeAttribute("style");
        bandera6 = true;
    }
});


min_alc_sup.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    min_alc_sup.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();


    if (!expresion.AlcoholesSuperioresMin.test(valorInput)) {
        min_alc_sup.style.border = "5px solid red";
        bandera7 = false;
    }

    else {
        min_alc_sup.removeAttribute("style");
        bandera7 = true;
    }
});

max_alc_sup.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    max_alc_sup.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();


    if (!expresion.AlcoholesSuperioresMax.test(valorInput)) {
        max_alc_sup.style.border = "5px solid red";
        bandera8 = false;
    }

    else {
        max_alc_sup.removeAttribute("style");
        bandera8 = true;
    }
});


min_aldehidos.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    min_aldehidos.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();


    if (!expresion.AldehidosMin.test(valorInput)) {
        min_aldehidos.style.border = "5px solid red";
        bandera9 = false;
    }

    else {
        min_aldehidos.removeAttribute("style");
        bandera9 = true;
    }
});

max_aldehidos.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    max_aldehidos.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();


    if (!expresion.AldehidosMax.test(valorInput)) {
        max_aldehidos.style.border = "5px solid red";
        bandera10 = false;
    }

    else {
        max_aldehidos.removeAttribute("style");
        bandera10 = true;
    }
});


min_furfural.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    min_furfural.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();


    if (!expresion.FurfuralMin.test(valorInput)) {
        min_furfural.style.border = "5px solid red";
        bandera11 = false;
    }

    else {
        min_furfural.removeAttribute("style");
        bandera11 = true;
    }
});

max_furfural.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    max_furfural.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();


    if (!expresion.	FurfuralMax.test(valorInput)) {
        max_furfural.style.border = "5px solid red";
        bandera12 = false;
    }

    else {
        max_furfural.removeAttribute("style");
        bandera12 = true;
    }
});



max_plomo.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    max_plomo.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();


    if (!expresion.PlomoMax.test(valorInput)) {
        max_plomo.style.border = "5px solid red";
        bandera13 = false;
    } else {
        max_plomo.removeAttribute("style");
        bandera13 = true;
    }
});


max_arsenico.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    max_arsenico.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();

    if (!expresion.ArsenicoMax.test(valorInput)) {
        max_arsenico.style.border = "5px solid red";
        bandera14 = false;
    } else {
        max_arsenico.removeAttribute("style");
        bandera14 = true;
    }
});
