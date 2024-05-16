<?php
include_once('../../../../model/Agricola/Actividades/Mostrar/Consultar_Actividades_M.php');

$base = new Mostrar();
$base->instancias();

if (isset($_GET['plantacion'])) {
    $Planta = $_GET['plantacion'];
    $resultado=$base-> buscador($Planta);
    $salida = '';
}

if ($resultado) {
    $salida .= '
    <table border="1">
    <thead>
        <tr>
        <th>Actividad realizada</th>
        <th>Fecha de inicio</th>
        <th>Semanas trabajadas</th>
        <th>Gastos generales</th>
        <th>Descripcion</th>
        <th>Acciones</th>
        </tr>
    </thead>
        <tbody>';

    foreach ($resultado as $fila) {
        $base = new Mostrar();
        $base->instancias();
        $Numeracion = $fila['NumeracionActividad'];
        $id_boton =$Numeracion;
        $Actividad=$base-> getInfo_ActividadR($fila["IdActividad"]);

        $salida .= '<tr>';
        $salida .= '<td>' . $Actividad . '</td>';
        $salida .= '<td>' . $fila["Fecha"] . '</td>';
        $salida .= '<td>' . $fila["Semana"] . '</td>';
        $salida .= '<td>' . $fila["Costo"] . '</td>';
        $salida .= '<td>' . $fila["Descripcion"] . '</td>';

        $salida .= '<td class="botones-columna">';
        $salida .= '<button id="' . $id_boton . '" class="boton-eliminar Boton_Tabla eliminar-elemento" data-id="'.$Numeracion.'">Eliminar</Button>';
        $salida .= ' | ';
        $salida .= '<button id="' . $id_boton . '" class="boton-modificar Boton_Tabla obtener-informacion" data-id="'.$Numeracion.'">Editar</button>';
        $salida .= '</td>';
        $salida .= '</tr>';
    }

    $salida .= '</tbody></table>';
} else {
    $salida .= 'No se encontraron resultados';
}

echo $salida;
?>
