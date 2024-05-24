const cuerpo_tabla = document.getElementById("cuerpo");
const contenedor_tabla = document.getElementById("tablaResultado")
contenedor_tabla.style.display = 'none';

function buscar_datos(consulta) {
    // Construye los parámetros de la consulta
    const params = new URLSearchParams();
    params.append('consulta', consulta);

    // Realiza la solicitud fetch
    fetch('../../controller/Insumos/Mostrar_insumos.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
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

// llama a buscar_datos() al cargar la página
buscar_datos();

// Escucha el evento keyup en el elemento con el ID 'busqueda'
document.getElementById('buscar-txt').addEventListener('keyup', function() {
    var valorBusqueda = this.value;
    if (valorBusqueda != "") {
        buscar_datos(valorBusqueda);
    } else {
        buscar_datos();
    }
});

function mostrarDatos(datos){
    console.log(datos);
    cuerpo_tabla.innerHTML = '';    

    if(datos.length == 0){   
        tablaResultado.style.display = 'none';
        mensaje.style.display = 'block';
    }

    else{
        tablaResultado.style.display = 'block';
        mensaje.style.display = 'none'

        for(i = 0; i < datos.length; i++){
            var row = document.createElement('tr');
            var id_col = document.createElement('td');
            var nombre_col = document.createElement('td');
            var desc_col = document.createElement('td');
            var unidades_col = document.createElement('td');    
            var exist_col = document.createElement('td');
            var fecha_col = document.createElement('td');
            var smin_col = document.createElement('td');
            var smax_col = document.createElement('td');
            var costo_col = document.createElement('td');

            var acciones = document.createElement('td');
            acciones.className = "botones-columna";
            var link_eliminar = document.createElement('button');
            link_eliminar.className = "Boton_Tabla";


            var link_editar = document.createElement('a');
            link_editar.className = "Boton_Tabla tx";

            id_col.innerHTML = datos[i][0]
            row.appendChild(id_col);
            nombre_col.innerHTML = datos[i][1]
            row.appendChild(nombre_col);
            desc_col.innerHTML = datos[i][2]
            row.appendChild(desc_col);
            unidades_col.innerHTML = datos[i][3]
            row.appendChild(unidades_col);
            exist_col.innerHTML = datos[i][4]
            row.appendChild(exist_col);
            fecha_col.innerHTML = datos[i][5]
            row.appendChild(fecha_col);
            smin_col.innerHTML = datos[i][6]
            row.appendChild(smin_col);
            smax_col.innerHTML = datos[i][7]
            row.appendChild(smax_col);
            costo_col.innerHTML = datos[i][8]
            row.appendChild(costo_col);

            link_eliminar.innerHTML = "Eliminar";
            link_eliminar.dataset.id = datos[i][0];

            link_eliminar.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el enlace siga el href

            if (confirm('¿Estás seguro de eliminar el registro?')) {
                // Obtiene el ID del atributo 'data' del enlace
                const id = this.dataset.id;

                // Realiza la solicitud fetch para eliminar el registro
                fetch("../../controller/Insumos/Eliminar_Insumo.php?id=" + id, {
                    method: 'GET'
                })
                .then(response => response.json())
                .then(data => {

                    if(data === 'exito'){
                        alert('Eliminado con éxito');
                        window.location.reload();
                    }

                    else if(data === 'movimientos'){
                        alert('No se ha podido eliminar el registro, ya que tiene movimientos asociados')
                    }

                    else{
                        alert(data)
                    }
                    
                })
                .catch(error => {
                    console.error('Error al eliminar el registro:', error);
                });
            }
        });

            acciones.appendChild(link_eliminar);

            var separador = document.createTextNode(' | ');
        
            // Añade el nodo de texto al final del elemento "acciones"
            acciones.appendChild(separador);
    
            link_editar.innerHTML = "Editar";
            link_editar.href = "../../controller/Insumos/Get_Insumo.php?id="+datos[i][0];
            acciones.appendChild(link_editar);
    
            row.appendChild(acciones);
            cuerpo_tabla.appendChild(row);
            
        }
    }
}