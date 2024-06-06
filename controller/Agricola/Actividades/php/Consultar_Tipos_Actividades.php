<?php
include_once('../../../../model/Agricola/Actividades/Registrar/Consultar_Tipos_Actividades.php');

$controlador = new ControladorDatos();

$tipo = isset($_GET['tipo']) ? $_GET['tipo'] : '';

switch ($tipo) {
    case 'actividades':
        echo $controlador->obtenerActividades();
        break;

    case 'plagas':
        echo $controlador->obtenerPlagas();
        break;

    case 'herbicidas':
        echo $controlador->obtenerHerbicidas();
        break;
    case 'predios':
        echo $controlador->obtenerPredios();
        break;
}
?>
