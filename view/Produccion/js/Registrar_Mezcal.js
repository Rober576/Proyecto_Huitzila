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
        console.error(data.trim()); // Trim para eliminar espacios en blanco alrededor del mensaje
        if (data === "Lote existente") {
            alert(data); // Mostrar mensaje del servidor
            console.error('Error:', data);
        } else {
            alert("Registro exitoso"); // Mostrar mensaje de éxito sin comillas extras innecesarias
            location.href="../../view/Produccion/Registro_Mezcal.html";
        }        
    })
    .catch(error => {
        console.error('Error:', error.message);
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


//responde cuando hay un click en el boton cancelar
formulario.cancelar.addEventListener('click', function (e){
    e.preventDefault();
    let urlAct = window.location+''

    var resp = confirm("Los cambios realizados no se guardarán, ¿desea continuar?");
    if(resp ==  true){
      window.location.href='Mostrar_Mezcal.html';
    }

    
})