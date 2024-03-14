<?php
include_once('../../model/ejemplo/modificar/Obtener_InfoE4.php');

$base = new ObtenerCampos();
$base->instancias();

// Utiliza $_GET para obtener el valor del ID desde la URL
$id = isset($_GET['id']) ? $_GET['id'] : null;
$info = $base->obtener($id);

// Devolver la información como JSON
header('Content-Type: application/json');
echo json_encode($info);
?>
