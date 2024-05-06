const cuerpo_tabla = document.getElementById("cuerpo");
const contenedor_tabla = document.getElementById("tablaResultado")
contenedor_tabla.style.display = 'none';

function buscar_datos(consulta) {
    
    const params = new URLSearchParams();
    params.append('consulta', consulta);

    
    fetch('../../controller/Insumos/Mostrar_Movimiento_Insumos_Especifico.php', {
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
            var fecha_col = document.createElement('td');
            var nombre_col = document.createElement('td'); 
            var movimiento_col = document.createElement('td');
            var destino_col = document.createElement('td');
            var cantidad_col = document.createElement('td');
            var costouni_col = document.createElement('td');
            var costotot_col = document.createElement('td');
            var cantidadrest_col = document.createElement('td');
            
            

            fecha_col.innerHTML = datos[i][0];
            nombre_col.innerHTML = datos[i][1]; 
            movimiento_col.innerHTML = datos[i][2];
            destino_col.innerHTML = datos[i][3];
            cantidad_col.innerHTML = datos[i][4];
            costouni_col.innerHTML = datos[i][5];
            costotot_col.innerHTML = datos[i][6];
            cantidadrest_col.innerHTML = datos[i][7];

        
            row.appendChild(fecha_col);
            row.appendChild(nombre_col);
            row.appendChild(movimiento_col);
            row.appendChild(destino_col);
            row.appendChild(cantidad_col);
            row.appendChild(costouni_col);
            row.appendChild(costotot_col);
            row.appendChild(cantidadrest_col);
            cuerpo_tabla.appendChild(row);
        }
    }
}

