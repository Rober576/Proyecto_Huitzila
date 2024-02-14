document.getElementById('formulario').addEventListener('submit', function (event) {
    if (!validateNombre() || !validateTelefono() || !validateCorreo() || !validateId()) {
        alertUser('Registro fallido. Por favor, revise los campos resaltados.');
        event.preventDefault();
    } else {
        alertUser('Registro exitoso');
    }
});

function validateNombre() {
    const nombreInput = document.getElementById('nombre');
    const nombreRegex = /^[A-Za-z\s.]+$/;

    if (!nombreRegex.test(nombreInput.value)) {
        highlightElement(nombreInput);
        return false;
    } else {
        unhighlightElement(nombreInput);
        return true;
    }
}

function validateTelefono() {
    const telefonoInput = document.getElementById('telefono');
    const telefonoRegex = /^[0-9]{10}$/;

    if (!telefonoRegex.test(telefonoInput.value)) {
        highlightElement(telefonoInput);
        return false;
    } else {
        unhighlightElement(telefonoInput);
        return true;
    }
}

function validateCorreo() {
    const correoInput = document.getElementById('correo');
    const correoRegex = /^[A-Za-z@._-]+$/;
    const correoFormatRegex = /^[A-Za-z@._-]+[.][A-Za-z]+[.][A-Za-z]+$/;

    if (!correoRegex.test(correoInput.value) || !correoFormatRegex.test(correoInput.value)) {
        highlightElement(correoInput);
        return false;
    } else {
        unhighlightElement(correoInput);
        return true;
    }
}

function validateId() {
    const idInput = document.getElementById('id');
    const idRegex = /^[0-9]{2}[A-Za-z]{5}$/;

    if (!idRegex.test(idInput.value)) {
        highlightElement(idInput);
        return false;
    } else {
        unhighlightElement(idInput);
        return true;
    }
}

function highlightElement(element) {
    element.style.border = '2px solid red';
}

function unhighlightElement(element) {
    element.style.border = '';
}

function alertUser(message) {
    // Replace with a user-friendly way to display messages, e.g., on the page or using a modal.
    alert(message);
}
