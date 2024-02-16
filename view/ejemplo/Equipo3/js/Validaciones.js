function val_Correo() {
    const correoInput = document.getElementById('campo1');
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (correoInput.value.length < 7 || correoInput.value.length > 320 || !correoRegex.test(correoInput.value)) {
        highlightElement(correoInput);
        alert("El correo electrónico es inválido. Asegúrate de introducir una dirección de correo válida.");
        return false;
    } else {
        unhighlightElement(correoInput);
        return true;
    }
}

function val_Password() {
    const passwordInput = document.getElementById('campo2');
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (passwordInput.value.length < 8 || !passwordRegex.test(passwordInput.value)) {
        highlightElement(passwordInput);
        alert("La contraseña es inválida. Debe contener al menos 8 caracteres, incluyendo al menos una mayúscula, una minúscula, un número y un carácter especial.");
        return false;
    } else {
        unhighlightElement(passwordInput);
        return true;
    }
}

function val_ID() {
    const idInput = document.getElementById('campo3');
    const idRegex = /^[0-9]{2}[A-Za-z]{5}$/;

    if (!idRegex.test(idInput.value)) {
        highlightElement(idInput);
        alert("El ID es inválido. Debe tener 2 números seguidos de 5 letras.");
        return false;
    } else {
        unhighlightElement(idInput);
        return true;
    }
}

function val_Nombre() {
    const nombreInput = document.getElementById('campo4');
    const nombreRegex = /^[a-zA-Z\s]{1,400}$/;

    if (!nombreRegex.test(nombreInput.value)) {
        highlightElement(nombreInput);
        alert("El nombre es inválido. Solo se permiten letras y espacios.");
        return false;
    } else {
        unhighlightElement(nombreInput);
        return true;
    }
}

function val_clave() {
    // Aquí puedes implementar la lógica para validar el campo 5 (campo clave)
    return true; // Por ahora, solo se devuelve true para permitir el envío del formulario
}

function highlightElement(element) {
    element.style.border = "5px solid red";
}

function unhighlightElement(element) {
    element.style.border = ""; 
}
