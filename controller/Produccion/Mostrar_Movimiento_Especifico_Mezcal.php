<?php
include_once('../../model/Produccion/Mostrar_Movimiento_Especifico_MezcalM.php');

$base = new MostrarMez();
$base->instancias();

// Inicializar la variable $salida como una cadena vacía
$salida = '';

// Verificar si se recibió la variable de consulta
if (isset($_GET['lote'])) {
    $lote = $_GET['lote'];
    
    // Mostrar el valor de consulta para verificar si se recibió correctamente
    //echo "Lote recibido correctamente: " . $lote;

    // Realizar operaciones con $lote según sea necesario
    $resultado = $base->buscador($lote);

    // Enviar respuesta a JavaScript
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
            $salida .= '<button  onclick="window.location.href=\'../../controller/Produccion/Get_Movimiento.php?id='.$Lote.'\'"  class="boton-modificar" type="submit" data-id="' . $Lote . '">Modificar</button>';
            $salida .= '</td>';
            $salida .= '</tr>';
        }
        $salida .= '</tbody></table>';
        
        echo $salida; // Aquí imprimimos la tabla generada
        
    } else {
        echo "No se encontraron resultados";
    }
} else {
    // Si no se recibe la variable de consulta, se puede enviar un mensaje de error
    echo "Error: No se recibió la variable de consulta.";
}
?>
