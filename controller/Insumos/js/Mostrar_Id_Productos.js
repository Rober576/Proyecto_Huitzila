function obtenerProductos() {
    fetch('../../controller/Insumos/Obtener_Id_Productos.php')
    .then(response => {
        if (!response.ok) {
            throw new Error('Ocurrió un error al obtener los datos de los insumos.');
        }
        return response.json();
    })
    .then(data => {
        llenarListaProductos(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


window.addEventListener('DOMContentLoaded', obtenerProductos);

document.getElementById('insumos_form').addEventListener('submit', function(event) {
    if (!validarFormulario()) {
        event.preventDefault(); 
    }
});


//llena los combobox
function llenarListaProductos(datosProductos) {
    const selectProductos = document.getElementById('Id_productos');
    
    selectProductos.innerHTML = '';

    const optionDefault = document.createElement('option');
    optionDefault.value = '';
    optionDefault.style.display = 'none';
    optionDefault.textContent = 'Seleccionar opción';
    optionDefault.selected = true; 
    selectProductos.appendChild(optionDefault);

    datosProductos.forEach(producto => {
        const option = document.createElement('option');
        option.value = producto.IDProducto;
        option.textContent = `${producto.IDProducto} - ${producto.ProductoTerminado}`;
        selectProductos.appendChild(option);
        
    }); 
}

function validarFormulario() {
    const selectInsumos = document.getElementById('Id_insumos');
    const selectProductos = document.getElementById('Id_productos');
    const selectLotes = document.getElementById('Mezcal');
    
    if (selectInsumos.value === '' || selectProductos.value === '' || selectLotes.value === '') {
        alert('Por favor, seleccione una opción.');
        return false; 
    }
    return true; 
}