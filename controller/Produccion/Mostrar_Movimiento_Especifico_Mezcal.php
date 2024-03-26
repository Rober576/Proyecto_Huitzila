<?php
include_once('../../model/Produccion/Mostrar_Movimiento_Especifico_MezcalM.php');


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
                <th>Movimiento</th>
                <th>Volumen</th>
                <th>% Concentracion de alc.</th>
                <th>Acciones</th>
                
                
            </tr>
        </thead>
        <tbody>';

    foreach ($resultado as $fila) {
    
        $salida .= '<tr>';
        $Lote= $fila['Lote'];
        
        
        $salida .= '<td>' . $fila["Lote"] . '</td>';
        $salida .= '<td>' . $fila["Movimiento"] . '</td>';
        $salida .= '<td>' . $fila["Volumen"] . '</td>';
        $salida .= '<td>' . $fila["PorcentajeAlcohol"] . '</td>';
        $salida .= '<td>';
        $salida .= '<button  href="#"  class="boton-eliminar" type="submit" data-id="' . $Lote . '">Eliminar</button>';
        $salida .= ' ';
        $salida .= '<button  onclick="window.location.href=\'../../controller/Produccion/Get_Mezcal.php?id='.$Lote.'\'"  class="boton-modificar" type="submit" data-id="' . $Lote . '">Modificar</button>';
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
