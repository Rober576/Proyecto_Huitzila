let bandera1=false;
let bandera2=false;
let bandera3=false;
let bandera4=false;

let botonRegistrar = document.getElementById("submitButton");
botonRegistrar.addEventListener("click", (e) =>{
    if(bandera1 == true && bandera2 == true && bandera3 == true && bandera4 == true){
        console.log("Registro exitoso");
    }

    else{
        alert("Datos incorrectos");
        e.preventDefault();
    }
})

const expre = {
    Clave: /^[a-zA-Z0-9]{1,10}$/,
    Alcohol: /^\d+(\.\d{1,2})?$/,
    Metanol: /^\d+(\.\d{1,2})?$/,
    AlcoholesSuperiores: /^\d+(\.\d{1,2})?$/,
}
var clave_analisis = document.getElementById('clave_analisis');
var alcohol = document.getElementById('alcohol');
var metanol = document.getElementById('metanol');
var alc_sup = document.getElementById('alc_sup');

clave_analisis.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    clave_analisis.value = valorInput

    .replace(/[^a-zA-Z0-9]/g, '')
    .trim();


    if (!expre.Clave.test(valorInput)) {
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


    if (!expre.Alcohol.test(valorInput)) {
        alcohol.style.border = "5px solid red";
        bandera2 = false;
    }

    else {
        alcohol.removeAttribute("style");
        bandera2 = true;
    }
});

metanol.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    metanol.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();


    if (!expre.Metanol.test(valorInput)) {
        metanol.style.border = "5px solid red";
        bandera3 = false;
    } else {
        metanol.removeAttribute("style");
        bandera3 = true;
    }
});

alc_sup.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    alc_sup.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();

    if (!expre.AlcoholesSuperiores.test(valorInput)) {
        alc_sup.style.border = "5px solid red";
        bandera4 = false;
    } else {
        alc_sup.removeAttribute("style");
        bandera4 = true;
    }
});