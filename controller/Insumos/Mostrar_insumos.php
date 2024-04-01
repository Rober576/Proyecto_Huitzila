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
        $salida .= '<td>' . $fila["IDInsumo"] . '</td>';
        $salida .= '<td>' . $fila["NombreInsumo"] . '</td>';
        $salida .= '<td>' . $fila["Descripcion"] . '</td>';
        $salida .= '<td>' . $fila["Unidades"] . '</td>';
        $salida .= '<td>' . $fila["Existencia"] . '</td>';
        $salida .= '<td>' . $fila["FechaReg"] . '</td>';
        $salida .= '<td>' . $fila["StockMinimo"] . '</td>';
        $salida .= '<td>' . $fila["StockMaximo"] . '</td>';
        $salida .= '<td>' . $fila["Costo"] . '</td>';


        $salida .= '<td>';
        $salida .= '<button type="submit" class="table_item__link eliminar-elemento" data-id="' . $id . '">Eliminar</button>';
        $salida .= '  ';
        $salida .= '<button type="submit" onclick="window.location.href=\'../../view/insumos/Editar_Insumos.html?id=' . $id . '\'">Editar</button>';
        $salida .= '</td>';

        $salida .= '</tr>';
    }

    $salida .= '</tbody></table>';
} else {
    $salida .= 'No se encontraron resultados';
}

echo $salida;
?>
<script src="../../controller/Insumos/js/Eliminar_insumo.js"></script>



