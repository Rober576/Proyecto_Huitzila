let bandera1 = false;
let bandera2 = false;
let bandera3 = false;
let bandera4 = false;
let bandera5 = false;


let botonRegistrar = document.getElementById("registrar");
botonRegistrar.addEventListener("click", (e) => {
    
    if (bandera1 && bandera2 && bandera3 && bandera4 && bandera5) {
        
        console.log("Registro exitoso");
    } else {
       
        console.log("Envío cancelado");
        e.preventDefault();
    }
});

//Expresiones regulares
const expresion = {
    campo1: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, //Correo electrónico
    campo2: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, //Contraseña
    campo3: /^[0-9]{2}[A-Za-z]{5}$/, //ID
    campo4: /^[a-zA-Z\s]{1,400}$/, //Nombre
    campo5: /^[A-Za-z]{3,}$/, //Clave
};



//Correo electrónico
Equipo3.campo1.addEventListener('input', (e) => {
    let valorInput = e.target.value;

    //Elimina caracteres especiales excepto '@'
    valorInput = valorInput.replace(/[^a-zA-Z0-9@.]/g, '');

    //Elimina espacios
    valorInput = valorInput.replace(/\s/g, '');


    Equipo3.campo1.value = valorInput;

    // Verificar longitud mínima y máxima
    if (valorInput.length < 7 || valorInput.length > 320) {
        Equipo3.campo1.style.border = "5px solid red"; // Aplicar estilo si la longitud es inválida
        bandera1 = false;
    } else {
        // Verificar el formato usando expresión regular
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valorInput)) {
            Equipo3.campo1.style.border = "5px solid red"; 
            bandera1 = false;
        } else {
            Equipo3.campo1.removeAttribute("style");
            bandera1 = true;
        }
    }
});



//Contraseña
Equipo3.campo2.addEventListener('input', (e) => {
    let valorInput = e.target.value;

    const tieneMinimo8Caracteres = /.{8,}/.test(valorInput);
    const tieneLetraMayuscula = /[A-Z]/.test(valorInput);
    const tieneLetraMinuscula = /[a-z]/.test(valorInput);
    const tieneNumero = /\d/.test(valorInput);
    const tieneCaracterEspecial = /[@$!%*?&]/.test(valorInput);

   
    if (
        tieneMinimo8Caracteres &&
        tieneLetraMayuscula &&
        tieneLetraMinuscula &&
        tieneNumero &&
        tieneCaracterEspecial
    ) {
        
        Equipo3.campo2.removeAttribute("style");
        bandera2 = true;
    } else {
        
        Equipo3.campo2.style.border = "5px solid red";
        bandera2 = false;
    }
});


//ID
Equipo3.campo3.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    //Limita la longitud a 60 caracteres
    valorInput = valorInput.slice(0, 7);

    //Asigna el valor al campo
    Equipo3.campo3.value = valorInput

    //Elimina caracteres especiales
    valorInput = valorInput.replace(/[àèìÉòáéíóúÁÉÍÓÚù´]/g, '');


    if (!expresion.campo3.test(valorInput)) {
        Equipo3.campo3.style.border = "5px solid red";
        bandera3 = false;
    } else {
        Equipo3.campo3.removeAttribute("style");
        bandera3 = true;
    }
});

//Nombre
Equipo3.campo4.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    //Limita la longitud a 7 caracteres (2 números + 5 letras)
    valorInput = valorInput.slice(0, 400);

    //Asigna el valor al campo
    Equipo3.campo4.value = valorInput

    //Elimina caracteres especiales
    valorInput = valorInput.replace(/[☺☻♥♦•○◙♂♀üâäàåçê♪ëèïîìÄÅÉæÆôöòûáéíóúÁÉÍÓÚùÿÖÜ¢£¥₧ƒª`´·¨°º¿⌐¬½¼«»÷±~!¡@#$%^&^*()_+\-=\[\]{};':"\\|,<>\/?]/g, '');

    
    if (!expresion.campo4.test(valorInput)) {
        Equipo3.campo4.style.border = "5px solid red";
        bandera4 = false;
    } else {
        Equipo3.campo4.removeAttribute("style");
        bandera4 = true;
    }
});

//Clave
Equipo3.campo5.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    // Limita la longitud a un máximo de 255 caracteres
    valorInput = valorInput.slice(0, 255); 

    Equipo3.campo5.value = valorInput;

    
    if (!expresion.campo5.test(valorInput)) {
        Equipo3.campo5.style.border = "5px solid red";
        bandera5 = false;
    } else {
        Equipo3.campo5.removeAttribute("style");
        bandera5 = true;
    }
});
