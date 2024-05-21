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

function obtenerLotes() {
    fetch('../../controller/Insumos/Obtener_Lotes.php')
    .then(response => {
        if (!response.ok) {
            throw new Error('Ocurrió un error al obtener los datos de los insumos.');
        }
        return response.json();
    })
    .then(data => {
        llenarListaLotes(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function obtenerInsumos() {
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

window.addEventListener('DOMContentLoaded', obtenerProductos);
window.addEventListener('DOMContentLoaded', obtenerInsumos);
window.addEventListener('DOMContentLoaded', obtenerLotes);

document.getElementById('insumos_form').addEventListener('submit', function(event) {
    
    if (!validarFormulario()) {
        event.preventDefault(); 
    }
});


//llena los combobox
function llenarListaProductos(datosProductos) {
    const selectProductos = document.getElementById('Id_productos');

    


    
    /*const optionDefault = document.createElement('option');
    optionDefault.value = '';
    optionDefault.textContent = 'Seleccionar opción';
    optionDefault.selected = true; 
    selectProductos.appendChild(optionDefault);*/

    
    datosProductos.forEach(producto => {
        const option = document.createElement('option');
        option.value = producto.IDProducto;
        option.textContent = `${producto.IDProducto} - ${producto.ProductoTerminado}`;
        
        selectProductos.appendChild(option);
        
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

document.getElementById('Id_insumos').addEventListener('change', function() {
    
})

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


document.getElementById('insumos_form').addEventListener('submit', function(event) {
    
    if (!validarFormulario()) {
        event.preventDefault(); 
    }
});

function llenarListaLotes(datosProductos) {
    const selectProductos = document.getElementById('Mezcal');

    
    selectProductos.innerHTML = '';

    
    const optionDefault = document.createElement('option');
    optionDefault.value = '';
    optionDefault.textContent = 'Seleccionar opción';
    optionDefault.selected = true; 
    selectProductos.appendChild(optionDefault);

    
    for(i = 0; i < datosProductos.length; i++){
        const option = document.createElement('option');
        option.value = datosProductos[i];
        option.textContent = datosProductos[i];
        selectProductos.appendChild(option);
    }
}
