<?php
include_once('../../model/Calidad/Mostrar_Control_Calidad.php');

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
                    <th>Embasado correcto</th>
                    <th>Producto correctamente sellado</th>
                    <th>Etiqueta correctamente colocada</th>
                    <th>Envase sin abolladuras</th>
                    <th>Color de liquido correcto</th>
                    <th>Editar</th>
                    
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

                if($fila["Embasado"]==1) {
                    $fila["Embasado"]="Si cumple";
                } else {
                    $fila["Embasado"]="No cumple";
                }

                if($fila["Sellado"]==1) {
                    $fila["Sellado"]="Si cumple";
                } else {
                    $fila["Sellado"]="No cumple";
                }
                
                if($fila["Etiqueta"]==1) {
                    $fila["Etiqueta"]="Si cumple";
                } else {
                    $fila["Etiqueta"]="No cumple";
                }
                
                if($fila["SinAbolladuras"]==1) {
                    $fila["SinAbolladuras"]="Si cumple";
                } else {
                    $fila["SinAbolladuras"]="No cumple";
                }

                if($fila["Color"]==1) {
                    $fila["Color"]="Si cumple";
                } else {
                    $fila["Color"]="No cumple";
                }
        
                $salida .= '<td class="' . $clase_css . '">' . $lote["Lote"] . '</td>';
                $salida .= '<td class="' . $clase_css . '">' . $fila["Embasado"] . '</td>';
                $salida .= '<td class="' . $clase_css . '">' . $fila["Sellado"] . '</td>';
                $salida .= '<td class="' . $clase_css . '">' . $fila["Etiqueta"] . '</td>';
                $salida .= '<td class="' . $clase_css . '">' . $fila["SinAbolladuras"] . '</td>';
                $salida .= '<td class="' . $clase_css . '">' . $fila["Color"] . '</td>';
                $salida .= '<td class="' . $clase_css . '">';
                $salida .= '<button type="submit" onclick="window.open(\'../../controller/Calidad/Get_Datos_Fisioquimico.php?id=' . $lote["Lote"] . '\', \'_blank\')">Editar</button>';
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
          
            $salida .= '<td class="' . $clase_css . '">'. '' .'</td>';
        }
        $salida .= '</tr>';
        
    }

    $salida .= '</tbody></table>';
} else {
    $salida .= 'No se encontraron resultados';
}

echo $salida;
?>