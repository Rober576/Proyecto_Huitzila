//declara las variables globales
var formulario = document.getElementById('mod_equipo3');
var banderacanselada = true;

function getParameterByName(name) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var idFromURL = getParameterByName('id');
document.getElementById('input_modificar').value = idFromURL;


let botoncanselar = document.getElementById("cancelarButton");
botoncanselar.addEventListener('click', function(e) {
    // Muestra una alerta de confirmación
    if (confirm("¿Estás seguro de que deseas cancelar?")) {
        // Si el usuario confirma, ejecuta la función Regresa() o cualquier otra acción que desees
        e.preventDefault();
        Regresa(); // Esta es la función que redirige al usuario a "tabla3.html"
    } else {
        var a = 0;
        banderacanselada = false;
        e.preventDefault();
        // Si el usuario cancela, no hagas nada
    }
});

// Función para redireccionar al usuario
function Regresa() {
    // Redirige al usuario a "tabla3.html"
    window.location.href = "tabla3.html";
}



formulario.addEventListener('submit', function (e)
{
    e.preventDefault();


    var datos= new FormData(formulario);
    //C:\version7\htdocs\Huitzila\Proyecto_Huitzila\controller\ejemplo\registro_ejemplo.php
    fetch('../../controller/ejemplo/Modificar_Equipo3.php', {
        method: 'POST',
        body: datos
    })

    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data === 'exito') {
            const form= document.getElementById('mod_equipo3');
            form.reset();
            //alert("Registro exitoso");
            //window.location.href = "tabla3.html";
           
            
        }
    })
})
// se declara una bandera para saber si la entrada es válida para cada campo
let bandera1 = true;
let bandera2 = true;
let bandera3 = true;
let bandera4 = true;
let bandera5 = true;



// se pone un escuchador de eventos para el botón, para que cuando se haga click se ejecute la función
let botonRegistrar = document.getElementById("submitButton");
botonRegistrar.addEventListener("click", (e) => {
    // se revisa si todas las entradas son válidas
    if (bandera1 && bandera2 && bandera3 && bandera4 ) {
        // si todas son válidas se muestra un mensaje de éxito
        console.log("Registro exitoso");
        alert("Registro exitoso")
        Regresa();
    } else {
        // si alguna no es válida se cancela el envío
        console.log("Envío cancelado");
        alert("Registro cancelado");
        e.preventDefault();
        
    }
});

// definición de la expresión regular para cada campo
const expresion = {
    campo1: /^(?=.{10,40}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,/////correo
    campo2: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,20}$/,///////////////contraseña
    campo3: /^\d{2}[a-zA-ZÑñ]{5}$/,//ID
    campo4: /^[a-zA-Z\s]{1,400}$/,////Nombre
    campo5: /^[A-Za-z]{0}|.{3,}$/,////////clave
}

// se pone un escuchador de eventos para cada campo, para que cuando se escriba se ejecute la función
mod_equipo3.campo1.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;


    // Asigna el valor al campo
    mod_equipo3.campo1.value = valorInput

    //elimina los espacios en blanco
    .replace(/\s+/g, '')

    //elimina caracteres especiales
    .replace(/[☺☻♥♦•○◙♂♀üâäàåçê♪ëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒª`´·¨°º¿⌐¬½¼«»÷±~!¡#$%^&^*()+\=\[\]{};':" \\|,<>\/?]/g, '')
    
    //elimina el ultimo espacio en blanco
    .trim()

    // verifica que se cumpla con la expresion correpondiente
    if (!expresion.campo1.test(valorInput)) {
        mod_equipo3.campo1.style.border = "5px solid red";
        bandera1 = false;
    } else {
        mod_equipo3.campo1.removeAttribute("style");
        bandera1 = true;
    }
});

// Escuchador de eventos para el campo de teléfono
mod_equipo3.campo2.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;



    // Asigna el valor al campo
    mod_equipo3.campo2.value = valorInput;

    // Verifica si cumple con la expresión regular
    if (!expresion.campo2.test(valorInput)) {
        mod_equipo3.campo2.style.border = "5px solid red";
        bandera2 = false;
    } else {
        mod_equipo3.campo2.removeAttribute("style");
        console.log("asf")
        bandera2 = true;
    }
});

// Escuchador de eventos para el campo de correo electrónico
mod_equipo3.campo3.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    // Limita la longitud a 60 caracteres
    valorInput = valorInput.slice(0, 7);

    // Asigna el valor al campo
    mod_equipo3.campo3.value = valorInput

    //elimina los espacios en blanco
    .replace(/\s+/g, '')

    //elimina caracteres especiales
    .replace(/[☺☻♥♦•○◙♂♀üâäàåçê♪ëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒª`@.´¨°º¿⌐¬½¼«»÷±~!¡#$%^&^*()+\=\[\]{};':" \\|,<>\/?.-]/g, '')
    .replace(/[_]/g,'')

    //elimina el ultimo espacio en blanco
    .trim()


    // Verifica si cumple con la expresión regular
    if (!expresion.campo3.test(valorInput)) {
        mod_equipo3.campo3.style.border = "5px solid red";
        bandera3 = false;
    } else {
        mod_equipo3.campo3.removeAttribute("style");
        bandera3 = true;
    }
});

mod_equipo3.campo4.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    // Limita la longitud a 7 caracteres (2 números + 5 letras)
    valorInput = valorInput.slice(0, 400);

    // Asigna el valor al campo
    mod_equipo3.campo4.value = valorInput

    //elimina caracteres especiales
    .replace(/[0-9☺☻♥♦•○◙♂♀üâäàåçê♪ëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒª`´·¨°º¿⌐¬½¼«»÷±~!¡#$%^&^*()+\=\[\]{};':"\\|,<>\/?@]/g, '')
    
    

    // Verifica si cumple con la expresión regular
    if (!expresion.campo4.test(valorInput)) {
        mod_equipo3.campo4.style.border = "5px solid red";
        bandera4 = false;
    } else {
        mod_equipo3.campo4.removeAttribute("style");
        bandera4 = true;
    }
});

// Escuchador de eventos para el campo de descripción
mod_equipo3.campo5.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    // Limita la longitud a un máximo (opcional)
    valorInput = valorInput.slice(0, 255); // Por ejemplo, se limita a 255 caracteres

    // Asigna el valor al campo
    mod_equipo3.campo5.value = valorInput

    //elimina los espacios en blanco
    .replace(/\s+/g, '')

    //elimina caracteres especiales
    .replace(/[0-9☺☻♥♦•○◙♂♀üâäàåçê♪ëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒª`´.·¨°º¿⌐¬½¼«»÷±~!¡@#$%^&^*()_+\-=\[\]{};':" \\|,<>\/?]/g, '')
    
    //elimina el ultimo espacio en blanco
    .trim()

    // Verifica si cumple con la expresión regular
    if (!expresion.campo5.test(valorInput)) {
        mod_equipo3.campo5.style.border = "5px solid red";
        bandera5 = false;
    } else {
        mod_equipo3.campo5.removeAttribute("style");
        bandera5 = true;
    }
});
