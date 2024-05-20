let bandera1=true;
let bandera2=true;
let bandera3=true;
let bandera4=true;
let bandera5=true;


let botonRegistrar = document.getElementById("submitButton");
botonRegistrar.addEventListener("click", (e) =>{
    if(bandera1 == true && bandera2 == true && bandera3 == true && bandera4 == true && bandera5 == true){
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
    MetanolMin: /^\d+(\.\d{1,2})?$/,
    MetanolMax: /^\d+(\.\d{1,2})?$/,
    AlcoholesSuperioresMin: /^\d+(\.\d{1,2})?$/,
}

var min_alcohol = document.getElementById('min_alcohol');
var max_alcohol = document.getElementById('max_alcohol');
var min_metanol = document.getElementById('min_metanol');
var max_metanol = document.getElementById('max_metanol');
var min_alc_sup = document.getElementById('min_alc_sup');

min_alcohol.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    min_alcohol.value = valorInput

    .replace(/[^0-9.]/g, '')
    .replace(/(\.\d{2})\d+/, '$1')
    .replace(/(\..*)\./g, '$1')
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
    .replace(/(\.\d{2})\d+/, '$1')
    .replace(/(\..*)\./g, '$1')
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


min_metanol.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    min_metanol.value = valorInput

    .replace(/[^0-9.]/g, '')
    .replace(/(\.\d{2})\d+/, '$1')
    .replace(/(\..*)\./g, '$1')
    .trim();


    if (!expresion.MetanolMin.test(valorInput)) {
        min_metanol.style.border = "5px solid red";
        bandera3 = false;
    }

    else {
        min_metanol.removeAttribute("style");
        bandera3 = true;
    }
});

max_metanol.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    max_metanol.value = valorInput

    .replace(/[^0-9.]/g, '')
    .replace(/(\.\d{2})\d+/, '$1')
    .replace(/(\..*)\./g, '$1')
    .trim();


    if (!expresion.MetanolMax.test(valorInput)) {
        max_metanol.style.border = "5px solid red";
        bandera4 = false;
    }

    else {
        max_metanol.removeAttribute("style");
        bandera4 = true;
    }
});


min_alc_sup.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    min_alc_sup.value = valorInput

    .replace(/[^0-9.]/g, '')
    .replace(/(\.\d{2})\d+/, '$1')
    .replace(/(\..*)\./g, '$1')
    .trim();


    if (!expresion.AlcoholesSuperioresMin.test(valorInput)) {
        min_alc_sup.style.border = "5px solid red";
        bandera5 = false;
    }

    else {
        min_alc_sup.removeAttribute("style");
        bandera5 = true;
    }
});

