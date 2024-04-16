
function obtenerIdNombreInsumos() {
    fetch('../../controller/Insumos/Obtener_Id_Insumos.php')
    .then(response => {
        if (!response.ok) {
            throw new Error('Ocurrió un error al obtener los datos de los insumos.');
        }
        return response.json();
    })
    .then(data => {
        llenarListaInsumos(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


function llenarListaInsumos(datosInsumos) {
    const selectInsumos = document.getElementById('Id_insumos');

    
    selectInsumos.innerHTML = '';

    
    const optionDefault = document.createElement('option');
    optionDefault.value = '';
    optionDefault.textContent = 'Seleccionar opción';
    optionDefault.selected = true; 
    selectInsumos.appendChild(optionDefault);

    
    datosInsumos.forEach(insumo => {
        const option = document.createElement('option');
        option.value = insumo.IDInsumo;
        option.textContent = `${insumo.IDInsumo} - ${insumo.NombreInsumo}`;
        selectInsumos.appendChild(option);
        
    });
    
   
    
}


function validarFormulario() {
    const selectInsumos = document.getElementById('Id_insumos');
    
    if (selectInsumos.value === '') {
        alert('Por favor, seleccione una opción.');
        return false; 
    }

    return true; 
}


window.addEventListener('DOMContentLoaded', obtenerIdNombreInsumos);


document.getElementById('Entradas_Salidas_insumos_form').addEventListener('submit', function(event) {
    
    if (!validarFormulario()) {
        event.preventDefault(); 
    }
});
