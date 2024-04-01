<?php
include_once("../../model/Insumos/Registro_Modificar_Insumos.php");

$id = $_GET['id'];

$conn = new ObtenerCampos();
$conn->instancias();
$result = $conn->obtener($id);

echo json_encode($result);

?>
