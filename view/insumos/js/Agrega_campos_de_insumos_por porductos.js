document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('agregarCampos');
    const container = document.getElementById('camposDinamicosContainer');

    let contador = 0; // Contador para asignar IDs únicos a los nuevos campos

    addButton.addEventListener('click', function() {
        contador++;

        // Creamos un nuevo conjunto de campos
        const nuevoCampo = document.createElement('div');
        nuevoCampo.classList.add('grupo1');

        nuevoCampo.innerHTML = `
        <label class="label_datos" for="ID">Productos<span class="campo-obligatorio">*</span></label>
        <select id="Id_productos" name="Id_productos" title="Identificador de los productos terminados." required>
            <option disabled selected>Seleccionar opción</option>
        </select>
            
        `;
        // Agregamos el nuevo conjunto de campos al contenedor
        container.appendChild(nuevoCampo);

        const nuevoCampo1 = document.createElement('div');
        nuevoCampo1.classList.add('grupo1');

        nuevoCampo1.innerHTML = `
        <label class="label_datos" for="ID">Insumos<span class="campo-obligatorio">*</span></label>
                <select id="Id_insumos" name="Id_insumos" title="Identificador de los Insumos terminados." required>
                    <option disabled selected>Seleccionar opción</option>
                </select>
            
        `;
        // Agregamos el nuevo conjunto de campos al contenedor
        container.appendChild(nuevoCampo1);

        const nuevoCampo2 = document.createElement('div');
        nuevoCampo2.classList.add('grupo1');

        nuevoCampo2.innerHTML = `
        <label class="label_datos" for="Unidades">Cantidad<span class="campo-obligatorio">*</span></label>
            <input type="number" id="Cantidad" name="Cantidad" title="Unidades en las que se mide el insumo (Conformado por 10 caracteres de solo letras)." required>
            
        `;
        // Agregamos el nuevo conjunto de campos al contenedor
        container.appendChild(nuevoCampo2);

        const nuevoCampo3 = document.createElement('div');
        nuevoCampo3.classList.add('grupo1');

        nuevoCampo3.innerHTML = `
        <label class="label_datos" for="Costo">Costo unitario<span class="campo-obligatorio">*</span></label>
            <input type="text" id="UCosto" name="UCosto" title="Costo del insumo de uno (Conformado por caracteres decimales)." required>
            
        `;
        // Agregamos el nuevo conjunto de campos al contenedor
        container.appendChild(nuevoCampo3);


        const nuevoCampo4 = document.createElement('div');
        nuevoCampo4.classList.add('grupo1');

        nuevoCampo4.innerHTML = `
        <label class="label_datos" for="Costo">Costo total<span class="campo-obligatorio">*</span></label>
            <input type="text" id="CostoT" name="CostoT" readonly 
            title="Costo del insumo de todo (Conformado por caracteres decimales)." required>
            
        `;
        // Agregamos el nuevo conjunto de campos al contenedor
        container.appendChild(nuevoCampo4);


        const nuevoCampo5 = document.createElement('div');
        nuevoCampo5.classList.add('grupo1');

        nuevoCampo5.innerHTML = `
        <label class="label_datos" for="ID">Lote de producción<span class="campo-obligatorio">*</span></label>
            <select id="Id_lotes" name="Id_lotes" title="Identificador de los productos terminados." required>
                <option disabled selected>Seleccionar opción</option>
            </select>
            
        `;
        // Agregamos el nuevo conjunto de campos al contenedor
        container.appendChild(nuevoCampo5);
    });
});