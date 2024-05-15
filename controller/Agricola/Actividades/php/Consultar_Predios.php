<?php
include_once('../../../../model/Agricola/Actividades/Registrar/Consultar_Predios.php');

$controlador = new ControladorDatos();
$predio = isset($_GET['predio']) ? $_GET['predio'] : '';
echo $controlador->obtenerActividades($predio);

?>