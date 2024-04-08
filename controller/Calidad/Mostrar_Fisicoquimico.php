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
        $id = $fila['NombreDocumento'];
        $salida .= '<tr>';
        $salida .= '<td>' . $fila["Lote"] . '</td>';
        $salida .= '<td>' . $fila["Alcohol"] . '</td>';
        $salida .= '<td>' . $fila["ExtractoSeco"] . '</td>';
        $salida .= '<td>' . $fila["Metanol"] . '</td>';
        $salida .= '<td>' . $fila["AlcoholesSuperiores"] . '</td>';
        $salida .= '<td>' . $fila["Aldehidos"] . '</td>';
        $salida .= '<td>' . $fila["Furfural"] . '</td>';
        $salida .= '<td>' . $fila["Plomo"] . '</td>';
        $salida .= '<td>' . $fila["Cobre"] . '</td>';

        $salida .= '<td>';
        $salida .= '<button type="submit" onclick="window.location.href=\'../../controller/Calidad/Abrir_Fisioquimico.php?id=' . $id . '\'">Abrir</button>';
        $salida .= '</td>';

        $salida .= '</tr>';
    }

    $salida .= '</tbody></table>';
} else {
    $salida .= 'No se encontraron resultados';
}

echo $salida;
?>