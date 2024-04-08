document.addEventListener('DOMContentLoaded', function () {
    const idInsumosInput = document.getElementById('Id_productos');
    const costoUnitarioInput = document.getElementById('Costo_Unitario');
    const cantidadInput = document.getElementById('Cantidad');
    const costoTotalInput = document.getElementById('Costo_Total');

    idInsumosInput.addEventListener('blur', function() {
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
                    costoUnitarioInput.value = item.Costo;
                    document.getElementById('Id_productos').style.border = "none";
                } else {
                    alert('El insumo con el ID proporcionado no está registrado.');
                    document.getElementById('Id_productos').style.border = "5px solid red";
                    costoUnitarioInput.value = '';
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

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


    document.getElementById('Entradas_Salidas_productos_form').addEventListener('submit', function (event) {
        event.preventDefault();

        
        if (todasBanderasAceptadas()) {
            var datos = new FormData(this);

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

   
    function todasBanderasAceptadas() {
        
        return true;
    }
});
