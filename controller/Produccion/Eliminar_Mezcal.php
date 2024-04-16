<?php
include_once('../../model/Produccion/Eliminar_Mezcal.php');


$base = new EliminarCampos();
$base->instancias();


$Lote = isset($_GET['id']) ? $_GET['id'] : null;
$base->eliminar($Lote);
echo json_encode('Eliminado con éxito');
