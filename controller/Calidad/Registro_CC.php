<?php
include_once('../../model/Calidad/Registro_CC.php');

$Lote = $_POST["lote"];
$Embasado = isset($_POST["control1"]) ? 1 : 0;
$Sellado = isset($_POST["control2"]) ? 1 : 0;
$Etiqueta = isset($_POST["control3"]) ? 1 : 0;
$SinAbolladuras = isset($_POST["control4"]) ? 1 : 0;
$Color = isset($_POST["control5"]) ? 1 : 0;

$reg = new Registro_CC();
$reg->conexion();
$reg->insertar($Lote, $Embasado, $Sellado, $Etiqueta, $SinAbolladuras, $Color);
?>
