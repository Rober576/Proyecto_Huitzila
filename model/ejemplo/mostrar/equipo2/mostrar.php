<?php
require_once("../../../config/Crud_bd.php");

$crud = new Crud_bd();
$conexion = $crud->conexion_bd();

// Ejemplo de consulta para obtener los datos (ajusta según tu estructura de base de datos)
$consulta = "SELECT campo1, campo2, campo3, campo4, campo5 FROM tu_tabla WHERE tu_condicion";
$resultados = $crud->mostrar($consulta);

// Envía los resultados al script JavaScript
echo json_encode($resultados);

$crud->cerrar_conexion();
?>
