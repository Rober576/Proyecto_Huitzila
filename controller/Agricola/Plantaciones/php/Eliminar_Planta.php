<?php
include_once('../../../../model/Agricola/Plantaciones/Modificar/Consultar_Eliminacion_Planta.php');

$base = new NuevosCampos();
$base->conexion();

// Utiliza $_GET para obtener el valor del ID desde la URL
$id = isset($_GET['id']) ? $_GET['id'] : null;
$info = $base->Consultar($id);

// Devolver la información como JSON
header('Content-Type: application/json');
echo json_encode($info);
?>
