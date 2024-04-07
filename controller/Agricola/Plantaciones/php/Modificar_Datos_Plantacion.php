<?php
include_once('../../../../model/Agricola/Plantaciones/Modificar/Obtener_Info_Plantaciones.php');

$base = new ObtenerCampos();
$base->instancias();


$id = isset($_GET['id']) ? $_GET['id'] : null;
$info = $base->obtener($id);
echo json_encode($info);


header('Content-Type: application/json');

?>

