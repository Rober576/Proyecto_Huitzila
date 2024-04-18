console.log('Validacion_Modificacion_Registro');
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario y agregar un listener para el evento 'submit'
    var formulario = document.getElementById('form_ingreso_agave');
    formulario.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevenir el envío del formulario por defecto

        // Obtener la fecha ingresada y la fecha actual
        let fecha = new Date(document.getElementById("fecha").value);
        let fechaActual = new Date();

        // Comprobar si la fecha ingresada es mayor o igual que la fecha actual
        if (fecha >= fechaActual) {
            alert("La fecha tiene que ser el día de hoy o mayor");
            return; // Detener la ejecución si la fecha es inválida
        }

        // Crear un nuevo FormData con los datos del formulario
        var datos = new FormData(formulario);

        // Realizar una petición fetch para enviar los datos del formulario
        fetch('../../controller/Produccion/Modificar_Movimientos.php', {
            method: 'POST',
            body: datos
        })
        .then(res => res.text()) // Convertir la respuesta a texto
        .then(data => {
            console.error(data.trim()); // Mostrar mensaje de respuesta (eliminando espacios en blanco)
            if (data.trim() === "Lote existente") {
                alert("Error: El lote ya existe");
                console.error('Error:', data);
            } else {
                alert("Modificación exitosa");
                location.href = "../../view/Produccion/Movimiento_Especifico_Mezcal.html";
            }
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
    });

    // Obtener el select de lote y cargar las opciones desde el servidor
    var selectCategoria = document.getElementById('lote');
    fetch('../../controller/Produccion/Obtener_Categorias_Clase_Especie.php?tipo=lote')
    //C:\xampp\htdocs\Proyecto_Huitzila\controller\Produccion\.php
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            var option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            selectCategoria.appendChild(option);
        });
    })
   
});
document.addEventListener('DOMContentLoaded', function() {
    var tipoSelect = document.getElementById('mov');
    var procedenciaLabel = document.querySelector('label[for="procedencia"]');
    var asterisco = document.querySelector('.campo-obligatorio');
    var volAguaInput = document.getElementById('vol_agua');
    var tipoMovimientoSelect = document.getElementById('tipo');
    console.log("tipo",tipoMovimientoSelect.value)
   

    const contenedorPrincipal = document.getElementById("contenedor-principal");
    const volumenMermaContainer = document.getElementById("volumen_merma");
    const alcVolMermaContainer = document.getElementById("alc_vol_merma");
    //const vol55Label = document.querySelector('label[for="alc_vol55"]');
    const vol55Input = document.getElementById('alc_vol55');
   
    contenedorPrincipal.style.display = "none";
    volumenMermaContainer.removeAttribute("required");
    alcVolMermaContainer.removeAttribute("required");
        
    if (tipoSelect.value === 'entrada') {
        console.log("por la entrada")
        procedenciaLabel.textContent = 'Procedencia';
        asterisco.classList.add('campo-obligatorio');
        var nuevoAsterisco = document.createElement('span');
        nuevoAsterisco.textContent = '*';
        nuevoAsterisco.classList.add('campo-obligatorio');
        procedenciaLabel.appendChild(nuevoAsterisco);
        volAguaInput.disabled = false;
        volAguaInput.style.backgroundColor = 'white';
       
       
        
    } else if (tipoSelect.value === 'salida') {
        console.log("por la salida")
        procedenciaLabel.textContent = 'Destino';
        asterisco.classList.add('campo-obligatorio');
        var nuevoAsterisco = document.createElement('span');
        nuevoAsterisco.textContent = '*';
        nuevoAsterisco.classList.add('campo-obligatorio');
        procedenciaLabel.appendChild(nuevoAsterisco);

        volAguaInput.disabled = true;
        volAguaInput.style.backgroundColor = 'lightgrey'; 
        volAguaInput.value = '';
        
    }
    

    


    tipoSelect.addEventListener('change', function() {
        if (tipoSelect.value === 'entrada') {
            procedenciaLabel.textContent = 'Procedencia';
            asterisco.classList.add('campo-obligatorio');
            var nuevoAsterisco = document.createElement('span');
            nuevoAsterisco.textContent = '*';
            nuevoAsterisco.classList.add('campo-obligatorio');
            procedenciaLabel.appendChild(nuevoAsterisco);

            // Desbloquear la entrada de texto
            volAguaInput.disabled = false;
            volAguaInput.style.backgroundColor = 'white'; // Restaurar color original
        } else if (tipoSelect.value === 'salida') {
            procedenciaLabel.textContent = 'Destino';
            asterisco.classList.add('campo-obligatorio');
            var nuevoAsterisco = document.createElement('span');
            nuevoAsterisco.textContent = '*';
            nuevoAsterisco.classList.add('campo-obligatorio');
            procedenciaLabel.appendChild(nuevoAsterisco);

            // Bloquear la entrada de texto
            volAguaInput.disabled = true;
            volAguaInput.style.backgroundColor = 'lightgrey'; // Cambiar color a gris

            // Si hay información en el campo de texto, borrarla
            volAguaInput.value = '';
        }
    });


    tipoMovimientoSelect.addEventListener('change', function() {
        if (tipoMovimientoSelect.value === 'Merma') {
            var asterisco = document.createElement('span');
            asterisco.textContent = '*';
            asterisco.classList.add('campo-obligatorio');
            
        } else {
            var asterisco = document.createElement('span');
            asterisco.textContent = '*';
            asterisco.classList.add('campo-obligatorio');
        }
    });

    // Función para manejar el cambio en el tipo de movimiento (merma/otros)
}); 

document.addEventListener("DOMContentLoaded", function() {
    // Función para mostrar u ocultar el contenedor de volumen y alcohol
    const contenedorPrincipal = document.getElementById("contenedor-principal");
    const volumenMermaContainer = document.getElementById("volumen_merma");
    const alcVolMermaContainer = document.getElementById("alc_vol_merma");
    const vol55Input = document.getElementById('alc_vol55');
   
    contenedorPrincipal.style.display = "none";
    volumenMermaContainer.removeAttribute("required");
    alcVolMermaContainer.removeAttribute("required");
    vol55Input.removeAttribute("required");
    document.getElementById("tipo").addEventListener("change", function() {
        if (this.value === "Merma") {
            contenedorPrincipal.style.display = "block";
            volumenMermaContainer.setAttribute("required", "required");
            alcVolMermaContainer.setAttribute("required", "required");
            vol55Input.setAttribute("required", "required");
        } else {
            contenedorPrincipal.style.display = "none";
            volumenMermaContainer.removeAttribute("required");
            alcVolMermaContainer.removeAttribute("required");
        }
    });
});
