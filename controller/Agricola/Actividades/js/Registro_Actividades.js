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

    // Guardar las listas actualizadas en localStorage después de actualizarlas
    localStorage.setItem('listaNombreTrabajador', JSON.stringify(listaNombreTrabajador));
    localStorage.setItem('listaDiasSeleccionados', JSON.stringify(listaDiasSeleccionados));
    localStorage.setItem('listaDescripcion', JSON.stringify(listaDescripcion));
    localStorage.setItem('listaGastoGasolina', JSON.stringify(listaGastoGasolina));
    localStorage.setItem('listaDatosVehiculo', JSON.stringify(listaDatosVehiculo));
    localStorage.setItem('listaGastoLiquidos', JSON.stringify(listaGastoLiquidos));
    localStorage.setItem('listaCompraMaterial', JSON.stringify(listaCompraMaterial));
    localStorage.setItem('listaGastosExtras', JSON.stringify(listaGastosExtras));
    localStorage.setItem('listaSemana', JSON.stringify(listaSemana));
    
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
          //  window.location.href = "../../../view/Agricola/Plagas_y_herbicidas/Vista_Herbicidas.html";    
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
          //  window.location.href = "../../../view/Agricola/Plagas_y_herbicidas/Vista_Herbicidas.html";
            
        }
    });






    

