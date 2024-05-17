<?php
include_once('../../model/Produccion/Eliminar_Movimiento_Especifico_Destilados_Cremas_Licores.php');

$base = new EliminarCampos();
$base->instancias();

$Lote = isset($_GET['id']) ? $_GET['id'] : null;
$NumeroMovimiento = isset($_GET['NumeroMovimiento']) ? $_GET['NumeroMovimiento'] : null;

$base->eliminar($Lote, $NumeroMovimiento);
echo json_encode('Eliminado con éxito');
?>
