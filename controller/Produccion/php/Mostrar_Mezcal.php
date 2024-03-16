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
    <table border="1">
    <thead>
        <tr>
        <th>Lote</th>
        <th>Nombre Plata</th>
        <th>Tanque</th>
        <th>ID Clase</th>
        <th>Edad</th>
        <th>ID Movimiento</th>
        <th>Volumen</th>
        <th>Concentración</th>
        <th>Destino Salida</th>
        <th>ID Categoría</th>
        <th>Acciones</th>
        </tr>
    </thead>
        <tbody>';

    foreach ($resultado as $fila) {
        $salida .= '<tr>';
        $Guia= $fila['IDMovimiento'];
        
        $salida .= '<td>' . $fila["Lote"] . '</td>';
        $salida .= '<td>' . $fila["NombrePlanta"] . '</td>';
        $salida .= '<td>' . $fila["Tanque"] . '</td>';
        $salida .= '<td>' . $fila["IDClase"] . '</td>';
        $salida .= '<td>' . $fila["Edad"] . '</td>';
        $salida .= '<td>' . $fila["IDMovimiento"] . '</td>';
        $salida .= '<td>' . $fila["Volumen"] . '</td>';
        $salida .= '<td>' . $fila["Concentracion"] . '</td>';
        $salida .= '<td>' . $fila["DestinoSalida"] . '</td>';
        $salida .= '<td>' . $fila["IDCategoria"] . '</td>';
        

        $salida .= '<td>';
        $salida .= '<a href="#" class="table_item__link eliminar-elemento" data-id="' . $Guia. '">Eliminar</a>';
        $salida .= ' | ';
        $salida .= '<a href="#" class="table_item__link obtener-informacion" data-id="' . $Guia . '">Editar</a>';
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