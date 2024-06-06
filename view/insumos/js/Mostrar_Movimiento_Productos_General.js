const cuerpo_tabla = document.getElementById("cuerpo");
const contenedor_tabla = document.getElementById("tablaResultado");
contenedor_tabla.style.display = 'none';

function buscar_datos(consulta) {
    const params = new URLSearchParams();
    params.append('consulta', consulta);

    fetch('../../controller/Insumos/Mostrar_Movimiento_Productos_General.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(respuesta => {
        mostrarDatos(JSON.parse(respuesta));
    })
    .catch(error => {
        console.error('Hubo un problema con la solicitud:', error);
    });
}

buscar_datos();

document.getElementById('buscar-txt').addEventListener('keyup', function() {
    var valorBusqueda = this.value;
    if (valorBusqueda != "") {
        buscar_datos(valorBusqueda);
    } else {
        buscar_datos();
    }
});

function mostrarDatos(datos){
    cuerpo_tabla.innerHTML = '';

    if(datos.length == 0){
        tablaResultado.style.display = 'none';
        mensaje.style.display = 'block';
    } else {
        tablaResultado.style.display = 'block';
        mensaje.style.display = 'none';

        for(i = 0; i < datos.length; i++){
            var row = document.createElement('tr');
            var id_col = document.createElement('td');
            var nombre_insumo_col = document.createElement('td'); 
            var cantidad_col = document.createElement('td');
            var costo_unitario_col = document.createElement('td');
            var acciones_col = document.createElement('td');
            var btn_especifico = document.createElement('button');

            id_col.innerHTML = datos[i][0];
            nombre_insumo_col.innerHTML = datos[i][1]; 
            cantidad_col.innerHTML = datos[i][2];
            costo_unitario_col.innerHTML = datos[i][3];
            btn_especifico.textContent = 'Específico';

            btn_especifico.className = "Boton_Tabla";

            btn_especifico.addEventListener('click', function(event) {
                event.preventDefault(); 
                window.location.href = 'Mostrar_Movimiento_Productos_Especifico.html';
            });

            row.appendChild(id_col);
            row.appendChild(nombre_insumo_col);
            row.appendChild(cantidad_col);
            row.appendChild(costo_unitario_col);
            acciones_col.appendChild(btn_especifico);
            row.appendChild(acciones_col);
            cuerpo_tabla.appendChild(row);
        }
    }
}
