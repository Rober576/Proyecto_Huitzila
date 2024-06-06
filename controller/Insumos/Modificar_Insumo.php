<?php
include_once('../../model/Insumos/Modificar_Insumo.php');
$id = $_POST["Identificador"];
$nombreInsumo = $_POST["Nombre"];
$unidades = $_POST["Unidades"];
$existencia = $_POST["Existencia"];
$fechaRegistro = $_POST["FechaReg"];
$stockMinimo = $_POST["Stockmi"];
$stockMaximo = $_POST["Stockma"];
$costo = $_POST["Costo"];
$descripcion = $_POST["Descripcion"];

$obj = new NuevosCampos();
$obj->conexion();
$obj->insertar($id, $nombreInsumo, $unidades, $existencia, $fechaRegistro, $stockMinimo, $stockMaximo, $costo, $descripcion);
?>
