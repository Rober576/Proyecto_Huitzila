const cuerpo_tabla = document.getElementById("cuerpo");
const contenedor_tabla = document.getElementById("tablaResultado")
contenedor_tabla.style.display = 'none';

function buscar_datos(consulta) {
    
    const params = new URLSearchParams();
    params.append('consulta', consulta);

    
    fetch('../../controller/Insumos/Mostrar_Insumo_por_Producto_Especifico.php', {
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
    console.log(datos);
    

    if(datos.length == 0){
        tablaResultado.style.display = 'none';
        mensaje.style.display = 'block';
    }

    else{
        tablaResultado.style.display = 'block';
        mensaje.style.display = 'none';

        for(i = 0; i < datos.length; i++){
            var row = document.createElement('tr');
            var idprodu = document.createElement('td');
            var idinsumo = document.createElement('td');
            var cant = document.createElement('td');
            //var costA = document.createElement('td');
            var costT = document.createElement('td');
            

            

            
            var acciones = document.createElement('td')
            var link_eliminar = document.createElement('a')
            link_eliminar.className = 'botonesEditarYEliminar';

            var link_editar = document.createElement('a')
            link_editar.className = 'botonesEditarYEliminar';


            idprodu.innerHTML = datos[i][0];
            row.appendChild(idprodu);
            idinsumo.innerHTML = datos[i][1];
            row.appendChild(idinsumo);
            cant.innerHTML = datos[i][2];
            row.appendChild(cant);
            //costA.innerHTML = datos[i][3];
            //row.appendChild(costA);
            costT.innerHTML = datos[i][3];
            row.appendChild(costT);
            
            
        
            link_eliminar.innerHTML = "Eliminar";
            link_eliminar.innerHTML = "Registrar receta";
            link_eliminar.href = "../../view/insumos/Registro_Insumo_Por_Producto.html?id="+datos[i][0];

            acciones.appendChild(link_eliminar);

            acciones.appendChild(document.createElement('br'));
            acciones.appendChild(document.createElement('br'));
    
             link_editar.innerHTML = "Ver Insumos";
             link_editar.href = "../../view/insumos/Visualizacion_Insumo_Producto_Especifico.html?id="+datos[i][0];
             acciones.appendChild(link_editar);
    
            row.appendChild(acciones);
            cuerpo_tabla.appendChild(row);
            
        }
    }
}