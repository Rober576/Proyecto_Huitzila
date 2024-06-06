/* Declara una variable global */
/* Declara una variable global */
let procedencia = false
let volumen = false
let alc_vol = false

let alc_vol55 = false
let alc_vol_merma= false
let volumen_merma=false
let vol_agua=false



const expresiones = {
    procedencia:/^[a-zA-Z0-9ÁÉÍÓÚÑáéíóúñ]{1,50}$/,
    costo1:/^[0-9.\s]{1,20}$/,
    volumen:/^[0-9.\s]{1,15}$/,
    alc_vol:/^[0-9.\s]{1,15}$/,
    alc_vol55:/^[0-9.\s]{1,15}$/,
    alc_vol_merma:/^[0-9.\s]{1,15}$/,
    volumen_merma:/^[0-9.\s]{1,15}$/,
    vol_agua:/^[0-9.\s]{1,15}$/,
}

/* Input nombres */
form_ingreso_agave.procedencia.addEventListener('input', (e) => {
    let valorInput = e.target.value;

    // Limitar la longitud a 20 caracteres
    if (valorInput.length > 50) {
        valorInput = valorInput.slice(0, 50);
    }

    form_ingreso_agave.procedencia.value = valorInput
        // Eliminar caracteres especiales excepto los permitidos
        .replace(/[^a-zA-Z0-9ÁÉÍÓÚÑáéíóúñ.\-/,]/g, '')
        // Reemplazar más de un espacio en blanco por solo un espacio
        .replace(/\s{2,}/g, ' ')
       
    if (!expresiones.procedencia.test(valorInput)) {
        form_ingreso_agave.procedencia.style.border = "3px solid red";
        procedencia = false;
    } else {
        form_ingreso_agave.procedencia.removeAttribute("style");
        procedencia = true;
    }
    // Aquí debe llamarse la función validar con el argumento adecuado
    validar(procedencia);
});

/* Evento para detectar cambios en el input de volumen */
form_ingreso_agave.volumen.addEventListener('input', (e) => {
    let valorInput = e.target.value;
    if (valorInput.length > 9) {
        valorInput = valorInput.slice(0, 9);
    }

    // Limitar a números decimales con un máximo de 2 dígitos después del punto
    valorInput = valorInput.match(/^\d{0,6}(\.\d{0,2})?/)[0];

    form_ingreso_agave.volumen.value = valorInput;

    if (!expresiones.volumen.test(valorInput)) {
        form_ingreso_agave.volumen.style.border = "3px solid red";
        volumen = false;
    } else {
        form_ingreso_agave.volumen.removeAttribute("style");
        volumen = true;
    }
    validar(volumen);
});

/* Evento para detectar cambios en el input de alc_vol */
form_ingreso_agave.alc_vol.addEventListener('input', (e) => {
    let valorInput = e.target.value;

    valorInput = valorInput.match(/^(100(?:\.0{1,2})?|\d{0,2}(?:\.\d{0,2})?)/)[0];

    form_ingreso_agave.alc_vol.value = valorInput;

    form_ingreso_agave.alc_vol.value = valorInput;

    if (!expresiones.alc_vol.test(valorInput)) {
        form_ingreso_agave.alc_vol.style.border = "3px solid red";
        alc_vol = false;
    } else {
        form_ingreso_agave.alc_vol.removeAttribute("style");
        alc_vol = true;
    }
    validar(alc_vol);
});

/* Evento para detectar cambios en el input de alc_vol55 */
form_ingreso_agave.alc_vol55.addEventListener('input', (e) => {
    let valorInput = e.target.value;

    // Limitar a números decimales con un máximo de 2 dígitos después del punto
    valorInput = valorInput.match(/^\d{0,6}(\.\d{0,2})?/)[0];

    form_ingreso_agave.alc_vol55.value = valorInput;

    if (!expresiones.alc_vol55.test(valorInput)) {
        form_ingreso_agave.alc_vol55.style.border = "3px solid red";
        alc_vol55 = false;
    } else {
        form_ingreso_agave.alc_vol55.removeAttribute("style");
        alc_vol55 = true;
    }
    validar(alc_vol55);
});

form_ingreso_agave.alc_vol_merma.addEventListener('input', (e) => {
    let valorInput = e.target.value;

    // Limitar a números decimales con un máximo de 2 dígitos después del punto
    valorInput = valorInput.match(/^(100(?:\.0{1,2})?|\d{1,2}(?:\.\d{0,2})?|\d{0,2}(?:\.\d{1,2})?)/)[0];
    form_ingreso_agave.alc_vol_merma.value = valorInput;

    if (!expresiones.alc_vol_merma.test(valorInput)) {
        form_ingreso_agave.alc_vol_merma.style.border = "3px solid red";
        alc_vol_merma = false;
    } else {
        form_ingreso_agave.alc_vol_merma.removeAttribute("style");
        alc_vol_merma= true;
    }
    validar(alc_vol_merma);
});


form_ingreso_agave.volumen_merma.addEventListener('input', (e) => {
    let valorInput = e.target.value;

    // Limitar a números decimales con un máximo de 2 dígitos después del punto
    valorInput = valorInput.match(/^\d{0,6}(\.\d{0,2})?/)[0];

    form_ingreso_agave.volumen_merma.value = valorInput;

    if (!expresiones.volumen_merma.test(valorInput)) {
        form_ingreso_agave.volumen_merma.style.border = "3px solid red";
        volumen_merma = false;
    } else {
        form_ingreso_agave.volumen_merma.removeAttribute("style");
        volumen_merma= true;
    }
    validar(volumen_merma);
});

form_ingreso_agave.vol_agua.addEventListener('input', (e) => {
    let valorInput = e.target.value;

    // Limitar a números decimales con un máximo de 2 dígitos después del punto
    valorInput = valorInput.match(/^\d{0,6}(\.\d{0,2})?/)[0];

    form_ingreso_agave.vol_agua.value = valorInput;

    if (!expresiones.vol_agua.test(valorInput)) {
        form_ingreso_agave.vol_agua.style.border = "3px solid red";
        vol_agua = false;
    } else {
        form_ingreso_agave.vol_agua.removeAttribute("style");
        vol_agua= true;
    }
    validar(vol_agua);
});

function validar(bandera){
    const guardar = document.getElementById('submitButton');

    if(bandera == false){              
        guardar.disabled=true;
        
    }else{
        guardar.disabled=false;
    }

}