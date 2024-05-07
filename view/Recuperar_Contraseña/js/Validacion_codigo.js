let bandera1=false;

let botonRegistrar = document.getElementById("submitButton");
botonRegistrar.addEventListener("click", (e) =>{
    if(bandera1){
        console.log("Registro exitoso");
    }

    else{
        e.preventDefault();
    }
})

const expresion = {
    code:/^\d{8}$/,
}

var codigo = document.getElementById('codigo');

codigo.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    codigo.value = valorInput

    .replace(/\D/g, '')
    .trim();

    if (!expresion.code.test(valorInput)) {
        codigo.style.border = "5px solid red";
        bandera1 = false;
    } else {
        codigo.removeAttribute("style");
        bandera1 = true;
    }
});