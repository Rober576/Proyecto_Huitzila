<?php
include_once('../../../../model/Agricola/Predios/Mostrar/Consultar_Predio_M.php');

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
        <th>Clave de predio</th>
        <th>Nombre del predio</th>
        <th>Superficie</th>
        <th>Descripción</th>
        <th>Plantaciones</th>
        <th>Acciones</th>
        </tr>
    </thead>
        <tbody>';

    foreach ($resultado as $fila) {
        $CodigoA = $fila['CodigoArea'];
        $id_boton =$CodigoA;
    
        $salida .= '<tr>';
        $salida .= '<td>' . $fila["CodigoArea"] . '</td>';
        $salida .= '<td>' . $fila["Nombre"] . '</td>';
        $salida .= '<td>' . $fila["Superficie"] . '</td>';
        $salida .= '<td>' . $fila["DescripcionArea"] . '</td>';

        $salida .= '<td>';
        $salida .= '<button id="' . $id_boton . '" class="boton-ver-plantacion Boton_Tabla obtener-informacion" data-id="'.$CodigoA.'">Ver plantación</button>';
        $salida .= ' | ';
        $salida .= '<button id="' . $id_boton . '" class="boton-agragar-plantacion Boton_Tabla obtener-informacion" data-id="'.$CodigoA.'">Agregar plantación</button>';
        $salida .= '</td>';
    
        $salida .= '<td>';
        $salida .= '<button id="' . $id_boton . '" class="boton-eliminar Boton_Tabla eliminar-elemento" data-id="'.$CodigoA.'">Eliminar</Button>';
        $salida .= ' | ';
        $salida .= '<button id="' . $id_boton . '" class="boton-modificar Boton_Tabla obtener-informacion" data-id="'.$CodigoA.'">Editar</button>';
        $salida .= '</td>';
        $salida .= '</tr>';
    }

    $salida .= '</tbody></table>';
} else {
    $salida .= 'No se encontraron resultados';
}

echo $salida;
?>
