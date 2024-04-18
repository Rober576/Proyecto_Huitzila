<?php
include_once('../../model/Calidad/Registro_ValoresMinMax.php');
$ID = $_POST["ID"];
$ALCVolMin = $_POST["ALCVolMin"];
$ALCVolMax = $_POST["ALCVolMax"];
$ExtractoSecoMin = $_POST["ExtractoSecoMin"];
$ExtractoSecoMax = $_POST["ExtractoSecoMax"];
$MetanolMin = $_POST["MetanolMin"];
$MetanolMax = $_POST["MetanolMax"];
$AlcoholesSuperioresMin = $_POST["AlcoholesSuperioresMin"];
$AlcoholesSuperioresMax = $_POST["AlcoholesSuperioresMax"];
$AldehidosMin = $_POST["AldehidosMin"];
$AldehidosMax = $_POST["AldehidosMax"];
$FurfuralMin = $_POST["FurfuralMin"];
$FurfuralMax = $_POST["FurfuralMax"];
$PlomoMin = $_POST["PlomoMin"];
$PlomoMax = $_POST["PlomoMax"];
$ArsenicoMin = $_POST["ArsenicoMin"];
$ArsenicoMax = $_POST["ArsenicoMax"];

$calidad = new Registro_MinMax();
$calidad->conexion();
$calidad->insertar($ID, $ALCVolMin, $ALCVolMax, $ExtractoSecoMin, $ExtractoSecoMax, $MetanolMin, $MetanolMax, $AlcoholesSuperioresMin, $AlcoholesSuperioresMax, $AldehidosMin, $AldehidosMax, $FurfuralMin, $FurfuralMax, $PlomoMin, $PlomoMax, $ArsenicoMin, $ArsenicoMax);
?>