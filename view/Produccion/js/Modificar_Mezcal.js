var formulario = document.getElementById('form_datos');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    var datos = new FormData(formulario);

    fetch('../../controller/Produccion/Modificar_Mezcal.php', {
        method: 'POST',
        body: datos
    })
  
    .then(res => res.json())
    .then(data => {
        console.error(data.trim()); // Trim para eliminar espacios en blanco alrededor del mensaje
        if (data === "Lote existente") {
            alert(data); // Mostrar mensaje del servidor
            console.error('Error:', data);
        } else {
            alert("Registro exitoso"); // Mostrar mensaje de éxito sin comillas extras innecesarias
            location.href="../../view/Produccion/Mostrar_Mezcal.html";
        }        
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
});


   

document.addEventListener('DOMContentLoaded', function() {
    var selectClase = document.getElementById('clase');
    var inputEdadLabel = document.querySelector('label[for="edad"]');
    var inputEdad = document.getElementById('edad'); // Corregido para seleccionar por ID
    var asterisco = document.querySelector('.campo-obligatorio');

    // Se establecen los estilos iniciales del campo de entrada de la edad
    inputEdad.disabled = true;
    inputEdad.style.backgroundColor = 'lightgrey';

    selectClase.addEventListener('change', function() {
        var selectedOption = selectClase.value;
        
        // Si se selecciona "Blanco", se bloquea el campo de entrada de la edad y se borra su valor
        if (selectedOption === "Blanco") {
            inputEdad.value = ''; // Establecer el valor del campo de entrada como una cadena vacía
            inputEdadLabel.textContent = "Edad"; // Restaurar texto original del label
            inputEdadLabel.classList.add('campo-bloqueado'); // Añadir clase para cambiar el estilo del label
            asterisco.classList.remove('campo-obligatorio'); // Remover clase para quitar el asterisco rojo
            inputEdadLabel.appendChild(asterisco); // Añadir asterisco al label
            // Establecer el campo de entrada de la edad como deshabilitado y con un color de fondo gris claro
            inputEdad.disabled = true;
            inputEdad.style.backgroundColor = 'lightgrey';
            // Limpiar el contenido del campo de entrada de la edad
           
        
        } else {
            // Cambiar el texto del label según la clase seleccionada
            if (selectedOption === "Reposado") {
                inputEdadLabel.textContent = "Meses";
            } else if (selectedOption === "Añejo") {
                inputEdadLabel.textContent = "Años";
            }
            asterisco.classList.add('campo-obligatorio'); // Añadir clase para el asterisco rojo
            inputEdadLabel.appendChild(asterisco); // Añadir asterisco al label
            inputEdadLabel.classList.remove('campo-bloqueado'); // Remover clase cuando el campo no está bloqueado
            // Establecer el campo de entrada de la edad como habilitado y con un color de fondo blanco
            inputEdad.disabled = false;
            inputEdad.style.backgroundColor = 'white';
        }
    });
});





//responde cuando hay un click en el boton cancelar
formulario.cancelar.addEventListener('click', function (e){
    e.preventDefault();
    let urlAct = window.location+''

    var resp = confirm("Los cambios realizados no se guardarán, ¿desea continuar?");
    if(resp ==  true){
      window.location.href='Mostrar_Mezcal.html';
    }

    
})

