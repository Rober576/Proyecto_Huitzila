<?php
include_once('../../model/Calidad/Mostrar_Fisicoquimico.php');

$base = new MostrarCampos();
$base->instancias();

if (isset($_POST['consulta'])) {
    $busqueda = $_POST['consulta'];
    $resultado = $base->buscador($busqueda);
} else {
    $resultado = $base->getEjemplo();
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

if ($resultado) {
    $salida .= '
        <table border="1">
            <thead>
                <tr>
                    <th>Lote</th>
                    <th>Alcohol</th>
                    <th>Extracto seco</th>
                    <th>Metanol</th>
                    <th>Alcoholes superiores</th>
                    <th>Aldehidos</th>
                    <th>Furfural</th>
                    <th>plomo</th>
                    <th>Cobre</th>
                    <th>Documento</th>
                </tr>
            </thead>
            <tbody>';

    foreach ($resultado as $fila) {
        // Asignar una clase CSS condicionalmente según el valor de $fila['cumplimiento']
        if ($fila['cumplimiento'] == 1) {
            $clase_css = 'fila-verde';
        } if ($fila['cumplimiento'] == 2) {
            $clase_css = 'fila-rojo';
        } if ($fila['cumplimiento'] == 0) {
            $clase_css = 'fila-naranja';
        }

        $id = $fila['NombreDocumento'];
        $salida .= '<tr>';
        $salida .= '<td class="' . $clase_css . '">' . $fila["Lote"] . '</td>';
        $salida .= '<td class="' . $clase_css . '">' . $fila["Alcohol"] . '</td>';
        $salida .= '<td class="' . $clase_css . '">' . $fila["ExtractoSeco"] . '</td>';
        $salida .= '<td class="' . $clase_css . '">' . $fila["Metanol"] . '</td>';
        $salida .= '<td class="' . $clase_css . '">' . $fila["AlcoholesSuperiores"] . '</td>';
        $salida .= '<td class="' . $clase_css . '">' . $fila["Aldehidos"] . '</td>';
        $salida .= '<td class="' . $clase_css . '">' . $fila["Furfural"] . '</td>';
        $salida .= '<td class="' . $clase_css . '">' . $fila["Plomo"] . '</td>';
        $salida .= '<td class="' . $clase_css . '">' . $fila["Cobre"] . '</td>';

        $salida .= '<td class="' . $clase_css . '">';
        $salida .= '<button type="submit" onclick="window.open(\'../../controller/Calidad/Abrir_Fisioquimico.php?id=' . $id . '\', \'_blank\')">Abrir</button>';
        $salida .= '</td>';

        $salida .= '</tr>';
    }

    $salida .= '</tbody></table>';
} else {
    $salida .= 'No se encontraron resultados';
}

echo $salida;
?>