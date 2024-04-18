<?php
include_once('../../model/Calidad/Registro_ValoresMinMax.php');
$ALCVolMin = floatval($_POST["min_alcohol"]);
$ALCVolMax = floatval($_POST["max_alcohol"]);
$ExtractoSecoMin = floatval($_POST["min_ext_seco"]);
$ExtractoSecoMax = floatval($_POST["max_ext_seco"]);
$MetanolMin = floatval($_POST["min_metanol"]);
$MetanolMax = floatval($_POST["max_metanol"]);
$AlcoholesSuperioresMin = floatval($_POST["min_alc_sup"]);
$AlcoholesSuperioresMax = floatval($_POST["max_alc_sup"]);
$AldehidosMin = floatval($_POST["min_aldehidos"]);
$AldehidosMax = floatval($_POST["max_aldehidos"]);
$FurfuralMin = floatval($_POST["min_furfural"]);
$FurfuralMax = floatval($_POST["max_furfural"]);
$PlomoMin = floatval($_POST["min_plomo"]);
$PlomoMax = floatval($_POST["max_plomo"]);
$ArsenicoMin = floatval($_POST["min_arsenico"]);
$ArsenicoMax = floatval($_POST["max_arsenico"]);

$calidad = new Registro_MinMax();
$calidad->conexion();
$calidad->insertar($ALCVolMin, $ALCVolMax, $ExtractoSecoMin, $ExtractoSecoMax, $MetanolMin, $MetanolMax, $AlcoholesSuperioresMin, $AlcoholesSuperioresMax, $AldehidosMin, $AldehidosMax, $FurfuralMin, $FurfuralMax, $PlomoMin, $PlomoMax, $ArsenicoMin, $ArsenicoMax);
?>