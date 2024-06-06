<?php
include_once('../../model/Produccion/Mostrar_Movimientos_Cremas_Destilados_LicoresM.php');


$base = new MostrarMez();
$base->instancias();
if (isset($_GET['consulta'])) {
    $busqueda = $_GET['consulta'];
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
                
                <th>No. de Lote</th>
                <th>Clase</th>
                <th>Edad</th>
                <th>Tipo destilado</th>
                <th>Acciones</th>
                
                
            </tr>
        </thead>
        <tbody>';

    foreach ($resultado as $fila) {
    
        $salida .= '<tr>';
        $Lote= $fila['Lote'];
        
        
        $salida .= '<td>' . $fila["Lote"] . '</td>';
        $salida .= '<td>' . $fila["Clase_Mezcal"] . '</td>';
        $salida .= '<td>' . ($fila["Edad"] == -1 ? '-' : $fila["Edad"]) . '</td>';
        $salida .= '<td>' . $fila["NombreDestilado"] . '</td>';
        $salida .= '<td class="acciones">';
        $salida .= '<button onclick="window.location.href=\'../../view/Produccion/Movimiento_Especifico_Cremas_Destilados_Licores.html?Lote=' . $fila['Lote'] . '\'" class="boton-modificar" type="button">Específico</button>';
        $salida .= ' | ';
        $salida .= '<button onclick="window.location.href=\'../../view/Produccion/Movimiento_General_Cremas_Destilados_Licores.html?Lote=' . $fila['Lote'] . '\'" class="boton-modificar" type="button">General</button>';
        $salida .= '</td>';
        $salida .= '</tr>';
    }
    $salida .= '</tbody></table>';
} else {
    $salida .= 'No se encontraron resultados';
}
 echo $salida;
?>
<script src="../../../controller/Produccion/js/Eliminar_Lote.js"></script>
