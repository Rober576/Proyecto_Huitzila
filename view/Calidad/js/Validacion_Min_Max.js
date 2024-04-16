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
    Valor_min_alcohol: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    Valor_max_alcohol: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    Valor_min_extraseco: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    Valor_max_extraseco: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    Valor_min_meta: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    Valor_max_meta: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    Valor_min_alcoholsup: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    Valor_max_alcoholsup: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    Valor_min_aldehidos: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    Valor_max_aldehidos: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    Valor_min_furfural: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    Valor_max_furfural: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    Valor_min_plomo: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    Valor_max_plomo: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    Valor_min_arsenico: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
    Valor_max_arsenico: /^(100(\.00?)?|\d{1,2}(\.\d{1,2})?)$/,
   
}

var min_alcohol = document.getElementById('min_alc');
var max_alcohol = document.getElementById('max_alc');
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
var min_arsenico = document.getElementById('min_arse');
var max_arsenico = document.getElementById('max_arse');

min_alcohol.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    min_alcohol.value = valorInput

    .replace(/[^a-zA-Z0-9]/g, '')
    .trim();


    if (!expresion.Valor_min_alcohol.test(valorInput)) {
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

    .replace(/[^a-zA-Z0-9]/g, '')
    .trim();


    if (!expresion.Valor_max_alcohol.test(valorInput)) {
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

    .replace(/[^a-zA-Z0-9]/g, '')
    .trim();


    if (!expresion.Valor_min_extraseco.test(valorInput)) {
        min_ext_seco.style.border = "5px solid red";
        bandera1 = false;
    }

    else {
        min_ext_seco.removeAttribute("style");
        bandera1 = true;
    }
});

max_ext_seco.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    max_ext_seco.value = valorInput

    .replace(/[^a-zA-Z0-9]/g, '')
    .trim();


    if (!expresion.Valor_max_extraseco.test(valorInput)) {
        max_ext_seco.style.border = "5px solid red";
        bandera1 = false;
    }

    else {
        max_ext_seco.removeAttribute("style");
        bandera1 = true;
    }
});


min_metanol.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    min_metanol.value = valorInput

    .replace(/[^a-zA-Z0-9]/g, '')
    .trim();


    if (!expresion.Valor_min_meta.test(valorInput)) {
        min_metanol.style.border = "5px solid red";
        bandera1 = false;
    }

    else {
        min_metanol.removeAttribute("style");
        bandera1 = true;
    }
});

max_metanol.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    max_metanol.value = valorInput

    .replace(/[^a-zA-Z0-9]/g, '')
    .trim();


    if (!expresion.Valor_max_meta.test(valorInput)) {
        max_metanol.style.border = "5px solid red";
        bandera1 = false;
    }

    else {
        max_metanol.removeAttribute("style");
        bandera1 = true;
    }
});


min_alc_sup.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    min_alc_sup.value = valorInput

    .replace(/[^a-zA-Z0-9]/g, '')
    .trim();


    if (!expresion.Valor_min_alcoholsup.test(valorInput)) {
        min_alc_sup.style.border = "5px solid red";
        bandera1 = false;
    }

    else {
        min_alc_sup.removeAttribute("style");
        bandera1 = true;
    }
});

max_alc_sup.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    max_alc_sup.value = valorInput

    .replace(/[^a-zA-Z0-9]/g, '')
    .trim();


    if (!expresion.Valor_max_alcoholsup.test(valorInput)) {
        max_alc_sup.style.border = "5px solid red";
        bandera1 = false;
    }

    else {
        max_alc_sup.removeAttribute("style");
        bandera1 = true;
    }
});


min_aldehidos.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    min_aldehidos.value = valorInput

    .replace(/[^a-zA-Z0-9]/g, '')
    .trim();


    if (!expresion.Valor_min_aldehidos.test(valorInput)) {
        min_aldehidos.style.border = "5px solid red";
        bandera1 = false;
    }

    else {
        min_aldehidos.removeAttribute("style");
        bandera1 = true;
    }
});

max_aldehidos.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    max_aldehidos.value = valorInput

    .replace(/[^a-zA-Z0-9]/g, '')
    .trim();


    if (!expresion.Valor_max_aldehidos.test(valorInput)) {
        max_aldehidos.style.border = "5px solid red";
        bandera1 = false;
    }

    else {
        max_aldehidos.removeAttribute("style");
        bandera1 = true;
    }
});


min_furfural.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    min_furfural.value = valorInput

    .replace(/[^a-zA-Z0-9]/g, '')
    .trim();


    if (!expresion.Valor_min_furfural.test(valorInput)) {
        min_furfural.style.border = "5px solid red";
        bandera1 = false;
    }

    else {
        min_furfural.removeAttribute("style");
        bandera1 = true;
    }
});

max_furfural.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    max_furfural.value = valorInput

    .replace(/[^a-zA-Z0-9]/g, '')
    .trim();


    if (!expresion.Valor_max_furfural.test(valorInput)) {
        max_furfural.style.border = "5px solid red";
        bandera1 = false;
    }

    else {
        max_furfural.removeAttribute("style");
        bandera1 = true;
    }
});

min_plomo.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    min_plomo.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();


    if (!expresion.Valor_min_plomo.test(valorInput)) {
        min_plomo.style.border = "5px solid red";
        bandera2 = false;
    } else {
        min_plomo.removeAttribute("style");
        bandera2 = true;
    }
});


max_plomo.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    max_plomo.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();


    if (!expresion.Valor_max_plomo.test(valorInput)) {
        max_plomo.style.border = "5px solid red";
        bandera2 = false;
    } else {
        max_plomo.removeAttribute("style");
        bandera2 = true;
    }
});

min_arsenico.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    min_arsenico.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();

    if (!expresion.Valor_min_arsenico.test(valorInput)) {
        min_arsenico.style.border = "5px solid red";
        bandera3 = false;
    } else {
        min_arsenico.removeAttribute("style");
        bandera3 = true;
    }
});


max_arsenico.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    max_arsenico.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();

    if (!expresion.Valor_max_arsenico.test(valorInput)) {
        max_arsenico.style.border = "5px solid red";
        bandera3 = false;
    } else {
        max_arsenico.removeAttribute("style");
        bandera3 = true;
    }
});
