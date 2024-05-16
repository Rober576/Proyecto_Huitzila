<?php
include_once('../../../../model/Agricola/Actividades/Mostrar/Cosultar_Plantaciones_M.php');

$controlador = new ControladorDatos();
$plantacionId = isset($_GET['plantacion']) ? $_GET['plantacion'] : null;

switch ($plantacionId) {
    case null:
        echo json_encode(array("error" => "ID de plantación no proporcionada"));
        break;
    default:
        echo $controlador->obtenerPlantacionCosechadas($plantacionId);
}

?>
