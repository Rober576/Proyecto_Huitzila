let bandera1=false;

let botonRegistrar = document.getElementById("submitButton");
botonRegistrar.addEventListener("click", (e) =>{
    if(bandera1 == true){
        console.log("Registro exitoso");
    }

    else{
        alert("Correo no valido");
        e.preventDefault();
    }
})

const expresion = {
    email:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
}


var correo = document.getElementById('usuario');

correo.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    correo.value = valorInput

    .replace(/[^a-zA-Z0-9@._-]/g, '')
    .trim();

    if (valorInput.length > 40) {
        correo.value = valorInput.slice(0, 40);
    }

    if (!expresion.email.test(valorInput)) {
        correo.style.border = "5px solid red";
        bandera1 = false;
    } else {
        correo.removeAttribute("style");
        bandera1 = true;
    }
});