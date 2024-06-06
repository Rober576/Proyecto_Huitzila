<?php
include_once('../../../../model/Agricola/Actividades/Registrar/Consultar_Plantaciones.php');

$controlador = new ControladorDatos();
$plantacion = isset($_GET['plantacion']) ? $_GET['plantacion'] : '';
echo $controlador->obtenerActividades($plantacion);

?>