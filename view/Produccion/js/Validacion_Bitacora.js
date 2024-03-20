/* Declara una variable global */
/* Declara una variable global */
let lote = false
let costo = false
let noGuia = false
let agave = false
let brix = false
let art = false
let coccion = false
let art2 = false

const expresiones = {
    lote1:/^[a-zA-ZÁ-Ýá-ý0-9.-\s]{1,10}$/,
    costo1:/^[0-9.\s]{1,20}$/,
    guia:/^[a-zA-ZÁ-Ýá-ý0-9.-\s]{1,10}$/,
    agave1:/^[0-9.\s]{1,15}$/,
    brix1:/^[0-9.\s]{1,15}$/,
    art1:/^[0-9.\s]{1,15}$/,
    coccion1:/^[0-9.\s]{1,15}$/,
    art3:/^[0-9.\s]{1,15}$/,
}

/* Input nombres */
form_ingreso_agave.lote.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	form_ingreso_agave.lote.value = valorInput

    // Eliminar caracteres especiales
    .replace(/[^a-zA-ZÁ-Ýá-ý0-9.-\s.]/g, '')
    // Eliminar espacios en blanco
    .replace(/\s/g, '')
    // Eliminar el ultimo espaciado
    .trim();
   
    if (!expresiones.lote1.test(valorInput)) {
        form_ingreso_agave.lote.style.border = "3px solid red";
        lote = false;
	}else{
        form_ingreso_agave.lote.removeAttribute("style");
        lote = true;
    }
    validar(lote);
});

/* Input apellidos */
form_ingreso_agave.costo.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    form_ingreso_agave.costo.value = valorInput
    
    // Eliminar espacios en blanco
    .replace(/\s/g, '')
    // Eliminar caracteres especiales
    .replace(/[^0-9.]/g, '')
    // Eliminar el ultimo espaciado
    .trim();

    if (!expresiones.costo1.test(valorInput)) {
        form_ingreso_agave.costo.style.border = "3px solid red";
        costo = false;
    }else{
        form_ingreso_agave.costo.removeAttribute("style");
        costo = true;
    }
    validar(costo);

	
});

/* Input apellidos */
form_ingreso_agave.guia.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

    if(valorInput !==""){
        form_ingreso_agave.guia.value = valorInput
    
    // Eliminar espacios en blanco
    .replace(/\s/g, '')
    // Eliminar caracteres especiales
    .replace(/[^0-9-.]/g, '')
    // Eliminar el ultimo espaciado
    .trim();

    if (!expresiones.guia.test(valorInput)) {
        form_ingreso_agave.guia.style.border = "3px solid red";
        guia = false;
	}else{
        form_ingreso_agave.guia.removeAttribute("style");
        guia = true;
    }
    validar(guia);
    }

	
});

/* Input apellidos */
form_ingreso_agave.agave.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    form_ingreso_agave.agave.value = valorInput
    
    // Eliminar espacios en blanco
    .replace(/\s/g, '')
    // Eliminar caracteres especiales
    .replace(/[^0-9.]/g, '')
    // Eliminar el ultimo espaciado
    .trim();

    if (!expresiones.agave1.test(valorInput)) {
        form_ingreso_agave.agave.style.border = "3px solid red";
        agave = false;
    }else{
        form_ingreso_agave.agave.removeAttribute("style");
        agave = true;
    }
    validar(agave);

	
});

/* Input apellidos */
form_ingreso_agave.brix.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    form_ingreso_agave.brix.value = valorInput
    
    // Eliminar espacios en blanco
    .replace(/\s/g, '')
    // Eliminar caracteres especiales
    .replace(/[^0-9.]/g, '')
    // Eliminar el ultimo espaciado
    .trim();

    if (!expresiones.brix1.test(valorInput)) {
        form_ingreso_agave.brix.style.border = "3px solid red";
        brix = false;
    }else{
        form_ingreso_agave.brix.removeAttribute("style");
        brix = true;
    }
    validar(brix);

	
});

form_ingreso_agave.art.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    form_ingreso_agave.art.value = valorInput
    
    // Eliminar espacios en blanco
    .replace(/\s/g, '')
    // Eliminar caracteres especiales
    .replace(/[^0-9.]/g, '')
    // Eliminar el ultimo espaciado
    .trim();

    if (!expresiones.art1.test(valorInput)) {
        form_ingreso_agave.art.style.border = "3px solid red";
        art = false;
    }else{
        form_ingreso_agave.art.removeAttribute("style");
        art = true;
    }
    validar(art);

	
});


form_ingreso_agave.coccion.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    form_ingreso_agave.coccion.value = valorInput
    
    // Eliminar espacios en blanco
    .replace(/\s/g, '')
    // Eliminar caracteres especiales
    .replace(/[^0-9.]/g, '')
    // Eliminar el ultimo espaciado
    .trim();

    if (!expresiones.coccion1.test(valorInput)) {
        form_ingreso_agave.coccion.style.border = "3px solid red";
        coccion = false;
    }else{
        form_ingreso_agave.coccion.removeAttribute("style");
        coccion = true;
    }
    validar(coccion);

	
});

form_ingreso_agave.art2.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    form_ingreso_agave.art2.value = valorInput
    
    // Eliminar espacios en blanco
    .replace(/\s/g, '')
    // Eliminar caracteres especiales
    .replace(/[^0-9.]/g, '')
    // Eliminar el ultimo espaciado
    .trim();

    if (!expresiones.art3.test(valorInput)) {
        form_ingreso_agave.art2.style.border = "3px solid red";
        art2 = false;
    }else{
        form_ingreso_agave.art2.removeAttribute("style");
        art2 = true;
    }
    validar(art2);

	
});

function validar(bandera){
    const guardar = document.getElementById('boton_registrar');

    if(bandera == false){              
        guardar.disabled=true;
        
    }else{
        guardar.disabled=false;
    }

}