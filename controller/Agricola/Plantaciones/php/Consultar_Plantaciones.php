<?php

include_once('../../../../model/Agricola/Plantaciones/Mostrar/Cosultar_Plantaciones_M.php');
$base = new Mostrar();
$base->instancias();
if (isset($_GET['predio'])) {
    $codigoArea = $_GET['predio'];
    $NombreA  = $base->getInfo_Predios($codigoArea);
    $resultado=$base-> buscador($codigoArea);

    $salida = '';

if ($resultado) {
    $salida .= '
    <table border="1">
    <thead>
        <tr>
        <th>ClavePlantación</th>
        <th>Superficie</th>
        <th>Cantidad de plantas</th>
        <th>Fecha de plantación</th>
        <th>Campo sembrado</th>
        <th>Tipo de planta</th>
        <th>Nombre del trabajador</th>
        <th>Datos del vehñículo</th>
        <th>Costos de gasolina</th>
        <th>Costos de material</th>
        <th>Fecha de inicio</th>
        <th>Fecha de finalización</th>
        <th>Acciones</th>
        </tr>
    </thead>
        <tbody>';

    foreach ($resultado as $fila) {
        $Plantacion =  $fila["ClavePlantacion"];
        $id_boton =$Plantacion;

        $base->instancias();
        $res=$base-> getInfo_Plantaciones($Plantacion);
        $base->instancias();
        $TipoP  = $base->getInfo_TipoPlantas($Plantacion);
        $salida .= '<tr>';
        $salida .= '<td>' . $Plantacion. '</td>';

        foreach ($res as $fil) {
            $salida .= '<td>' . $fil["Superficie"] . '</td>';
            $salida .= '<td>' . $fil["CantidadPlantas"] . '</td>';
            $salida .= '<td>' . $fil["Fecha"] . '</td>';
            $salida .= '<td>' . $NombreA . '</td>';

            

            $salida .= '<td>' . $TipoP . '</td>';
            $salida .= '<td>' . $fil["NombreTrabajador"] . '</td>';
            $salida .= '<td>' . $fil["DatosVehiculo"] . '</td>';
            $salida .= '<td>' . $fil["CostoGasolina"] . '</td>';
            $salida .= '<td>' . $fil["CostoMaterial"] . '</td>';
            $salida .= '<td>' . $fil["FechaInicio"] . '</td>';
            $salida .= '<td>' . $fil["FechaFinal"] . '</td>';

            }
        $salida .= '<td>';
        $salida .= '<button id="' . $id_boton . '" class="boton-eliminarP Boton_Tabla eliminar-elemento" data-id="'.$Plantacion.'">Eliminar</Button>';
        $salida .= ' | ';
        $salida .= '<button id="' . $id_boton . '" class="boton-modificarP Boton_Tabla obtener-informacion" data-id="'.$Plantacion.'">Editar</button>';
        $salida .= '</td>';
    }


    $salida .= '</tbody></table>';
} else {
    $salida .= 'No se encontraron resultados';
}

echo $salida;



} else {
    $salida .= 'No se encontraron resultados';
}
?>