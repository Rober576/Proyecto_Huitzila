// Function to validate the form before submitting
function validateForm() {
    if (!validateNombre() || !validateTelefono() || !validateCorreo() || !validateId()) {
        alert('Registro fallido. Por favor, revise los campos resaltados.');
        return false;
    }
    return true;
}

// Add this function to highlight fields with errors
function highlightField(element) {
    element.style.border = '2px solid red';
}

// Add this function to unhighlight fields
function unhighlightField(element) {
    element.style.border = '';
}

// Add validation functions (validateNombre, validateTelefono, validateCorreo, validateId) here

// Get the form element
var formulario = document.getElementById('formulario');

// Attach an event listener for the form submission
formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validate the form before submitting
    if (validateForm()) {
        // If the form is valid, proceed with form submission
        var datos = new FormData(formulario);

        // Fetch API to send form data to PHP script
        fetch('../../controller/ejemplo/Registro_Validaciones.php', {
            method: 'POST',
            body: datos
        })
        .then(res => res.json())
        .then(data => {
            if (data === 'exito') {
                alert("Registro exitoso");
            } else if (data === 'errores') {
                alert("Registro fallido");
            } else {
                alert(data);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error en el proceso de registro.');
        });
    }
});
