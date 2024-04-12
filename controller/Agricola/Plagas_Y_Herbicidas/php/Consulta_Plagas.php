<?php
include_once('../../../../model/Agricola/Plagas_Y_Herbicidas/Mostrar/Consultar_Plagas_M.php');

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
        <th>Nombre </th>
        <th>Nombre científico</th>
        <th>Descripción</th>
        <th>Acciones</th>
        </tr>
    </thead>
        <tbody>';

    foreach ($resultado as $fila) {
        $Nom= $fila['Nombre'];
        $id_boton =$Nom;
        
    
        $salida .= '<tr>';
        $salida .= '<td>' . $fila["Nombre"] . '</td>';
        $salida .= '<td>' . $fila["Cientifico"] . '</td>';
        $salida .= '<td>' . $fila["Descripcion"] . '</td>';

    
        $salida .= '<td>';
        $salida .= '<button id="' . $id_boton . '" class="boton-eliminar Boton_Tabla eliminar-elemento" data-id="'.$Nom.'">Eliminar</Button>';
        $salida .= ' | ';
        $salida .= '<button id="' . $id_boton . '" class="boton-modificar Boton_Tabla obtener-informacion" data-id="'.$Nom.'">Editar</button>';
        $salida .= '</td>';
        $salida .= '</tr>';
    }

    $salida .= '</tbody></table>';
} else {
    $salida .= 'No se encontraron resultados';
}

echo $salida;
?>
