let entradaOSalida;
let cantidadSeleccionada;

document.addEventListener('DOMContentLoaded', function () {
    const entradaSalidaSelect = document.getElementById('Entrada_Salida');
    const idMovimientoSelect = document.getElementById('ID_Movimiento');

    entradaSalidaSelect.addEventListener('change', function() {
        const valorSeleccionado = this.value;
        entradaOSalida = this.value;

        Array.from(idMovimientoSelect.options).forEach(option => {
            option.style.display = 'none';
        });

        
        if (valorSeleccionado === 'Entrada') {
            
            for (let i = 0; i <= 4; i++) {
                idMovimientoSelect.options[i].style.display = 'block';
            }
        } else if (valorSeleccionado === 'Salida') {
            
            for (let i = idMovimientoSelect.options.length - 3; i < idMovimientoSelect.options.length; i++) {
                idMovimientoSelect.options[i].style.display = 'block';
            }
        }
    });

    
});




document.addEventListener('DOMContentLoaded', function () {
    const idInsumosSelect = document.getElementById('Id_productos');
    const costoUnitarioInput = document.getElementById('Costo_Unitario');
    const cantidadInput = document.getElementById('Cantidad');
    const costoTotalInput = document.getElementById('Costo_Total');
    let existenciaProductos;
    let actualizarExistencia;

    idInsumosSelect.addEventListener('change', function() {
        const id = this.value;
        
        fetch(`../../controller/Insumos/Obtener_Entradas_Salidas_Productos.php?id=${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ocurrió un error al obtener los datos');
                }
                return response.json();
            })
            .then(data => {
                if (data.length > 0) {
                    const item = data[0]; 
                    costoUnitarioInput.value = item.CostoUltimo;
                    existenciaProductos = item.Cantidad;
                    
                    document.getElementById('Id_productos').style.border = "none";
                    idInsumosSelect.setCustomValidity('');
                } else {
                    idInsumosSelect.setCustomValidity('Por favor, seleccione una opción de la lista');
                    document.getElementById('Id_productos').style.border = "5px solid red";
                    costoUnitarioInput.value = '';
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    cantidadInput.addEventListener('keydown', function(event) {
        const key = event.key;
        const isNumber = (key >= '0' && key <= '9') || key === 'Backspace';
        if (!isNumber) {
            event.preventDefault();
        }
    });


    cantidadInput.addEventListener('input', function() {
        const cantidad = parseInt(this.value);
        cantidadSeleccionada = parseInt(this.value);
        
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

    

    document.getElementById('Entradas_Salidas_productos_form').addEventListener('submit', function (event) {
        event.preventDefault();

        if (validarFormulario()) { 
            var datos = new FormData(this);
            datos.append('actualizarExistencia', actualizarExistencia);

            fetch("../../controller/Insumos/Registro_Entradas_Salidas_Productos.php", {
                method: 'POST',
                body: datos
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data === 'exito') {
                        const form = document.getElementById('Entradas_Salidas_productos_form');
                        form.reset();
                        alert("Registro exitoso");
                    }
                })

        } else {
            console.log("Registro fallido. Por favor, revise los campos resaltados.");
            alert("Registro fallido. Por favor, revise los campos resaltados.");
        }
    });

    function validarFormulario() {
        const idInsumos = document.getElementById('Id_productos').value;
        const fecha = document.getElementById('Fecha').value;
        const entradaSalida = document.getElementById('Entrada_Salida').value;
        const destino = document.getElementById('Destino').value;
        const cantidad = document.getElementById('Cantidad').value;
        const costoUnitario = document.getElementById('Costo_Unitario').value;
        const costoTotal = document.getElementById('Costo_Total').value;
        const idMovimiento = document.getElementById('ID_Movimiento').value;
    
        let validacionExitosa = true;
    
    
        if (fecha === '') {
            validacionExitosa = false;
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

        if (cantidad < 1) {
            alert("La cantidad debe ser mayor o igual a 1.")
            document.getElementById('Cantidad').style.border = "5px solid red";
            validacionExitosa = false;
            
        } else {
            document.getElementById('Cantidad').style.border = "none";
        }
    
        if (costoUnitario === '') {
            alert('Por favor, ingrese un ID de insumos que ya se encuentre registrado en el sistema.');
            document.getElementById('Id_productos').style.border = "5px solid red";
            validacionExitosa = false;
        } else {
            document.getElementById('Id_productos').style.border = "none";
        }
    
        if (costoTotal === '') {
            validacionExitosa = false;
        } else {
            document.getElementById('Costo_Total').style.border = "none";
        }
    
        if (entradaSalida === '') {
            document.getElementById('Entrada_Salida').style.border = "5px solid red";
            alert('Por favor, selecciona una opción en Entrada/Salida.');
            validacionExitosa = false;
        } else {
            document.getElementById('Entrada_Salida').style.border = "none";
        }
    
        if (idMovimiento === '') {
            document.getElementById('ID_Movimiento').style.border = "5px solid red";
            alert('Por favor, selecciona una opción en ID Movimiento.');
            validacionExitosa = false;
            
        } else {
            document.getElementById('ID_Movimiento').style.border = "none";
        }

        if(entradaOSalida === 'Entrada'){
            actualizarExistencia = parseInt(existenciaProductos) + parseInt(cantidadSeleccionada);

        }else if(entradaOSalida === 'Salida'){

            if (existenciaProductos >= cantidadSeleccionada){
                actualizarExistencia = parseInt(existenciaProductos) - parseInt(cantidadSeleccionada);
                document.getElementById('Cantidad').style.border = "none";
                if (cantidad < 1){
                    document.getElementById('Cantidad').style.border = "5px solid red"; 
                }

            }else{
                alert("Productos insuficientes. La cantidad de ese producto es de " + parseInt(existenciaProductos) + ", por favor, seleccione una cantidad menor.")
                validacionExitosa = false;
                document.getElementById('Cantidad').style.border = "5px solid red";
            }

        }
    
        return validacionExitosa;
    }

});
