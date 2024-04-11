document.addEventListener('DOMContentLoaded', function() {
    var formulario = document.getElementById('form_ingreso_agave');

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        var datos = new FormData(formulario);


        fetch('../../controller/Produccion/Registrar_Movimientos.php', {
            method: 'POST',
            body: datos
        })
        .then(res => res.json()) // Cambiar a text() para obtener la respuesta como texto
        .then(data => {
            console.error(data.trim()); // Trim para eliminar espacios en blanco alrededor del mensaje
            console.log("Entro4")
            if (data.trim() === "La fecha ingresada es menor que la ultima fecha registrada") {
                // Mostrar mensaje de error si la fecha ingresada es menor que la última fecha registrada
                alert("Error: La fecha ingresada es menor que la última fecha registrada");
                console.error("Error: La fecha ingresada es menor que la ultima fecha registrada");
            } else {
                // Si la inserción es exitosa, redireccionar a la página de éxito
                alert("Registro exitoso");
                location.href = "../../view/Produccion/Registro_Movimientos.html";
            }      
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
        
        });

    var selectCategoria = document.getElementById('lote');

    fetch('../../controller/Produccion/Obtener_Lote.php?tipo=lote')
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

    // Responde cuando hay un click en el botón cancelar
    formulario.cancelar.addEventListener('click', function (e) {
        e.preventDefault();
        let urlAct = window.location;

        var resp = confirm("Los cambios realizados no se guardarán, ¿desea continuar?");
        if(resp ==  true){
            window.location.href='Mostrar_Mezcal.html';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var tipoSelect = document.getElementById('mov');
    var procedenciaLabel = document.querySelector('label[for="procedencia"]');
    var asterisco = document.querySelector('.campo-obligatorio');
    var volAguaInput = document.getElementById('vol_agua');
    var tipoMovimientoSelect = document.getElementById('tipo');
    var vol55Label = document.querySelector('label[for="alc_vol55"]');
    var vol55Input = document.getElementById('alc_vol55');

    // Iniciar desactivado el campo alc_vol55 y establecer color de fondo gris
    vol55Input.disabled = true;
    vol55Input.style.backgroundColor = 'lightgrey';

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
        if (tipoMovimientoSelect.value === 'merma') {
            vol55Label.textContent = 'Vol a 55% alc.';
            var asterisco = document.createElement('span');
            asterisco.textContent = '*';
            asterisco.classList.add('campo-obligatorio');
            vol55Label.appendChild(asterisco);
            vol55Input.disabled = false;
            vol55Input.style.backgroundColor = 'white'; // Restaurar color original
        } else {
            vol55Label.textContent = 'Vol a 55% alc.';
            var asterisco = document.createElement('span');
            asterisco.textContent = '*';
            asterisco.classList.add('campo-obligatorio');
            vol55Label.appendChild(asterisco);
            vol55Input.disabled = true;
            vol55Input.style.backgroundColor = 'lightgrey'; // Cambiar color a gris
            vol55Input.value = ''; // Vaciar el campo si no es "merma"
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos
    const volumenMermaContainer = document.getElementById("volumen_merma");
    const alcVolMermaContainer = document.getElementById("alc_vol_merma");
    const volumenciaLabel = document.querySelector('label[for="volumen_merma"]');
    const alcVolLabel = document.querySelector('label[for="alc_vol_merma"]');
  
    // Ocultar los elementos al principio
    volumenMermaContainer.style.display = "none";
    alcVolMermaContainer.style.display = "none";
    volumenciaLabel.style.display = "none";
    alcVolLabel.style.display = "none";
  
    // Desactivar el atributo required de los campos ocultos
    document.getElementById("volumen_merma").removeAttribute("required");
    document.getElementById("alc_vol_merma").removeAttribute("required");
  
    // Agregar evento de cambio al select
    document.getElementById("tipo").addEventListener("change", function() {
      // Mostrar los elementos solo si la opción seleccionada es "merma"
      if (this.value === "merma") {
        volumenMermaContainer.style.display = "block";
        alcVolMermaContainer.style.display = "block";
        volumenciaLabel.style.display = "block";
        alcVolLabel.style.display = "block";
  
        // Activar el atributo required cuando se muestran los campos
        document.getElementById("volumen_merma").setAttribute("required", "required");
        document.getElementById("alc_vol_merma").setAttribute("required", "required");
      } else {
        // Ocultar los elementos si no es "merma"
        volumenMermaContainer.style.display = "none";
        alcVolMermaContainer.style.display = "none";
        volumenciaLabel.style.display = "none";
        alcVolLabel.style.display = "none";
  
        // Desactivar el atributo required cuando se ocultan los campos
        document.getElementById("volumen_merma").removeAttribute("required");
        document.getElementById("alc_vol_merma").removeAttribute("required");
      }
    });
});
