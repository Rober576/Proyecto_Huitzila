var formulario = document.getElementById('advanced-form');

// Función para cargar las listas desde localStorage
function cargarListasDesdeLocalStorage() {
    let listaNombreTrabajador = JSON.parse(localStorage.getItem('listaNombreTrabajador')) || [];
    let listaDiasSeleccionados = JSON.parse(localStorage.getItem('listaDiasSeleccionados')) || [];
    let listaDescripcion = JSON.parse(localStorage.getItem('listaDescripcion')) || [];
    let listaGastoGasolina = JSON.parse(localStorage.getItem('listaGastoGasolina')) || [];
    let listaDatosVehiculo = JSON.parse(localStorage.getItem('listaDatosVehiculo')) || [];
    let listaGastoLiquidos = JSON.parse(localStorage.getItem('listaGastoLiquidos')) || [];
    let listaCompraMaterial = JSON.parse(localStorage.getItem('listaCompraMaterial')) || [];
    let listaGastosExtras = JSON.parse(localStorage.getItem('listaGastosExtras')) || [];
}

console.log('registro Actividades');

formulario.addEventListener('submit', function (e) {
    e.preventDefault(); //Cargar listas de la tabla de trabajadores para prepar los datos
    cargarListasDesdeLocalStorage();
    var datos = new FormData(formulario);

    


    // Convertir las listas a cadenas JSON y agregarlas al FormData
    datos.append('listaNombreTrabajador', JSON.stringify(listaNombreTrabajador));
    datos.append('listaDiasSeleccionados', JSON.stringify(listaDiasSeleccionados));
    datos.append('listaDescripcion', JSON.stringify(listaDescripcion));
    datos.append('listaGastoGasolina', JSON.stringify(listaGastoGasolina));
    datos.append('listaDatosVehiculo', JSON.stringify(listaDatosVehiculo));
    datos.append('listaGastoLiquidos', JSON.stringify(listaGastoLiquidos));
    datos.append('listaCompraMaterial', JSON.stringify(listaCompraMaterial));
    datos.append('listaGastosExtras', JSON.stringify(listaGastosExtras));
    datos.append('listaSemana', JSON.stringify(listaSemana));
    
    // Mostrar las listas en la consola
    console.log(listaNombreTrabajador);
    console.log(listaDiasSeleccionados);
    console.log(listaDescripcion);
    console.log(listaGastoGasolina);
    console.log(listaDatosVehiculo);
    console.log(listaGastoLiquidos);
    console.log(listaCompraMaterial);
    console.log(listaGastosExtras);
    console.log(listaSemana);


        
    fetch('../../../controller/Agricola/Actividades/php/Registro_Actividades.php', {
        method: 'POST',
        body: datos
    })

    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data === 'exito') {
            const form= document.getElementById('advanced-form');
            form.reset();
            alert("Registro de actividad exitoso");
            window.location.href = '../../../view/Agricola/Predios/Vista_Predios.html';    
        }
    })

})


var cancelButton = document.getElementById("cancelButton");

    // Agregar un event listener para el evento 'click'
    cancelButton.addEventListener("click", function() {
        // Mostrar una alerta
        var confirmar = confirm("¿Estás seguro de cancelar el registro?");
        
        // Si el usuario confirma la acción
        if (confirmar) {
            // Obtener el formulario por su ID
            var formulario1 = document.getElementById("advanced-form"); 
            
            // Limpiar los campos del formulario
            formulario1.reset();
            window.location.href = '../../../view/Agricola/Predios/Vista_Predios.html';
            
        }
    });

    function obtenerParametroURL(parametro) {
        var parametrosURL = new URLSearchParams(window.location.search);
        return parametrosURL.get(parametro);
      }