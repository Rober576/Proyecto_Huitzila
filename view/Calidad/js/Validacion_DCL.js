let bandera1=false;
let bandera2=false;
let bandera3=false;

let botonRegistrar = document.getElementById("submitButton");
botonRegistrar.addEventListener("click", (e) =>{
    if(bandera1 == true && bandera2 == true && bandera3 == true){
        console.log("Registro exitoso");
    }

    else{
        alert("Datos incorrectos");
        e.preventDefault();
    }
})

const expresion = {
    Alcohol: /^\d{1,8}(\.\d{1,2})$/,
    Metanol: /^\d{1,8}(\.\d{1,2})$/,
    AlcoholSuperiores: /^\d{1,8}(\.\d{1,2})$/,
}

var alcohol = document.getElementById('alcohol');
var metanol = document.getElementById('metanol');
var alc_sup = document.getElementById('alc_sup');
alcohol.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    alcohol.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();


    if (!expresion.Alcohol.test(valorInput)) {
        alcohol.style.border = "5px solid red";
        bandera1 = false;
    }

    else {
        alcohol.removeAttribute("style");
        bandera1 = true;
    }
});

metanol.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    metanol.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();


    if (!expresion.Metanol.test(valorInput)) {
        metanol.style.border = "5px solid red";
        bandera2 = false;
    } else {
        metanol.removeAttribute("style");
        bandera2 = true;
    }
});

alc_sup.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    alc_sup.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();

   

    if (!expresion.AlcoholSuperiores.test(valorInput)) {
        alc_sup.style.border = "5px solid red";
        bandera3 = false;
    } else {
        alc_sup.removeAttribute("style");
        bandera3 = true;
    }
});