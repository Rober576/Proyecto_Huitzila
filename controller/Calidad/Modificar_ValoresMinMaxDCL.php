<?php
include_once('../../model/Calidad/Modificar_ValoresMinMaxDCL.php');
$PorcentajeAlcoholMin = floatval($_POST["min_alcohol"]);
$PorcentajeAlcoholMax = floatval($_POST["max_alcohol"]);
$MetanolMin = floatval($_POST["min_metanol"]);
$MetanolMax = floatval($_POST["max_metanol"]);
$AlcoholesSuperioresMin = floatval($_POST["min_alc_sup"]);

$calidad = new Actualizar_MinMax();
$calidad->conexion();
$calidad->actualizar($PorcentajeAlcoholMin, $PorcentajeAlcoholMax, $MetanolMin, $MetanolMax, $AlcoholesSuperioresMin);
?>