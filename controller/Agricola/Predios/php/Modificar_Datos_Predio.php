<?php

include_once('../../model/Agricola/Predios/Modificar/Mod_Datos_Predio.php');
$cArea = $_POST["codArea"];
$cNombre = $_POST["nomPred"];
$cSuperficie = $_POST["superfPre"];
$cDescripcion = $_POST["descPrec"];

$obj = new NuevosCampos();
$obj->conexion();
$obj->editar($cArea, $cNombre, $cSuperficie, $cDescripcion);
echo json_encode('exito');
?>


