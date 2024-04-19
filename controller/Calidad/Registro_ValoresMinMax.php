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
$PlomoMax = floatval($_POST["max_plomo"]);
$ArsenicoMax = floatval($_POST["max_arsenico"]);

$calidad = new Actualizar_MinMax();
$calidad->conexion();
$calidad->actualizar($ALCVolMin, $ALCVolMax, $ExtractoSecoMin, $ExtractoSecoMax, $MetanolMin, $MetanolMax, $AlcoholesSuperioresMin, $AlcoholesSuperioresMax, $AldehidosMin, $AldehidosMax, $FurfuralMin, $FurfuralMax, $PlomoMax, $ArsenicoMax);
?>