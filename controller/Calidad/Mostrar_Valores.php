<?php
include_once("../../model/Calidad/Mostrar_Valores.php");
// Configuración de la conexión a la base de datos (reemplaza estos valores con los tuyos)

// Obtener el ID enviado desde JavaScript
$id = $_GET['id'];

$conn = new ObtenerCampos();
$conn->instancias();
$result = $conn->obtener($id);

echo json_encode($result);

// Cerrar conexión
?>
