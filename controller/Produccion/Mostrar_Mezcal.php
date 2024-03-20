<?php
include_once('../../model/Produccion/Mostrar_MezcalM.php');


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
                <th>Nombre Planta</th>
                <th>Tanque</th>
                <th>Clase</th>
                <th>Edad</th>
                <th>Categoria</th>
                <th>Acciones</th>
                
                
            </tr>
        </thead>
        <tbody>';

    foreach ($resultado as $fila) {
    
        $salida .= '<tr>';
        $Lote= $fila['Lote'];
        
        
        $salida .= '<td>' . $fila["Lote"] . '</td>';
        $salida .= '<td>' .$fila["NombrePlanta"] . '</td>';
        $salida .= '<td>' . $fila["Tanque"] . '</td>';
        $salida .= '<td>' . $fila["Clase_Mezcal"] . '</td>';
        $salida .= '<td>' . $fila["Edad"] . '</td>';
        $salida .= '<td>' . $fila["Categoria"] . '</td>';
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
