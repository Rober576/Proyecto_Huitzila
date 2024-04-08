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
    Azucares: /^\d{1,8}(\.\d{1,2})$/,
    Madurez: /^\d{1,8}(\.\d{1,2})$/,
    Materia: /^\d{1,8}(\.\d{1,2})$/,
}

var azucares = document.getElementById('azucares');
var madurez = document.getElementById('madurez');
var mat_prima = document.getElementById('mat_prima');
azucares.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    azucares.value = valorInput

    .replace(/[^A-Za-z0-9]/g, '')
    .trim();

    if (valorInput.length > 7) {
        azucares.value = valorInput.slice(0, 7); 
    }

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

    madurez.value = valorInput

    .replace(/[^A-Za-záéíóúÁÉÍÓÚüÜ. ]/g, '')
    .trim();

    if (valorInput.length > 40) {
        madurez.value = valorInput.slice(0, 40);
    }

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

    mat_prima.value = valorInput

    .replace(/[^A-Za-záéíóúÁÉÍÓÚüÜ. ]/g, '')
    .trim();

    if (valorInput.length > 20) {
        mat_prima.value = valorInput.slice(0, 20);
    }

    if (!expresion.Materia.test(valorInput)) {
        mat_prima.style.border = "5px solid red";
        bandera3 = false;
    } else {
        mat_prima.removeAttribute("style");
        bandera3 = true;
    }
});