<?php
include_once('../../../../model/Agricola/Plantaciones/Mostrar/Cosultar_Plantaciones_M.php');
$base = new Mostrar();
$base->instancias();

if (isset($_POST['consulta'])) {
    $busqueda = $_POST['consulta'];
    $resultado = $base->buscador($busqueda);

} else {
    $resultado = $base->getInfo_Plantaciones();
}



$salida = '';

if ($resultado) {
    $salida .= '
    <table border="1">
    <thead>
        <tr>
        <th>Clave de plantacion</th>
        <th>Superficie</th>
        <th>Cantidad de plantas</th>
        <th>Fecha de plantacion</th>
        <th>Campo sembrado</th>
        <th>Tipo de planta</th>
        <th>Nombre del trabajador</th>
        <th>Datos del vehiculo</th>
        <th>Costos de gasolina</th>
        <th>Costos de material</th>
        <th>Fecha de inicio</th>
        <th>Fecha de finalizacion</th>
        <th>Acciones</th>
        </tr>
    </thead>
        <tbody>';

    foreach ($resultado as $fila) {
        $base->instancias();
        $ClaveP = $fila['ClavePlantacion'];
        $id_boton =$ClaveP;
        $TipoP  = $base->getInfo_TipoPlantas($ClaveP);
        $CodigoA  = $base->getInfo_Plantacionpredio($ClaveP);
        $NombreA  = $base->getInfo_Predios($CodigoA);

        $salida .= '<tr>';
        $salida .= '<td>' . $fila["ClavePlantacion"] . '</td>';
        $salida .= '<td>' . $fila["Superficie"] . '</td>';
        $salida .= '<td>' . $fila["CantidadPlantas"] . '</td>';
        $salida .= '<td>' . $fila["Fecha"] . '</td>';
        $salida .= '<td>' . $NombreA . '</td>';
        $salida .= '<td>' . $TipoP . '</td>';
        $salida .= '<td>' . $fila["NombreTrabajador"] . '</td>';
        $salida .= '<td>' . $fila["DatosVehiculo"] . '</td>';
        $salida .= '<td>' . $fila["CostoGasolina"] . '</td>';
        $salida .= '<td>' . $fila["CostoMaterial"] . '</td>';
        $salida .= '<td>' . $fila["FechaInicio"] . '</td>';
        $salida .= '<td>' . $fila["FechaFinal"] . '</td>';
    
        $salida .= '<td>';
        $salida .= '<button id="' . $id_boton . '" class="boton-eliminarP Boton_Tabla eliminar-elemento" data-id="'.$ClaveP.'">Eliminar</Button>';
        $salida .= ' | ';
        $salida .= '<button id="' . $id_boton . '" class="boton-modificarP Boton_Tabla obtener-informacion" data-id="'.$ClaveP.'">Editar</button>';
        $salida .= '</td>';
        $salida .= '</tr>';
    }

    $salida .= '</tbody></table>';
} else {
    $salida .= 'No se encontraron resultados';
}

echo $salida;
?>
