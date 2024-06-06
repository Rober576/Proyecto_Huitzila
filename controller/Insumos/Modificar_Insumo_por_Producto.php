<?php
include_once('../../model/Insumos/Modificar_Insumo_por_Producto.php');
$cantidad = $_POST["cantidadInput"];
$costoUni = $_POST["costoUniInput"];
$costoTot = $_POST["costoTotInput"];
$noMov = $_POST["idInput"];


$obj = new NuevosCampos();
$obj->conexion();
$obj->actualizar($cantidad, $costoUni, $costoTot, $noMov);
?>
