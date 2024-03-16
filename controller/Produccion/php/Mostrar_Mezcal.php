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

        $id= $fila['IDClase'];
        $salida .= '<td>' . '</td>';
        $salida .= '<td>' . $fila["Lote"] . '</td>';
        $salida .= '<td>' . '</td>';
        $salida .= '<td>' . $fila["IDCategoria"] . '</td>';
        $salida .= '<td>' . $fila["IDClase"] . '</td>';
        $salida .= '<td>' . $fila["Tanque"] . '</td>';
      
        
       
       

        
        

        $salida .= '<td>';
        $salida .= '<button class="boton-modificar" type="submit">Modificar</button>';
        $salida .= ' <button class="boton-eliminar" type="submit">Eliminar</button>' ;
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