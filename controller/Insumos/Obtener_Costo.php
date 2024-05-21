<?php
include_once('../../model/Insumos/Insumos_Por_Producto.php');

$base = new Insumo();
$IDProducto = $_GET['id'];

$costo = $base->obtenerCosto($IDProducto)[0]['Costo'];

echo json_encode($costo);
?>