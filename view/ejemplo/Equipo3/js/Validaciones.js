// se declara una bandera para saber si la entrada es válida para cada campo
let bandera1 = false;
let bandera2 = false;
let bandera3 = false;
let bandera4 = false;
let bandera5 = false;

// se pone un escuchador de eventos para el botón, para que cuando se haga click se ejecute la función
let botonRegistrar = document.getElementById("registrar");
botonRegistrar.addEventListener("click", (e) => {
    // se revisa si todas las entradas son válidas
    if (bandera1 && bandera2 && bandera3 && bandera4 && bandera5) {
        // si todas son válidas se muestra un mensaje de éxito
        console.log("Registro exitoso");
    } else {
        // si alguna no es válida se cancela el envío
        console.log("Envío cancelado");
        e.preventDefault();
    }
});

// definición de la expresión regular para cada campo
const expresion = {
    campo1: /^(?=.{10,40}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,/////correo
    campo2: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,20}$/,///////////////contraseña
    campo3: /^\d{2}[a-zA-ZÑñ]{5}$/,//ID
    campo4: /^[a-zA-Z\sáéíóúÁÉÍÓÚü.Ü]{1,400}$/, // Permitir letras con acentos y espacios en blanco
    campo5: /^[A-Za-z]{3,}$/,////////clave
}

// se pone un escuchador de eventos para cada campo, para que cuando se escriba se ejecute la función
Equipo3.campo1.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;


    // Asigna el valor al campo
    Equipo3.campo1.value = valorInput

    //elimina los espacios en blanco
    .replace(/\s+/g, '')

    //elimina caracteres especiales
    .replace(/[☺☻♥♦•○◙♂♀üâäàåçê♪ëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒª`´·¨°º¿⌐¬½¼«»÷±~!¡#$%^&^*()+\=\[\]{};':" \\|,<>\/?]/g, '')
    
    //elimina el ultimo espacio en blanco
    .trim()

    // verifica que se cumpla con la expresion correpondiente
    if (!expresion.campo1.test(valorInput)) {
        Equipo3.campo1.style.border = "5px solid red";
        bandera1 = false;
    } else {
        Equipo3.campo1.removeAttribute("style");
        bandera1 = true;
    }
});

// Escuchador de eventos para el campo de teléfono
Equipo3.campo2.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;



    // Asigna el valor al campo
    Equipo3.campo2.value = valorInput;

    // Verifica si cumple con la expresión regular
    if (!expresion.campo2.test(valorInput)) {
        Equipo3.campo2.style.border = "5px solid red";
        bandera2 = false;
    } else {
        Equipo3.campo2.removeAttribute("style");
        bandera2 = true;
    }
});

// Escuchador de eventos para el campo de correo electrónico
Equipo3.campo3.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    // Limita la longitud a 60 caracteres
    valorInput = valorInput.slice(0, 7);

    // Asigna el valor al campo
    Equipo3.campo3.value = valorInput

    //elimina los espacios en blanco
    .replace(/\s+/g, '')

    //elimina caracteres especiales
    .replace(/[-☺☻♥♦•○◙♂♀üâäàåçê♪ëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒª`´._-·¨°º¿⌐¬½¼«»÷±~!¡@#$%^&^*()+\=\[\]{};':" \\|,<>\/?]/g, '')
    
    //elimina el ultimo espacio en blanco
    .trim()


    // Verifica si cumple con la expresión regular
    if (!expresion.campo3.test(valorInput)) {
        Equipo3.campo3.style.border = "5px solid red";
        bandera3 = false;
    } else {
        Equipo3.campo3.removeAttribute("style");
        bandera3 = true;
    }
});

Equipo3.campo4.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    // Limita la longitud
    valorInput = valorInput.slice(0, 400);

    // Asigna el valor al campo
    Equipo3.campo4.value = valorInput

    //elimina los espacios en blanco
    //.replace(/\s+/g, '')

    //elimina caracteres especiales
    .replace(/[0-9☺☻♥♦•○◙♂♀üâäàåçê♪ëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒª`´¨°º¿⌐¬½¼«»÷±~!¡@#$%^&^*()_+\-=\[\]{};':"\\|,<>\/?]/g, '')
    
    //elimina el ultimo espacio en blanco
    .trim()

    // Verifica si cumple con la expresión regular
    if (!expresion.campo4.test(valorInput)) {
        Equipo3.campo4.style.border = "5px solid red";
        bandera4 = false;
    } else {
        Equipo3.campo4.removeAttribute("style");
        bandera4 = true;
    }
});

// Escuchador de eventos para el campo de descripción
Equipo3.campo5.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    // Verifica si el campo está vacío
    if (valorInput.trim() === '') {
        Equipo3.campo5.removeAttribute("style"); // Eliminar el borde rojo si se muestra
        bandera5 = true; // Establecer la bandera en true
        return; // Salir de la función
    }

    // Limita la longitud a un máximo (opcional)
    valorInput = valorInput.slice(0, 255); // Por ejemplo, se limita a 255 caracteres

    //elimina los espacios en blanco
    valorInput = valorInput.replace(/\s+/g, '');

    //elimina caracteres especiales
    valorInput = valorInput.replace(/[0-9☺☻♥♦•○◙♂♀üâäàåçê♪ëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒª`´.·¨°º¿⌐¬½¼«»÷±~!¡@#$%^&^*()_+\-=\[\]{};':" \\|,<>\/?]/g, '');


    // Verifica si cumple con la expresión regular
    if (!expresion.campo5.test(valorInput)) {
        Equipo3.campo5.style.border = "5px solid red";
        bandera5 = false;
    } 
    else {
    Equipo3.campo5.removeAttribute("style");
    bandera5 = true; 
    }


});
