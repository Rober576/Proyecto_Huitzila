// Se asignan banderas para controlar la validación de correo y contraseña
let bandera1 = false;
let bandera2 = false;


// Se pone un escuchador de eventos para el botón, para que cuando se haga click se ejecute la función
let botonIngresar = document.getElementById("ingresar");
botonIngresar.addEventListener("click", (e) => {
    // se revisa si todas las entradas son válidas
    if (bandera1 && bandera2) {
        // si todas son válidas se muestra un mensaje de éxito
        console.log("Ingreso exitoso");
    } else {
        // si alguna no es válida se cancela el envío
        //alert("Uno o más campos están vacios o son incorrectos \nPor favor verifique nuevamente.")
        console.log("Ingreso fallido");
        e.preventDefault();
    }
});

// Definición de la expresión regular para cada campo
const expresion = {
    Correo: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,40}$/,
    Password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.\\-_+*/!@#$])[A-Za-z\d.\\-_+*/!@#$]{8,16}$/,
};

// Escuchador de eventos para el campo Correo
login_form.Correo.addEventListener('keyup', (e) =>{
    let valorInput = e.target.value;

    // Asigna el valor al campo
    login_form.Correo.value = valorInput;

    // Verifica con la expresión regular
    if(!expresion.Correo.test(valorInput)){
        login_form.Correo.style.border = "3px solid red";
        bandera1 = false;
    } else {
        login_form.Correo.removeAttribute("style");
        bandera1 = true;
    }
});

// Escuchador de eventos para el campo Contraseña
login_form.Password.addEventListener('keyup', (e) =>{
    let valorInput = e.target.value;

    // Asigna el valor al campo
    login_form.Password.value = valorInput;

    // Verifica con la expresión regular
    if(!expresion.Password.test(valorInput)){
        login_form.Password.style.border = "3px solid red";
        bandera2 = false;
    } else {
        login_form.Password.removeAttribute("style");
        bandera2 = true;
    }
});