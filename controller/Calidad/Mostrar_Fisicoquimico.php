<?php
include_once('../../model/Calidad/Mostrar_Fisicoquimico.php');

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
                    <th>Alcohol</th>
                    <th>Extracto seco</th>
                    <th>Metanol</th>
                    <th>Alcoholes superiores</th>
                    <th>Aldehidos</th>
                    <th>Furfural</th>
                    <th>plomo</th>
                    <th>Cobre</th>
                    <th>Documento</th>
                    <th>Fisioquimico</th>
                    
                </tr>
            </thead>
            <tbody>';

    foreach ($lotes as $lote) {
        // Asignar una clase CSS condicionalmente según el valor de $fila['cumplimiento']
        $resultado = $base->getEjemplo($lote['Lote']);
        $salida .= '<tr>';
        if($resultado){
            foreach($resultado as $fila) {
                if ($fila['cumplimiento'] == 1) {
                    $clase_css = 'fila-verde';
                } if ($fila['cumplimiento'] == 2) {
                    $clase_css = 'fila-rojo';
                } if ($fila['cumplimiento'] == 0) {
                    $clase_css = 'fila-naranja';
                }
        
                $id = $fila['NombreDocumento'];
                $salida .= '<td class="' . $clase_css . '">' . $lote["Lote"] . '</td>';
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
                $salida .= '<td class="' . $clase_css . '">';
                $salida .= '<button type="submit" onclick="window.open(\'../../controller/Calidad/Get_Datos_Fisioquimico.php?id=' . $lote["Lote"] . '\', \'_blank\')">Registro Fisioquimico</button>';
                $salida .= '</td>';
            }
        } else {
            $clase_css = 'fila-naranja';
    
            $salida .= '<td class="' . $clase_css . '">' . $lote["Lote"] . '</td>';
            $salida .= '<td class="' . $clase_css . '">' . '' . '</td>';
            $salida .= '<td class="' . $clase_css . '">' . '' . '</td>';
            $salida .= '<td class="' . $clase_css . '">' . '' . '</td>';
            $salida .= '<td class="' . $clase_css . '">' . '' . '</td>';
            $salida .= '<td class="' . $clase_css . '">' . '' . '</td>';
            $salida .= '<td class="' . $clase_css . '">' . '' . '</td>';
            $salida .= '<td class="' . $clase_css . '">' . '' . '</td>';
            $salida .= '<td class="' . $clase_css . '">' . '' . '</td>';
    
            $salida .= '<td class="' . $clase_css . '">'. '' .'</td>';
            $salida .= '<td class="' . $clase_css . '">';
            $salida .= '<button type="submit" onclick="window.open(\'../../view/Calidad/Registro_Fisioquimico.html?id=' . $lote["Lote"] . '\', \'_blank\')">Registro Fisioquimico</button>';
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