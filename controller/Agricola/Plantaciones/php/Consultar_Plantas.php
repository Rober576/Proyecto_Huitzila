<?php
include_once('../../../../model/Agricola/Plantaciones/Mostrar/Consultar_Plantas_M.php');

$base = new Mostrar();
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
    <table border="1">
    <thead>
        <tr>
        <th>Nombre común</th>
        <th>Nombre científico</th>
        <th>Descripción</th>
        <th>Acciones</th>
        </tr>
    </thead>
        <tbody>';

    foreach ($resultado as $fila) {
        $NombreP= $fila['NombrePlanta'];
        $id_boton =$NombreP;
    
        $salida .= '<tr>';
        $salida .= '<td>' . $fila["NombrePlanta"] . '</td>';
        $salida .= '<td>' . $fila["NombreCientifico"] . '</td>';
        $salida .= '<td>' . $fila["Descripcion"] . '</td>';
    
        $salida .= '<td>';
        $salida .= '<button id="' . $id_boton . '" class="boton-eliminar Boton_Tabla eliminar-elemento" data-id="'.$NombreP.'">Eliminar</Button>';
        $salida .= ' | ';
        $salida .= '<button id="' . $id_boton . '" class="boton-modificar Boton_Tabla obtener-informacion" data-id="'.$NombreP.'">Editar</button>';
        $salida .= '</td>';
        $salida .= '</tr>';
    }

    $salida .= '</tbody></table>';
} else {
    $salida .= 'No se encontraron resultados';
}

echo $salida;
?>
