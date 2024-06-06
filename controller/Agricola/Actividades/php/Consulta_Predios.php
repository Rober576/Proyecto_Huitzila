<?php
include_once('../../../../model/Agricola/Actividades/Mostrar/Consultar_Predios_M.php');

$controlador = new ControladorDatos();
$predio = isset($_GET['predio']);
switch ($predio) {
    case 'predios':
        echo $controlador->obtenerPredios();
        break;
}
?>
