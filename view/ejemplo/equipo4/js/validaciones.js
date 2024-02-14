let bandera1 = false;
let bandera2 = false;
let bandera3 = false;
let bandera4 = false;
let bandera5 = false;

let botonRegistrar = document.getElementById("submitButton");
botonRegistrar.addEventListener("click", (e) =>{
    //se revisa si la entrada es válida
    if(bandera1 == true && bandera2 == true && bandera3 == true && bandera4 == true && bandera5 == true){
        //si es válida se muestra un mensaje de éxito
        console.log("Registro exitoso");
    }

    else{
        //si no es válida se cancela el envío
        console.log("Envío cancelado");
        e.preventDefault();
    }
})

const expresion = {
    telefono: /^\d{10}$/, 
    otraFuncion: /^\d{5}$/ 
};


Equipo4.campo1.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
   
    if (!expresion.telefono.test(valorInput)) {
        Equipo4.campo1.style.border = "5px solid red"; 
        bandera1 = false; 
    } else {
        Equipo4.campo1.removeAttribute("style"); 
        bandera1 = true; 
    }
});


Equipo4.campo2.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    
    if (!expresion.codigoPostal.test(valorInput)) {
        Equipo4.campo2.style.border = "5px solid red";
        bandera2 = false; 
    } else {
        Equipo4.campo2.removeAttribute("style");
        bandera2 = true; 
    }
});

expresion.codigoPostal = /^\d{5}$/;



expresion.direccion = /^[a-zA-Z0-9\s.#]+$/;

Equipo4.campo3.addEventListener('input', (e) => {
    let valorInput = e.target.value;

    if (!expresion.direccion.test(valorInput) || valorInput.trim() === '') {
        Equipo4.campo3.style.border = "5px solid red"; 
        bandera3 = false; 
    } else {
        Equipo4.campo3.removeAttribute("style");
        bandera3 = true; 
    }
});


expresion.apellido = /^[a-zA-Z\s]{1,20}$/;

Equipo4.campo4.addEventListener('input', (e) => {
    let valorInput = e.target.value;

    if (!expresion.apellido.test(valorInput) || valorInput.trim() === '') {
        Equipo4.campo4.style.border = "5px solid red";
        bandera4 = false; 
    } else {
        Equipo4.campo4.removeAttribute("style"); 
        bandera4 = true; 
    }
});


expresion.descripcion = /^[^@~`;]+$/;

Equipo4.campo5.addEventListener('input', (e) => {
    let valorInput = e.target.value;

    if (!expresion.descripcion.test(valorInput) || valorInput.trim() === '') {
        Equipo4.campo5.style.border = "5px solid red";
        bandera5 = false; 
    } else {
        Equipo4.campo5.removeAttribute("style"); 
        bandera5 = true;
    }
});
