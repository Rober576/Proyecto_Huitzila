//declara las variables globales
var formulario = document.getElementById('form_datos');
var respuesta = document.getElementById('respuesta');


formulario.addEventListener('submit', function (e)
{
    console.log("Mensaje de prueba en la consola");
    e.preventDefault();
    var datos= new FormData(formulario);
    fetch('../../controller/Produccion/php/Modificar_Mezcal.php', {
        method: 'POST',
        body: datos
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Hubo un problema al procesar la solicitud.');
        }
        return response.text();
    })
    .then(data => {
        if (data === 'exito') {
            alert("Actualización Exitosa");
            // Recargar la página después de
            window.location.href='../../../view/Produccion/Mostrar_Mezcal.html';
            
        }  else if (data === 'no exito'){
            alert("Hubo un error");
        }else{
            alert (data)
        }
    })

    .catch(error => {
        console.error('Error:', error.message);
    });
})

document.addEventListener('DOMContentLoaded', function() {
    var selectCategoria = document.getElementById('categoria');
    var selectClase = document.getElementById('clase');
    var selectEspecie = document.getElementById('especie');

    fetch('../../controller/Produccion/php/Obtener_Categorias_Clase_Especie.php?tipo=categorias')
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

    fetch('../../controller/Produccion/php/Obtener_Categorias_Clase_Especie.php?tipo=clases')
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

    fetch('../../controller/Produccion/php/Obtener_Categorias_Clase_Especie.php?tipo=especies')
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
    console.log("Mensaje de prueba en la consola");

    var resp = confirm("Los cambios realizados no se guardarán, ¿desea continuar?");
    if(resp ==  true){
      window.location.href='../../../view/Produccion/Mostrar_Mezcal.html';
    }    
})