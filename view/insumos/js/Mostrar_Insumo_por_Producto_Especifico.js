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
            acciones.className = "botones-columna";
            var link_crear_receta = document.createElement('a')
            link_crear_receta.className = 'botonesEditarYEliminar tx';

            var link_editar = document.createElement('a')
            link_editar.className = 'botonesEditarYEliminar tx';


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
            
            
        
        //     link_eliminar.innerHTML = "Eliminar";
        //     link_eliminar.dataset.id = datos[i][4];

        //     link_eliminar.addEventListener('click', function(event) {
        //     event.preventDefault(); 

        //     if (confirm('¿Estás seguro de eliminar el registro?')) {
                
        //         const id = this.dataset.id;

                
        //         fetch("../../controller/Insumos/Eliminar_Insumo_por_Producto.php?id=" + id, {
        //             method: 'GET'
        //         })
        //         .then(response => response.json())
                
        //         .then(data => {

        //             if(data === 'exito'){
        //                 alert('Eliminado con éxito');
        //                 window.location.reload();
        //             }/*
                    
        //             else if(data === 'movimientos'){
        //                 alert('No se ha podido eliminar el registro, ya que tiene movimientos asociados')
        //             }

        //             else{
        //                 alert(data)
        //             }*/
                    
        //         })
        //         .catch(error => {
        //             console.error('Error al eliminar el registro:', error);
        //         });
        //     }
        // });

        // //     acciones.appendChild(link_eliminar);

            link_crear_receta.innerHTML = "Crear receta";
            link_crear_receta.href = "../../view/insumos/Registro_Insumo_Por_Producto.html?id="+datos[i][0];
            //acciones.appendChild(link_crear_receta);  

            //acciones.appendChild(document.createElement('br'));
            //acciones.appendChild(document.createElement('br'));
    
             link_editar.innerHTML = "Ver Insumos";
             link_editar.href = "../../view/insumos/Visualizacion_Insumo_Producto_Especifico.html?id="+datos[i][0];
             acciones.appendChild(link_editar);

             var dentro_delDiv = document.createElement('div');
            dentro_delDiv.className = "none";
            dentro_delDiv.appendChild(link_crear_receta);
            var textoseparador = document.createElement("label"); 
            textoseparador.innerHTML = " | ";
            dentro_delDiv.appendChild(textoseparador);
            dentro_delDiv.appendChild(link_editar);
            acciones.appendChild(dentro_delDiv);
    
            row.appendChild(acciones);
            cuerpo_tabla.appendChild(row);
            
        }
    }
}