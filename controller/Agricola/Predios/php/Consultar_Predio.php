<?php
include_once('../../../../model/Agricola/Predios/Mostrar/Consultar_Predio_M.php');

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
        <th>Descripción</th>
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
        $salida .= '<button class="Boton_Tabla eliminar-elemento" data-id="'.$CodigoA.'">Eliminar</Button>';
        $salida .= ' | ';
        $salida .= '<button class="Boton_Tabla obtener-informacion" data-id="'.$CodigoA.'">Editar</Button>';
        $salida .= '</td>';
        $salida .= '</tr>';
    }


    $salida .= '</tbody></table>';
} else {
    $salida .= 'No se encontraron resultados';
}

echo $salida;
?>

<script src="../../../controller/Agricola/Predios/js/Obtener_Info_Predios.js"></script>