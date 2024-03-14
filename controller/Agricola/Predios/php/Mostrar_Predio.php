<?php
include_once('../../../../model/Agricola/Predios/Mostrar/Mostrar_Predio_M.php');

$base = new Mostrar();
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
        <th>Clave de predio</th>
        <th>Nombre del predio</th>
        <th>Superficie</th>
        <th>Descripcion</th>
        <th>Acciones</th>
        </tr>
    </thead>
        <tbody>';

    foreach ($resultado as $fila) {
        $salida .= '<tr>';
        $CodigoA = $fila['CodigoArea'];
        $salida .= '<td>' . $fila["CodigoArea"] . '</td>';
        $salida .= '<td>' . $fila["Nombre"] . '</td>';
        $salida .= '<td>' . $fila["Superficie"] . '</td>';
        $salida .= '<td>' . $fila["DescripcionArea"] . '</td>';

        $salida .= '<td>';
        $salida .= '<a href="#" class="table_item__link eliminar-elemento" data-id="' . $CodigoA . '">Eliminar</a>';
        $salida .= ' | ';
        $salida .= '<a href="Registro_Predios.html" class="table_item__link obtener-informacion" data-id="' . $CodigoA . '">Editar</a>';
        $salida .= '</td>';
        $salida .= '</tr>';
    }


    $salida .= '</tbody></table>';
} else {
    $salida .= 'No se encontraron resultados';
}

echo $salida;
?>

<script ></script>