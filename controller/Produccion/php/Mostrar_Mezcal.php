<?php
include_once('../../../model/Produccion/Registrar/Mostrar/Mostrar_Mezcal.php');


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
    <table>
    <thead>
        <tr>
            <th>Fecha</th>
            <th>No. de lote</th>
            <th>Análisis fisicoquímico</th>
            <th>Categoría</th>
            <th>Clase</th>
            <th>Tanque</th>
            <th>Acciones</th>
        </tr>
    </thead>
    <tbody>';

    /*$salida.='
    <table>
    <thead>
        <tr>
            
            <th>Lote</th>
            <th>Tanque</th>
            <th>Categoria</th>
            <th>Clase</th>
            <th>Edad</th>
            
            
        </tr>
    </thead>
    <tbody>';*/

    foreach ($resultado as $fila) {
        $salida .= '<tr>';
        $Lote= $fila['Lote'];
        
        $salida .= '<td>' . '</td>';
        $salida .= '<td>' . $fila["Lote"] . '</td>';
        $salida .= '<td>' . '</td>';
        $salida .= '<td>' . $fila["IDCategoria"] . '</td>';
        $salida .= '<td>' . $fila["IDClase"] . '</td>';
        $salida .= '<td>' . $fila["Tanque"] . '</td>';
      
      

        $salida .= '<td>';
        $salida .= '<button  href="#"  class="boton-eliminar" type="submit" data-id="' . $Lote . '">Eliminar</button>';
        $salida .= ' ';
        $salida .= '<button  onclick="window.location.href=\'../../controller/Produccion/php/Get_Mezcal.php?id='.$Lote.'\'"  class="boton-modificar" type="submit" data-id="' . $Lote . '">Modificar</button>';
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
