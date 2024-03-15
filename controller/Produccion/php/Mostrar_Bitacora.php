<?php
include_once('../../../model/Produccion/Registrar/Mostrar/Mostrar_BitacoraM.php');


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
    <table border="1">
    <thead>
        <tr>
        <th>Lote</th>
        <th>Procedencia</th>
        <th>Costo</th>
        <th>Fecha</th>
        <th>No de guía</th>
        <th>Especie</th>
        <th>Agave (kg)</th>
        <th>Brix</th>
        <th>Art (kg)</th>
        <th>Cocción (kg)</th>
        <th>Fecha de incio</th>
        <th>Fecha de fin</th>
        <th>Art (kg)</th>
        <th>Acciones</th>
        </tr>
    </thead>
        <tbody>';

    foreach ($resultado as $fila) {
        $salida .= '<tr>';
        $Lote= $fila['Lote'];
        $salida .= '<td>' . $fila["Lote"] . '</td>';
        $salida .= '<td>' . $fila["Procedencia"] . '</td>';
        $salida .= '<td>' . $fila["Costo"] . '</td>';
        $salida .= '<td>' . $fila["Fecha"] . '</td>';
        $salida .= '<td>' . $fila["NoGuia"] . '</td>';
        $salida .= '<td>' . $fila["NombrePlanta"] . '</td>';
        $salida .= '<td>' . $fila["KgAgave"] . '</td>';
        $salida .= '<td>' . $fila["Brix"] . '</td>';
        $salida .= '<td>' . $fila["KgArt"] . '</td>';
        $salida .= '<td>' . $fila["KgCoccion"] . '</td>';
        $salida .= '<td>' . $fila["FechaInicio"] . '</td>';
        $salida .= '<td>' . $fila["FechaFinal"] . '</td>';
        $salida .= '<td>' . $fila["KgArtCoccion"] . '</td>';


        $salida .= '<td>';
        $salida .= '<a href="#" class="table_item__link eliminar-elemento" data-id="' . $Lote. '">Eliminar</a>';
        $salida .= ' | ';
        $salida .= '<a href="#" class="table_item__link obtener-informacion" data-id="' . $Lote . '">Editar</a>';
        $salida .= '</td>';
        $salida .= '</tr>';
    }


    $salida .= '</tbody></table>';
} else {
    $salida .= 'No se encontraron resultados';
}

echo $salida;
?>
