<?php
include_once('../../model/Calidad/Mostrar_AnalisisCalidad.php');

$base = new MostrarCampos();
$base->instancias();

if (isset($_POST['consulta'])) {
    $busqueda = $_POST['consulta'];
    $resultado = $base->buscador($busqueda);
} else {
    $resultado = $base->getEjemplo();
    //echo "No se envio";
}

$salida = '';

if ($resultado) {
    $salida .= '
        <table border="1">
            <thead>
                <tr>
                    <th>Lote</th>
                    <th>Azucares</th>
                    <th>Madurez</th>
                    <th>Tamaño Materia</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>';

    foreach ($resultado as $fila) {
        $id = $fila['Lote'];
        $salida .= '<tr>';
        $salida .= '<td>' . $fila["Lote"] . '</td>';
        $salida .= '<td>' . $fila["Azucares"] . '</td>';
        $salida .= '<td>' . $fila["Madurez"] . '</td>';
        $salida .= '<td>' . $fila["TamañoMateria"] . '</td>';


        $base = new MostrarCampos();
        $base->instancias();




        $salida .= '<td>';
        $salida .= '<button type="submit" class="table_item__link eliminar-elemento" data-id="' . $id . '">Eliminar</button>';
        $salida .= '  ';
        $salida .= '<button type="submit" onclick="window.location.href=\'../../view/Calidad/Mostrar_CalidadInvidual.html?id=' . $id . '\'">Ver</button>';
        $salida .= '</td>';

        $salida .= '</tr>';
    }

    $salida .= '</tbody></table>';
} else {
    $salida .= 'No se encontraron análisis registrados';
}

echo $salida;
?>
<script src="../../controller/Calidad/js/Eliminar_AnalisisCalidad.js"></script>