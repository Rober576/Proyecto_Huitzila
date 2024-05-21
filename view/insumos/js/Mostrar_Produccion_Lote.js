const cuerpo_tabla = document.getElementById("cuerpo");
const contenedor_tabla = document.getElementById("tablaResultado")
contenedor_tabla.style.display = 'none';

function buscar_datos(consulta) {
    

    const params = new URLSearchParams();
    params.append('consulta', consulta);

    
    fetch('../../controller/Insumos/Mostrar_Produccion_Lote.php', {
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
            var lote = document.createElement('td');
            var prod = document.createElement('td');
            var cant = document.createElement('td');
            var precUni = document.createElement('td');
            var costTot = document.createElement('td');

            var acciones = document.createElement('td')

            var link_eliminar = document.createElement('a')
            link_eliminar.className = 'botonesEditarYEliminar';

            
            lote.innerHTML = datos[i][0];
            row.appendChild(lote);
            cant.innerHTML = datos[i][1];
            row.appendChild(cant);
            prod.innerHTML = datos[i][2];
            row.appendChild(prod);
            precUni.innerHTML = datos[i][3];
            row.appendChild(precUni);
            costTot.innerHTML = datos[i][4];
            row.appendChild(costTot);
        
        
            link_eliminar.innerHTML = "Eliminar";
            link_eliminar.dataset.id = datos[i][2];

            link_eliminar.addEventListener('click', function(event) {
            event.preventDefault(); 

            if (confirm('¿Estás seguro de eliminar el registro?')) {
                
                const id = this.dataset.id;

                
                fetch("../../controller/Insumos/Eliminar_Insumo_por_Producto.php?id=" + id, {
                    method: 'GET'
                })
                .then(response => response.json())
                
                .then(data => {

                    if(data === 'exito'){
                        alert('Eliminado con éxito');
                        window.location.reload();
                    }/*
                    
                    else if(data === 'movimientos'){
                        alert('No se ha podido eliminar el registro, ya que tiene movimientos asociados')
                    }

                    else{
                        alert(data)
                    }*/
                    
                })
                .catch(error => {
                    console.error('Error al eliminar el registro:', error);
                });
            }
        });

            acciones.appendChild(link_eliminar);

    
            row.appendChild(acciones);
            cuerpo_tabla.appendChild(row);
            
        }
    }
}