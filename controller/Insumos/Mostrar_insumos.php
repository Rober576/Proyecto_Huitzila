<?php
include_once('../../model/Insumos/Mostar_insumos_model.php');

$base = new MostrarCampos();
$base->instancias();

if (isset($_POST['consulta'])) {
    $busqueda = $_POST['consulta'];
    $resultado = $base->buscador($busqueda);
} else {
    $resultado = $base->getEjemplo();
}

$salida = '';

if ($resultado) {
    
    $salida .= '

        <table border="1">
            <thead>
            <tr>
                <th colspan="7">Datos de los insumos</th>
            </tr>
                <tr>
                    <th>Identificador</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Unidades</th>
                    <th>Existencia</th>
                    <th>Fecha de registro</th>
                    <th>Stock mínimo</th>
                    <th>Stock máximo</th>
                    <th>Costo</th>
                    <th>Acciones</th>	
                </tr>
            </thead>
            <tbody>';

    foreach ($resultado as $fila) {
        $id = $fila['IDInsumo'];
        $salida .= '<tr>';
        $salida .= '<td>' . $fila["NombreInsumo"] . '</td>';
        $salida .= '<td>' . $fila["Descripcion"] . '</td>';
        $salida .= '<td>' . $fila["Unidades"] . '</td>';
        $salida .= '<td>' . $fila["Existencia"] . '</td>';
        $salida .= '<td>' . $fila["FechaReg"] . '</td>';
        $salida .= '<td>' . $fila["StockMinimo"] . '</td>';
        $salida .= '<td>' . $fila["StockMaximo"] . '</td>';
        $salida .= '<td>' . $fila["Costo"] . '</td>';

        $salida .= '<td>
                    <div class="CentrarBoton">
                    <div class="Botones">
                    <button type="submit" href="../../ruta/a/eliminar/Insumo?id=' . $id . '"  data-id="' . $id . '">Eliminar</button>
                    <button type="submit" href="../../ruta/a/editar/Insumo?id=' . $id . '"  data-id="' . $id . '">Editar</button>
                    </div>
                    </div>
                    </td>'; // Aquí va el link para eliminar, por ejemplo: href="eliminar.php?id='.$fila['id'].'
        
        $salida .= '</tr>';
    }

    $salida .= '</tbody></table>';
} else {
    $salida .= 'No se encontraron resultados';
}

echo $salida;
/*
 <td> <div class="CentrarBoton">
<div class="Botones">
<button type="submit">Editar</button>
<button type="submit">Eliminar</button>
</div>
</div></td>
<script src="../../controller/Insumos/js/Eliminar_insumo.js"></script>
*/

?>




