document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('agregarCampos');
    const container = document.getElementById('camposDinamicosContainer');
    let contador = 0;

    addButton.addEventListener('click', function() {
        contador++;

        // Creamos un nuevo conjunto de campos
        const nuevoCampo = document.createElement('div');
        nuevoCampo.classList.add('formulario-colum');
        nuevoCampo.id = 'campo-' + contador;

        nuevoCampo.innerHTML = `
            <div class="grupo1">
                <label class="label_datos" for="Id_productos">Productos<span class="campo-obligatorio">*</span></label>
                <select id="Id_productos" name="Id_productos" title="Identificador de los productos terminados." required>
                    <option disabled selected>Seleccionar opción</option>
                    <!-- Agrega opciones según tus necesidades -->
                </select>
            </div>
            <div class="grupo1">
                <label class="label_datos" for="Id_insumos">Insumos<span class="campo-obligatorio">*</span></label>
                <select id="Id_insumos" name="Id_insumos" title="Identificador de los Insumos terminados." required>
                    <option disabled selected>Seleccionar opción</option>
                    <!-- Agrega opciones según tus necesidades -->
                </select>
            </div>
            <div class="grupo1">
                <label class="label_datos" for="Cantidad">Cantidad<span class="campo-obligatorio">*</span></label>
                <input type="number" id="Cantidad" name="Cantidad" title="Unidades en las que se mide el insumo." required>
            </div>
            <div class="grupo1">
                <label class="label_datos" for="UCosto">Costo unitario<span class="campo-obligatorio">*</span></label>
                <input type="text" id="UCosto" name="UCosto" title="Costo del insumo unitario." required>
            </div>
            <div class="grupo1">
                <label class="label_datos" for="CostoT">Costo total<span class="campo-obligatorio">*</span></label>
                <input type="text" id="CostoT" name="CostoT" readonly title="Costo total del insumo." required>
            </div>
            <div class="grupo1">
                <label class="label_datos" for="Id_lotes">Lote de producción<span class="campo-obligatorio">*</span></label>
                <select id="Id_lotes" name="Id_lotes" title="Identificador del lote de producción." required>
                    <option disabled selected>Seleccionar opción</option>
                    <!-- Agrega opciones según tus necesidades -->
                </select>
            </div>
            <button type="button" onclick="eliminarCampo(${contador})" class="Boton_cancelar">Eliminar Campos</button>
        `;
        
        // Agregamos el nuevo conjunto de campos al contenedor
        container.appendChild(nuevoCampo);
    });

    // Función para eliminar un campo específico
    window.eliminarCampo = function(id) {
        const campoEliminar = document.getElementById('campo-' + id);
        if (campoEliminar) {
            container.removeChild(campoEliminar);
        }
    };
});