// Obtener el formulario y agregar un evento de escucha para el envío
var formulario = document.getElementById('form_datos');
formulario.addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener los datos del formulario
    var datos = new FormData(formulario);

    fetch('../../controller/Produccion/Registro_Cremas_Destilados_Licores.php', {
        method: 'POST',
        body: datos
    })
    .then(res => res.json())
    .then(data => {
         // Manejar la respuesta del servidor
         if (data === "existente") {
            alert("Lote existente");
            console.error('Error:', data);
        } else if (data === "exitoso") {
            alert("Registro exitoso");
            // Redirigir a otra página después de un registro exitoso
            location.href = "../../view/Produccion/Registro_Cremas_Destilados_Licores.html";
        } else {
            // Mostrar cualquier otro mensaje de error
            alert(data);
        }       
    })
    .catch(error => {
        console.error('Error en la solicitud fetch:', error);
        // Aquí puedes mostrar un mensaje de error al usuario o realizar otras acciones de manejo de errores
    });
    
    
});

// Agregar otro evento de escucha cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos del DOM
    var selectClase = document.getElementById('clase');
    var inputEdadLabel = document.querySelector('label[for="edad"]');
    var inputEdad = document.getElementById('edad'); // Corregido para seleccionar por ID
    var asterisco = document.querySelector('.campo-obligatorio');

    // Establecer estilos iniciales para el campo de entrada de la edad
    inputEdad.disabled = true;
    inputEdad.style.backgroundColor = 'lightgrey';

    // Agregar un evento de escucha para cambiar la edad según la clase seleccionada
    selectClase.addEventListener('change', function() {
        var selectedOption = selectClase.value;
        
        if (selectedOption === "Blanco" || selectedOption === "Abocado") {
            // Si se selecciona "Blanco" o "Abocado", bloquear el campo de entrada de la edad
            inputEdadLabel.textContent = "Edad";
            inputEdadLabel.classList.add('campo-bloqueado');
            inputEdadLabel.appendChild(asterisco);
            inputEdad.disabled = true;
            inputEdad.style.backgroundColor = 'lightgrey';

            // Si hay información en el campo de texto, borrarla
            inputEdad.value = '';

        } else {
            // Habilitar el campo de entrada de la edad y cambiar el texto del label según la clase seleccionada
            if (selectedOption === "Reposado") {
                inputEdadLabel.textContent = "Meses";
            } else if (selectedOption === "Añejo") {
                inputEdadLabel.textContent = "Años";
            }
            asterisco.classList.add('campo-obligatorio');
            inputEdadLabel.appendChild(asterisco);
            inputEdadLabel.classList.remove('campo-bloqueado');
            inputEdad.disabled = false;
            inputEdad.style.backgroundColor = 'white';
        }
    });
});

// Agregar un evento de escucha para el botón "cancelar"
formulario.cancelar.addEventListener('click', function (e){
    e.preventDefault();
    var resp = confirm("Los cambios realizados no se guardarán, ¿desea continuar?");
    if(resp ==  true){
        // Redirigir al usuario a otra página si confirma la cancelación
        window.location.href='Registro_Cremas_Destilados_Licores.html';
    }
});