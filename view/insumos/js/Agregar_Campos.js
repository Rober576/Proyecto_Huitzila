const cuerpo_tabla = document.getElementById("cuerpo");
const contenedor_tabla = document.getElementById("tablaResultado")
const resultado = document.getElementById("todos_totales")
contenedor_tabla.style.display = 'none';
const total_titulo = document.createElement('tr')
const totalCell = document.createElement('h3');
totalCell.colSpan = "8"; // Ajusta el número de columnas según tus necesidades
total_titulo.innerHTML = '';
var total = 0

var registros = []
var registros_mezcal = []


let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let id = urlParams.get('id');
console.log('Valor del parámetro id:', id);

prod = document.getElementById("Id_productos").value=id;


insumos_form.agregarCampos.addEventListener('click', function valida(e){
    if(document.getElementById('Id_insumos').value == '' || document.getElementById('Cantidad').value == '' || document.getElementById('UCosto').value == '' || document.getElementById('CostoT').value == ''){
        alert('Por favor llene todos los campos de la sección Datos de insumos por productos'); 
    }
    
    else{
        mostrarDatos();
    }
});


insumos_form.registrar.addEventListener('click', function valida(e){
    if(document.getElementById('Mezcal').value == '' || document.getElementById('CantidadM').value == '' || document.getElementById('CantidadM_T').value == ''){
        alert('Por favor llene todos los campos de la sección Datos de Mezcal'); 
    }
    
    else{
        guardarMezcal();
    }
})


function mostrarDatos(){
    contenedor_tabla.style.display = 'block';

    if (!prod) {
        prod = document.getElementById('Id_productos').value;
    }
    prod = document.getElementById('Id_productos').value;
    insumos = document.getElementById('Id_insumos').value;
    cantidad = document.getElementById('Cantidad').value;
    costoU = document.getElementById('UCosto').value;
    costoT = document.getElementById('CostoT').value;

    var row = document.createElement('tr');
    var prod_col = document.createElement('td');
    var insumos_col = document.createElement('td');
    var cantidad_col = document.createElement('td');
    var costoU_col = document.createElement('td');
    var costoT_col = document.createElement('td');

    var totalportodo = document.createElement("input");


    prod_col.innerHTML = prod;
    row.appendChild(prod_col);
    insumos_col.innerHTML = insumos;
    row.appendChild(insumos_col);
    cantidad_col.innerHTML = cantidad;
    row.appendChild(cantidad_col);
    costoU_col.innerText = parseFloat(costoU).toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
    row.appendChild(costoU_col);
    costoT_col.innerHTML =parseFloat(costoT).toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
    row.appendChild(costoT_col);
    total += parseFloat(costoT);


    cuerpo_tabla.appendChild(row);


    var nuevo = document.createElement("div");
    nuevo
    

    
    totalCell.innerHTML = 'Total: ' + total.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
    totalCell.style.textAlign = 'right';

    total_titulo.appendChild(nuevo);
    resultado.innerHTML = "<div class='totalTabla'><label for='total'>Total: </label> <input type='text' name='' id='' class='styled-input' value="+total+"  readonly> </div>";


    registros.push([prod, insumos, cantidad, costoU, costoT, null]);
    console.log(registros);
    

    //document.getElementById('Id_productos').disabled=true;
    document.getElementById('Id_insumos').value = ''
    document.getElementById('Cantidad').value = ''
    document.getElementById('UCosto').value = ''
    document.getElementById('CostoT').value = ''

}

function guardarMezcal(){
    id_producto = id; 
    mezcal = document.getElementById('Mezcal').value;
    cantidad = document.getElementById('CantidadM').value;
    total_m = document.getElementById('CantidadM_T').value;
    registros.push([id_producto, null, cantidad, null, total_m, mezcal]);
    console.log(registros);

    fetch('../../controller/Insumos/Registro_Insumo_Por_Producto.php', {
        method: 'POST',
        body: JSON.stringify(registros),
        headers: {
            "Content-Type": "application/json"
        }

    })

    //recibe el mensaje para mandarlo como alerta
    .then(res => res.json())
    .then(data =>
    {
        //el registro fue exitoso
        if (data === 'todo chido') {
            alert("Registro exitoso");
            location.href = '../../view/insumos/Visualizacion_Insumo_Producto.html';
        }

        //los datos no pasaron alguna validacion
        else {
            alert(data);
        }
    })
}

document.getElementById('Id_insumos').addEventListener('change', function() {
    prod = document.getElementById('Id_insumos').value;
    console.log(prod);
    fetch('../../controller/Insumos/Obtener_Costo.php?id=' + prod)
    .then(response => {
        if (!response.ok) {
            throw new Error('Ocurrió un error al obtener los datos');
        }
        return response.json();
    })

    .then(data => {
        console.log(data);
        document.getElementById('UCosto').value = data;

        var total = parseFloat(document.getElementById('UCosto').value) * parseFloat(document.getElementById('Cantidad').value);
        document.getElementById('CostoT').value = total.toFixed(2);
    })
})


