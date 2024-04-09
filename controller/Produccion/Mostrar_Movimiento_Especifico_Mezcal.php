<?php
include_once('../../model/Produccion/Mostrar_Movimiento_Especifico_MezcalM.php');

$base = new MostrarMez();
$base->instancias();

$salida = '';
if (isset($_GET['lote'])) {
    $lote = $_GET['lote'];    
    $resultado = $base->buscador($lote);
    
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
            $Fecha =$fila['Fecha'];
            $NumeroMovimiento=$fila['NumeroMovimiento'];

            $salida .= '<td>' . $fila["Lote"] . '</td>';
            $salida .= '<td>' . $fila["Movimiento"] . '</td>';
            $salida .= '<td>' . $fila["Volumen"] . '</td>';
            $salida .= '<td>' . $fila["PorcentajeAlcohol"] . '</td>';
            $salida .= '<td>';
            $salida .= '<button  href="#"  class="boton-eliminar" type="submit" data-id="' . $Lote . '@' . $NumeroMovimiento . '">Eliminar</button>';
            $salida .= ' ';
            $salida .= '<button  onclick="window.location.href=\'../../controller/Produccion/Get_Movimiento.php?id='.$Lote.'\'"  class="boton-modificar" type="submit" data-id="' . $Lote .'@' . $Fecha . '">Modificar</button>';
            $salida .= '</td>';
            $salida .= '</tr>';
        }
        $salida .= '</tbody></table>';
        
      
    } else {
        echo "No se encontraron resultados";
    }
    echo $salida; // Aquí imprimimos la tabla generada

}else{
    // Si no se recibe la variable de consulta, se puede enviar un mensaje de error
    echo "Error: No se recibió la variable de consulta.";
}
?>
