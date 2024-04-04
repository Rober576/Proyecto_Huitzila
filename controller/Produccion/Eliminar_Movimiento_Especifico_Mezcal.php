<?php
include_once('../../model/Produccion/Eliminar_Movimiento_Especifico_Mezcal.php');

$base = new EliminarCampos();
$base->instancias();

$Lote = isset($_GET['id']) ? $_GET['id'] : null;
$Fecha = isset($_GET['fecha']) ? $_GET['fecha'] : null;
$IDMovimiento = isset($_GET['idmovimiento']) ? $_GET['idmovimiento'] : null;

$base->eliminar($Lote, $Fecha, $IDMovimiento);
echo json_encode('Eliminado con éxito');
?>
