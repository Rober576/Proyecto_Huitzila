<?php
include_once('../../../model/Produccion/Registrar/Mostrar/Mostrar_Mezcal.php');


$base = new MostrarBit();
$base->instancias();

if (isset($_POST['consulta'])) {
    $busqueda = $_POST['consulta'];
    $resultado = $base->buscador($busqueda);
} else {
    $resultado = $base->getInfo();
}

$salida = '';

if ($resultado) {
    $salida .= '
    <table>
    <thead>
        <tr>
            <th>Fecha</th>
            <th>No. de lote</th>
            <th>Análisis fisicoquímico</th>
            <th>Categoría</th>
            <th>Clase</th>
            <th>Tanque</th>
            <th>Acciones</th>
        </tr>
    </thead>
    <tbody>';

    foreach ($resultado as $fila) {
        $salida .= '<tr>';
        $ID= $fila['id'];
        
        $salida .= '<td>' . $fila["Fecha"] . '</td>';
        $salida .= '<td>' . $fila["No. de lote"] . '</td>';
        $salida .= '<td>' . $fila["Análisis fisicoquímico"] . '</td>';
        $salida .= '<td>' . $fila["Categoria"] . '</td>';
        $salida .= '<td>' . $fila["Clase"] . '</td>';
        $salida .= '<td>' . $fila["Tanque"] . '</td>';
        

        $salida .= '<td>';
        $salida .= '<a href="#" class="table_item__link eliminar-elemento" data-id="' . $ID. '">Eliminar</a>';
        $salida .= ' | ';
        $salida .= '<a href="#" class="table_item__link obtener-informacion" data-id="' . $ID . '">Modificar</a>';
        $salida .= '</td>';
        $salida .= '</tr>';
    }


    $salida .= '</tbody></table>';
} else {
    $salida .= 'No se encontraron resultados';
}

echo $salida;
?>
<script src="../../../controller/Produccion/js/Eliminar_Mezcal.js"></script>