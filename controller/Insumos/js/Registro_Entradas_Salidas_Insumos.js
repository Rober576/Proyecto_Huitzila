const idInsumosInput = document.getElementById('Id_insumos');
const costoUnitarioInput = document.getElementById('Costo_Unitario');

idInsumosInput.addEventListener('blur', function() {
    const id = this.value;
    
    fetch(`../../controller/Insumos/Registro_Entradas_Salidas_Insumos.php?id=${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ocurrió un error al obtener los datos');
            }
            return response.json();
        })
        .then(data => {
            if (data.length > 0) {
               
                const item = data[0]; 
                costoUnitarioInput.value = item.Costo;
                

            } else {
                alert('El insumo con el ID proporcionado no está registrado.');
                costoUnitarioInput.value = '';
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

const cantidadInput = document.getElementById('Cantidad');
const costoTotalInput = document.getElementById('Costo_Total');

cantidadInput.addEventListener('input', function() {
    const cantidad = parseInt(this.value);

    
    if (!isNaN(cantidad) && cantidad > 0) {
        
        if (costoUnitarioInput.value.trim() !== '') {
            
            const costoUnitario = parseFloat(costoUnitarioInput.value);
            const costoTotal = costoUnitario * cantidad;

            
            costoTotalInput.value = costoTotal.toFixed(2); 
        } else {
            
            costoTotalInput.value = '';
        }
    } else {
        
        costoTotalInput.value = '';
    }
});