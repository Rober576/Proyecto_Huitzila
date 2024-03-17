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
formulario.lote.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.lote.value = valorInput

    // Eliminar caracteres especiales
    .replace(/[^a-zA-ZÁ-Ýá-ý0-9.-\s.]/g, '')
    // Eliminar espacios en blanco
    .replace(/\s/g, '')
    // Eliminar el ultimo espaciado
    .trim();
   
    if (!expresiones.lote1.test(valorInput)) {
        formulario.lote.style.border = "3px solid red";
        lote = false;
	}else{
        formulario.lote.removeAttribute("style");
        lote = true;
    }
    validar(lote);
});

/* Input apellidos */
formulario.costo.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    formulario.costo.value = valorInput
    
    // Eliminar espacios en blanco
    .replace(/\s/g, '')
    // Eliminar caracteres especiales
    .replace(/[^0-9.]/g, '')
    // Eliminar el ultimo espaciado
    .trim();

    if (!expresiones.costo1.test(valorInput)) {
        formulario.costo.style.border = "3px solid red";
        costo = false;
    }else{
        formulario.costo.removeAttribute("style");
        costo = true;
    }
    validar(costo);

	
});

/* Input apellidos */
formulario.guia.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

    if(valorInput !==""){
        formulario.guia.value = valorInput
    
    // Eliminar espacios en blanco
    .replace(/\s/g, '')
    // Eliminar caracteres especiales
    .replace(/[^0-9-.]/g, '')
    // Eliminar el ultimo espaciado
    .trim();

    if (!expresiones.guia.test(valorInput)) {
        formulario.guia.style.border = "3px solid red";
        guia = false;
	}else{
        formulario.guia.removeAttribute("style");
        guia = true;
    }
    validar(guia);
    }

	
});

/* Input apellidos */
formulario.agave.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    formulario.agave.value = valorInput
    
    // Eliminar espacios en blanco
    .replace(/\s/g, '')
    // Eliminar caracteres especiales
    .replace(/[^0-9.]/g, '')
    // Eliminar el ultimo espaciado
    .trim();

    if (!expresiones.agave1.test(valorInput)) {
        formulario.agave.style.border = "3px solid red";
        agave = false;
    }else{
        formulario.agave.removeAttribute("style");
        agave = true;
    }
    validar(agave);

	
});

/* Input apellidos */
formulario.brix.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    formulario.brix.value = valorInput
    
    // Eliminar espacios en blanco
    .replace(/\s/g, '')
    // Eliminar caracteres especiales
    .replace(/[^0-9.]/g, '')
    // Eliminar el ultimo espaciado
    .trim();

    if (!expresiones.brix1.test(valorInput)) {
        formulario.brix.style.border = "3px solid red";
        brix = false;
    }else{
        formulario.brix.removeAttribute("style");
        brix = true;
    }
    validar(brix);

	
});

formulario.art.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    formulario.art.value = valorInput
    
    // Eliminar espacios en blanco
    .replace(/\s/g, '')
    // Eliminar caracteres especiales
    .replace(/[^0-9.]/g, '')
    // Eliminar el ultimo espaciado
    .trim();

    if (!expresiones.art1.test(valorInput)) {
        formulario.art.style.border = "3px solid red";
        art = false;
    }else{
        formulario.art.removeAttribute("style");
        art = true;
    }
    validar(art);

	
});


formulario.coccion.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    formulario.coccion.value = valorInput
    
    // Eliminar espacios en blanco
    .replace(/\s/g, '')
    // Eliminar caracteres especiales
    .replace(/[^0-9.]/g, '')
    // Eliminar el ultimo espaciado
    .trim();

    if (!expresiones.coccion1.test(valorInput)) {
        formulario.coccion.style.border = "3px solid red";
        coccion = false;
    }else{
        formulario.coccion.removeAttribute("style");
        coccion = true;
    }
    validar(coccion);

	
});

formulario.art2.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    formulario.art2.value = valorInput
    
    // Eliminar espacios en blanco
    .replace(/\s/g, '')
    // Eliminar caracteres especiales
    .replace(/[^0-9.]/g, '')
    // Eliminar el ultimo espaciado
    .trim();

    if (!expresiones.art3.test(valorInput)) {
        formulario.art2.style.border = "3px solid red";
        art2 = false;
    }else{
        formulario.art2.removeAttribute("style");
        art2 = true;
    }
    validar(art2);

	
});