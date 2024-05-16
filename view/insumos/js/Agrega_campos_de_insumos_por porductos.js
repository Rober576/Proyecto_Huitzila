const cuerpo_tabla = document.getElementById("cuerpo");
const contenedor_tabla = document.getElementById("tablaResultado")
contenedor_tabla.style.display = 'none';

var registros = []

insumos_form.agregarCampos.addEventListener('click', mostrarDatos);


function mostrarDatos(){
    contenedor_tabla.style.display = 'block';
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


    prod_col.innerHTML = prod;
    row.appendChild(prod_col);
    insumos_col.innerHTML = insumos;
    row.appendChild(insumos_col);
    cantidad_col.innerHTML = cantidad;
    row.appendChild(cantidad_col);
    costoU_col.innerHTML = costoU;
    row.appendChild(costoU_col);
    costoT_col.innerHTML = costoT;
    row.appendChild(costoT_col);


    cuerpo_tabla.appendChild(row);

    registros.push([prod, insumos, cantidad, costoU, costoT]);
    console.log(registros);

    document.getElementById('Id_productos').value = ''
    document.getElementById('Id_insumos').value = ''
    document.getElementById('Cantidad').value = ''
    document.getElementById('UCosto').value = ''
    document.getElementById('CostoT').value = ''

}


