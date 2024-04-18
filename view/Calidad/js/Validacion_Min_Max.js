let bandera1=false;
let bandera2=false;
let bandera3=false;
let bandera4=false;
let bandera5=false;
let bandera6=false;
let bandera7=false;
let bandera8=false;
let bandera10=false;
let bandera11=false;
let bandera12=false;
let bandera13=false;
let bandera14=false;
let bandera15=false;
let bandera16=false;


let botonRegistrar = document.getElementById("submitButton");
botonRegistrar.addEventListener("click", (e) =>{
    if(bandera1 == true && bandera2 == true && bandera3 == true && bandera4 == true && bandera5 == true && bandera6 == true && bandera7 == true && bandera8 == true && bandera9 == true && bandera10 == true && bandera11 == true && bandera12 == true && bandera13 == true && bandera14 == true && bandera15 == true && bandera16 == true){
        console.log("Registro exitoso");
    }

    else{
        alert("Datos incorrectos");
        e.preventDefault();
    }
})



const expresion = {
    ALCVolMin: /^\d{1,8}(\.\d{1,2})$/,
    ALCVolMax: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    ExtractoSecoMin: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    ExtractoSecoMax: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    MetanolMin: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    MetanolMax: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    AlcoholesSuperioresMin: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    AlcoholesSuperioresMax	: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    AldehidosMin: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    AldehidosMax: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    FurfuralMin: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    FurfuralMax: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    PlomoMin: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    PlomoMax: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    ArsenicoMin: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    ArsenicoMax: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
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
var min_plomo = document.getElementById('min_plomo');
var max_plomo = document.getElementById('max_plomo');
var min_arsenico = document.getElementById('min_arsenico');
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
        bandera1 = false;
    }

    else {
        max_alcohol.removeAttribute("style");
        bandera1 = true;
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

min_plomo.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    min_plomo.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();


    if (!expresion.PlomoMin.test(valorInput)) {
        min_plomo.style.border = "5px solid red";
        bandera13 = false;
    } else {
        min_plomo.removeAttribute("style");
        bandera13 = true;
    }
});


max_plomo.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    max_plomo.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();


    if (!expresion.PlomoMax.test(valorInput)) {
        max_plomo.style.border = "5px solid red";
        bandera14 = false;
    } else {
        max_plomo.removeAttribute("style");
        bandera14 = true;
    }
});

min_arsenico.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    min_arsenico.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();

    if (!expresion.ArsenicoMin.test(valorInput)) {
        min_arsenico.style.border = "5px solid red";
        bandera15 = false;
    } else {
        min_arsenico.removeAttribute("style");
        bandera15 = true;
    }
});


max_arsenico.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    max_arsenico.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();

    if (!expresion.ArsenicoMax.test(valorInput)) {
        max_arsenico.style.border = "5px solid red";
        bandera16 = false;
    } else {
        max_arsenico.removeAttribute("style");
        bandera16 = true;
    }
});
