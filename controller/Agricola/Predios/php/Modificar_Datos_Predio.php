<?php
include_once('../../../../model/Agricola/Predios/Modificar/Obtener_Info_Predios.php');

$base = new ObtenerCampos();
$base->instancias();

// Utiliza $_GET para obtener el valor del ID desde la URL
$id = isset($_GET['id']) ? $_GET['id'] : null;
$info = $base->obtener($id);
echo json_encode($info);

// Devolver la información como JSON
header('Content-Type: application/json');

?>

