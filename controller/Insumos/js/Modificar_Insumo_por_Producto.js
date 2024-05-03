
document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById('insumos_form');
    
    const cantidadInput = document.getElementById('Cantidad');
    const costoUniInput = document.getElementById('Costo_uni');
    const costoTotInput = document.getElementById('Costo_tot');
    

    const validarNumerosDecimales = (value) => {
        return /^\d*\.?\d*$/.test(value);
    };

    const manejarEventoTeclado = (event) => {
        const allowedKeys = ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'];
        if (
            (!/[\d.]/.test(event.key) && !allowedKeys.includes(event.key)) || 
            (event.key === '.' && event.target.value.includes('.')) ||
            (event.key === '-' && event.target.selectionStart !== 0)
        ) {
            event.preventDefault();
        }
    };

    const validarFormulario = () => {
        let bandera = true;

        if (cantidadInput.value.trim() === ''){
            bandera = false;
            form.Cantidad.style.border = "5px solid red";
        }else{
            form.Cantidad.style.border = "none";
        }
        
        if (costoUniInput.value.trim() === ''){
            bandera = false;
            form.Costo_uni.style.border = "5px solid red";
        }else{
            form.Costo_uni.style.border = "none";
        }
        
        if (costoTotInput.value.trim() === '') {
            bandera = false;
            form.Costo_tot.style.border = "5px solid red";
        }else{
            form.Costo_tot.style.border = "none";
        }

        return bandera;
    };

    
    cantidadInput.addEventListener('keydown', manejarEventoTeclado);
    costoUniInput.addEventListener('keydown', manejarEventoTeclado);
    costoTotInput.addEventListener('keydown', manejarEventoTeclado);


    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const cantidadInput = document.getElementById('Cantidad');
        const costoUniInput = document.getElementById('Costo_uni');
        const costoTotInput = document.getElementById('Costo_tot');
        const idInput = document.getElementById('NoInsumo');

        if (validarFormulario()) {
            const formData = new FormData(form);
            formData.append('cantidadInput', cantidadInput.value);
            formData.append('costoUniInput', costoUniInput.value);
            formData.append('costoTotInput', costoTotInput.value);
            formData.append('idInput', idInput.value);
            
                
            fetch('../../controller/Insumos/Modificar_Insumo_por_Producto.php', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Hubo un problema al enviar los datos.');
                }
                return response.text();
            })
            .then(data => {
                
                alert('Los datos se han editado correctamente.');
                window.location.href = '../../view/insumos/Visualizacion_Insumo_Producto.html';
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Hubo un problema al enviar los datos.');
            });
        }
    });
});
