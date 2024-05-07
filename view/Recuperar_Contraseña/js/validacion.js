let bandera1=false;
let bandera2=false;

let botonRegistrar = document.getElementById("submitButton");
botonRegistrar.addEventListener("click", (e) =>{
    if(bandera1 == true && bandera2 == true){
        
        console.log("Registro exitoso");
        
    }

    else{
        if(contra1.value!=contra2.value) {
            alert("Las contraseñas no coinciden");
        } else {
            alert("Datos incorrectos");
        }
        e.preventDefault();
    }
})

const expresion = {
    password:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#.-_+/])[A-Za-z\d@$!%*?&#.-_+/]{8,}$/,
}


var contra1 = document.getElementById('contra1');
var contra2 = document.getElementById('contra2');

contra1.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    contra1.value = valorInput

    if (valorInput.length > 16) {
        contra1.value = valorInput.slice(0, 16);
    }

    if (!expresion.password.test(valorInput)) {
        contra1.style.border = "5px solid red";
        bandera1 = false;
    } else {
        contra1.removeAttribute("style");
        bandera1 = true;
    }
});

contra2.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    contra2.value = valorInput

    if (valorInput.length > 16) {
        contra2.value = valorInput.slice(0, 16);
    }

    if (!expresion.password.test(valorInput) || contra2.value !== contra1.value) {
        contra2.style.border = "5px solid red";
        bandera2 = false;
    } else {
        contra2.removeAttribute("style");
        bandera2 = true;
    }
});