<?php
include_once('../../model/Calidad/Registro_DCL.php');
$Clave = $_POST["clave_analisis"];
$Lote = $_POST["lote"];
$PorcentajeAlcohol = $_POST["alcohol"];
$Metanol = $_POST["metanol"];
$AlcoholesSuperiores = $_POST["alc_sup"];

$reg = new Registro_DCL();
$reg->conexion();
$reg->insertar($Clave, $Lote, $PorcentajeAlcohol,  $Metanol, $AlcoholesSuperiores);

?>