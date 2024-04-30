<?php
include_once('../../../../model/Agricola/Actividades/Registrar/Consultar_Tipos_Actividades.php');

$controlador = new ControladorDatos();

$tipo = isset($_GET['tipo']) ? $_GET['tipo'] : '';

switch ($tipo) {
    case 'actividades':
        echo $controlador->obtenerActividades();
        break;
}
?>
