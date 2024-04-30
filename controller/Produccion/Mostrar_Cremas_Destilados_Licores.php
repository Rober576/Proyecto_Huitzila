<?php
include_once('../../model/Produccion/Mostrar_Cremas_Destilados_licores.php');


$base = new MostrarCDL();
$base->instancias();
if (isset($_POST['lote'])) {
    $busqueda = $_POST['lote'];
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
                
            <th>No. de lote</th>
            <th>Tanque</th>
            <th>Tipo</th>
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
        $salida .= '<td>' . $fila["tanque"] . '</td>';
        $salida .= '<td>' . $fila["NombreDestilado"] . '</td>';
        $salida .= '<td>' . $fila["Clase_Mezcal"] . '</td>';
        if ($fila["Clase_Mezcal"] == 'Añejo') {
            $salida .= '<td>' . $fila["Edad"] . " Años" . '</td>';
        } else {
            $salida .= '<td>' . ($fila["Edad"] == -1 ? '-' : $fila["Edad"]." Meses") . '</td>';;
        }
        
        $salida .= '<td>';
        $salida .= '<button  href="#"  class="boton-eliminar" type="submit" data-id="' . $Lote . '">Eliminar</button>';
        $salida .= ' ';
        $salida .= '<button  onclick="window.location.href=\'../../controller/Produccion/Get_Cremas_Destilados_Licores.php?id='.$Lote.'\'"  class="boton-modificar" type="submit" data-id="' . $Lote . '">Modificar</button>';
        $salida .= '</td>';
        $salida .= '</tr>';
    }
    $salida .= '</tbody></table>';
} else {
    $salida .= 'No se encontraron resultados';
}
 echo $salida;
?>
