var formulario = document.getElementById('form_datos');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    var datos = new FormData(formulario);

    fetch('../../controller/Produccion/Registro_Cremas_Destilados_Licores.php', {
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
            location.href="../../view/Produccion/Registro_Cremas_Destilados_Licores.html";
        }        
    })
    .catch(error => {
        alert("Registro exitoso");
        location.href="../../view/Produccion/Registro_Cremas_Destilados_Licores.html";
        console.error('Error:', error.message);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var selectTipo = document.getElementById('tipo');
    var selectClase = document.getElementById('clase');

    fetch('../../controller/Produccion/Obtener_Categorias_Clase_Especie.php?tipo=destilado')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            var option = document.createElement('option');
            option.value = item;
            option.textContent = item;

            if (selectTipo) {
                selectTipo.appendChild(option);
            }
        });
    })
    .catch(error => console.error('Error al obtener destilado:', error));

    fetch('../../controller/Produccion/Obtener_Categorias_Clase_Especie.php?tipo=clases')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            var option = document.createElement('option');
            option.value = item;
            option.textContent = item;

            if (selectClase) {
                selectClase.appendChild(option);
            }
        });
    })
    .catch(error => console.error('Error al obtener clases:', error));

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
        if (selectedOption === "Blanco" || selectedOption === "Abocado") {
            inputEdadLabel.textContent = "Edad"; // Restaurar texto original del label
            inputEdadLabel.classList.add('campo-bloqueado'); // Añadir clase para cambiar el estilo del label
            //asterisco.classList.remove('campo-obligatorio'); // Remover clase para quitar el asterisco rojo
            inputEdadLabel.appendChild(asterisco); // Añadir asterisco al label
            // Establecer el campo de entrada de la edad como deshabilitado y con un color de fondo gris claro
            inputEdad.disabled = true;
            inputEdad.style.backgroundColor = 'lightgrey';
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
      window.location.href='Registro_Cremas_Destilados_Licores.html';
    }

    
})

