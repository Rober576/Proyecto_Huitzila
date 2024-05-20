<?php
include_once('../../model/Insumos/Mostrar_MezcalPM.php');


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
        <table>
            <thead>
                <tr class="titulo_tabla">
                    <th>Lote</th>
                    <th>Especie</th>
                    <th>Edad</th>
                    <th>Categoría</th>
                    <th>Volumen</th>
                    <th>% Concentracion de alc.</th>
                </tr>
            </thead>

        </table>';

    foreach ($resultado as $fila) {
    
        $salida .= '<tr>';
        $Lote= $fila['Lote'];
        $salida .= '<td>' . $fila["Lote"] . '</td>';
        $salida .= '<td>' .$fila["NombrePlanta"] . '</td>';
        $salida .= '<td>' . ($fila["Edad"] == -1 ? '-' : $fila["Edad"]) . '</td>';
        $salida .= '<td>' . $fila["Categoria"] . '</td>';
        $salida .= '<td>' . $fila["Volumen"] . '</td>';
        $salida .= '<td>' . $fila["PorcentajeAlcohol"] . '</td>';
     
        $salida .= '</tr>';
    }
    $salida .= '</tbody></table>';
} else {
    $salida .= 'No se encontraron resultados';
}
 echo $salida;
?>
