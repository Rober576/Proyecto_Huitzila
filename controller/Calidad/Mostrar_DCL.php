<?php
include_once('../../model/Calidad/Mostrar_DCL.php');

$base = new MostrarCampos();
$base->instancias();

if (isset($_POST['consulta'])) {
    $busqueda = $_POST['consulta'];
    $resultado = $base->buscador($busqueda);
} else {
    $lotes=$base->getLotes();
    
    //echo "No se envio";
}

echo"
<table border='1'>
<thead>
    <tr>
        <td class='fila-verde'>Cumple</td>
        <td class='fila-rojo'>No cumple</td>
        <td class='fila-naranja'>Pendiente</td>
    </tr>
</thead>
</table> <br>";

$salida = '';

if ($lotes) {
    $salida .= '
        <table border="1">
            <thead>
                <tr>
                    <th>Lote</th>
                    <th>Porcentaje de alcohol</th>
                    <th>Metanol</th>
                    <th>Alcoholes superiores</th>
                    <th>Destilados, cremas y licores</th>
                    
                </tr>
            </thead>
            <tbody>';

    foreach ($lotes as $lote) {
        // Asignar una clase CSS condicionalmente según el valor de $fila['cumplimiento']
        $resultado = $base->getEjemplo($lote['Lote']);
        $salida .= '<tr>';
        if($resultado){
            foreach($resultado as $fila) {
                if ($fila['Cumplimiento'] == 1) {
                    $clase_css = 'fila-verde';
                } if ($fila['Cumplimiento'] == 2) {
                    $clase_css = 'fila-rojo';
                } if ($fila['Cumplimiento'] == 0) {
                    $clase_css = 'fila-naranja';
                }
        
                $salida .= '<td class="' . $clase_css . '">' . $lote["Lote"] . '</td>';
                $salida .= '<td class="' . $clase_css . '">' . $fila["PorcentajeAlcohol"] . '</td>';
                $salida .= '<td class="' . $clase_css . '">' . $fila["Metanol"] . '</td>';
                $salida .= '<td class="' . $clase_css . '">' . $fila["AlcoholesSuperiores"] . '</td>';
        
                $salida .= '<td class="' . $clase_css . '">';
                $salida .= '<button type="submit" onclick="window.location.href=\'../../Controller/Calidad/Get_Datos_DCL.php?id=' . $lote["Lote"] . '\'">Registro general</button>';
                $salida .= '</td>';
            }
        } else {
            $clase_css = 'fila-naranja';
    
            $salida .= '<td class="' . $clase_css . '">' . $lote["Lote"] . '</td>';
            $salida .= '<td class="' . $clase_css . '">' . '' . '</td>';
            $salida .= '<td class="' . $clase_css . '">' . '' . '</td>';
            $salida .= '<td class="' . $clase_css . '">'. '' .'</td>';
            $salida .= '<td class="' . $clase_css . '">';
            $salida .= '<button type="submit" onclick="window.open(\'../../view/Calidad/Registro_DCL.html?id=' . $lote["Lote"] . '\', \'_blank\')">Registro general</button>';
            $salida .= '</td>';
        }
        $salida .= '</tr>';
        
    }

    $salida .= '</tbody></table>';
} else {
    $salida .= 'No se encontraron resultados';
}

echo $salida;
?>