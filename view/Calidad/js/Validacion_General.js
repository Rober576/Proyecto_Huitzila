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
    Azucares: /^\d+(\.\d{1,2})?$/,
    Madurez: /^\d+(\.\d{1,2})?$/,
    Materia: /^\d+(\.\d{1,2})?$/,
}

var azucares = document.getElementById('azucares');
var madurez = document.getElementById('madurez');
var mat_prima = document.getElementById('mat_prima');
azucares.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    valorInput = valorInput.match(/^\d{0,6}(\.\d{0,2})?/)[0];
    azucares.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();


    if (!expresion.Azucares.test(valorInput)) {
        azucares.style.border = "5px solid red";
        bandera1 = false;
    }

    else {
        azucares.removeAttribute("style");
        bandera1 = true;
    }
});

madurez.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    valorInput = valorInput.match(/^\d{0,6}(\.\d{0,2})?/)[0];
    madurez.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();


    if (!expresion.Madurez.test(valorInput)) {
        madurez.style.border = "5px solid red";
        bandera2 = false;
    } else {
        madurez.removeAttribute("style");
        bandera2 = true;
    }
});

mat_prima.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    valorInput = valorInput.match(/^\d{0,6}(\.\d{0,2})?/)[0];

    mat_prima.value = valorInput

    .replace(/[^0-9.]/g, '')
    .trim();

   

    if (!expresion.Materia.test(valorInput)) {
        mat_prima.style.border = "5px solid red";
        bandera3 = false;
    } else {
        mat_prima.removeAttribute("style");
        bandera3 = true;
    }
});