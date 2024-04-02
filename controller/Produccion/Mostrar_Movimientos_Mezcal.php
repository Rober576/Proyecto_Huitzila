<?php
include_once('../../model/Produccion/Mostrar_Movimientos_MezcalM.php');


$base = new MostrarMez();
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
                
                <th>No. de Lote</th>
                <th>Categoria</th>
                <th>Clase</th>
                <th>Edad</th>
                <th>Acciones</th>
                
                
            </tr>
        </thead>
        <tbody>';

    foreach ($resultado as $fila) {
    
        $salida .= '<tr>';
        $Lote= $fila['Lote'];
        
        
        $salida .= '<td>' . $fila["Lote"] . '</td>';
        $salida .= '<td>' . $fila["Categoria"] . '</td>';
        $salida .= '<td>' . $fila["Clase_Mezcal"] . '</td>';
        $salida .= '<td>' . $fila["Edad"] . '</td>';
        $salida .= '<td>';
        $salida .= '<button onclick="window.location.href=\'../../view/Produccion/Movimiento_Especifico_Mezcal.html?Lote=' . $fila['Lote'] . '\'" class="boton-Específico" type="button">Específico</button>';
        $salida .= ' ';
        $salida .= '<button onclick="window.location.href=\'../../view/Produccion/Movimiento_General_Mezcal.html\'" class="boton-General" type="button">General</button>';
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
