<?php
include_once('../../../../model/Agricola/Plantaciones/Registrar/Consultar_Tipos_Agave_Y_Predios.php');

$controlador = new ControladorDatos();

$tipo = isset($_GET['tipo']) ? $_GET['tipo'] : '';

switch ($tipo) {
    case 'predios':
        echo $controlador->obtenerPredios();
        break;
    case 'especies':
        echo $controlador->obtenerEspecies();
        break;
}
?>
