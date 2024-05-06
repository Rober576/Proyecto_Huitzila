let bandera1=false;

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function(e) {
    let correo = document.getElementById("usuario").value;
    let bandera1 = true; 

    if (bandera1) {
        e.preventDefault(); 
        let correoSistema = false;

        fetch('../../../controller/Recuperar_Contraseña/Obtener_Correos.php?tipo=correos')
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {
                    if (correo === item) {
                        correoSistema = true;
                    }
                });
                if (!correoSistema) {
                    alert("Correo no registrado");
                } else {
                    formulario.submit(); 
                }
            })
            .catch(error => console.error('Error al obtener los correos:', error));
    } else {
        alert("Correo no válido");
        e.preventDefault(); 
    }
});

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