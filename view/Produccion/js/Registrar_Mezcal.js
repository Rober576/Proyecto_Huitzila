var formulario = document.getElementById('form_datos');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    var datos = new FormData(formulario);

    fetch('../../controller/Produccion/Registrar_Mezcal.php', {
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
            location.href = "../../view/Produccion/Registro_Mezcal.html";
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


document.addEventListener('DOMContentLoaded', function() {
    var selectCategoria = document.getElementById('categoria');
    var selectClase = document.getElementById('clase');
    var selectEspecie = document.getElementById('especie');

    fetch('../../controller/Produccion/Obtener_Categorias_Clase_Especie.php?tipo=categorias')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            var option = document.createElement('option');
            option.value = item;
            option.textContent = item;

            if (selectCategoria) {
                selectCategoria.appendChild(option);
            }
        });
    })
    .catch(error => console.error('Error al obtener categorías:', error));

    fetch('../../controller/Produccion/Obtener_Categorias_Clase_Especie.php?tipo=clasesMez')
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
    .catch(error => console.error('Error al obtener clasesMez:', error));

    fetch('../../controller/Produccion/Obtener_Categorias_Clase_Especie.php?tipo=especies')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            var option = document.createElement('option');
            option.value = item;
            option.textContent = item;

            if (selectEspecie) {
                selectEspecie.appendChild(option);
            }
        });
    })
    .catch(error => console.error('Error al obtener especies:', error));
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
      window.location.href='Registro_Mezcal.html';
    }

    
})

