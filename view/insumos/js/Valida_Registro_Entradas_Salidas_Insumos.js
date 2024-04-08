document.addEventListener('DOMContentLoaded', function () {
   
    const form = document.getElementById('Entradas_Salidas_insumos_form');

   
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        
        if (validarFormulario()) {
            
            form.submit();
        } else {
            
            alert('Por favor, complete todos los campos correctamente.');
        }
    });

    
    function validarFormulario() {
        
        const idInsumos = document.getElementById('Id_insumos').value;
        const fecha = document.getElementById('Fecha').value;
        const entradaSalida = document.getElementById('Entrada_Salida').value;
        const destino = document.getElementById('Destino').value;
        const cantidad = document.getElementById('Cantidad').value;
        const costoUnitario = document.getElementById('Costo_Unitario').value;
        const costoTotal = document.getElementById('Costo_Total').value;

        
        let validacionExitosa = true;

       
        if (!/^\d{1,10}$/.test(idInsumos)) {
            document.getElementById('Id_insumos').style.border = "5px solid red";
            validacionExitosa = false;
        } else {
            document.getElementById('Id_insumos').style.border = "none";
        }

        
        if (fecha === '') {
            validacionExitosa = false;
        }

        
        if (!/^[a-zA-Z]{1,10}$/.test(entradaSalida)) {
            document.getElementById('Entrada_Salida').style.border = "5px solid red";
            validacionExitosa = false;
        } else {
            document.getElementById('Entrada_Salida').style.border = "none";
        }

        
        if (destino === '') {
            document.getElementById('Destino').style.border = "5px solid red";
            validacionExitosa = false;
        } else {
            document.getElementById('Destino').style.border = "none";
        }

        
        if (cantidad === '') {
            document.getElementById('Cantidad').style.border = "5px solid red";
            validacionExitosa = false;
        } else {
            document.getElementById('Cantidad').style.border = "none";
        }

        
        if (costoUnitario === '') {
            
            alert('Por favor, ingrese un ID de insumos que ya se encuentre registrado en el sistema.');
            document.getElementById('Id_insumos').style.border = "5px solid red";
            validacionExitosa = false;
        } else {
            document.getElementById('Id_insumos').style.border = "none";
        }

        
        if (costoTotal === '') {
            
            validacionExitosa = false;
        } else {
            document.getElementById('Costo_Total').style.border = "none";
        }

        return validacionExitosa;
    }

});
