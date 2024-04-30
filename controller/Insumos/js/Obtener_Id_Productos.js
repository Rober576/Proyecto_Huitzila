
function obtenerIdProductos() {
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


function llenarListaProductos(datosProductos) {
    const selectProductos = document.getElementById('Id_productos');

    
    selectProductos.innerHTML = '';

    
    const optionDefault = document.createElement('option');
    optionDefault.value = '';
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
    const selectProductos = document.getElementById('Id_productos');
    
    if (selectProductos.value === '') {
        alert('Por favor, seleccione una opción.');
        return false; 
    }

    return true; 
}


window.addEventListener('DOMContentLoaded', obtenerIdProductos);


document.getElementById('Entradas_Salidas_productos_form').addEventListener('submit', function(event) {
    
    if (!validarFormulario()) {
        event.preventDefault(); 
    }
});
