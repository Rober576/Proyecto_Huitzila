<?php
include_once('../../model/Produccion/Eliminar_Movimientos_Mezcal.php');

$base = new EliminarCampos();
$base->instancias();


// Utiliza $_GET para obtener el valor del Lote desde la URL
$Lote = isset($_GET['id']) ? $_GET['id'] : null;
$base->eliminar($Lote);
echo json_encode('Eliminado con éxito');
?>
