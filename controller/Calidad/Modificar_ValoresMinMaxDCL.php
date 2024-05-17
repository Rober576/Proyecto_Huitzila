<?php
include_once('../../model/Calidad/Modificar_ValoresMinMaxDCL.php');
$PorcentajeAlcoholMin = floatval($_POST["min_alcohol"]);
$PorcentajeAlcoholMax = floatval($_POST["max_alcohol"]);
$MetanolMin = floatval($_POST["min_ext_seco"]);
$MetanolMax = floatval($_POST["max_ext_seco"]);
$AlcoholesSuperioresMin = floatval($_POST["min_metanol"]);
$AlcoholesSuperioresMax = floatval($_POST["max_metanol"]);

$calidad = new Actualizar_MinMax();
$calidad->conexion();
$calidad->actualizar($PorcentajeAlcoholMin, $PorcentajeAlcoholMax, $MetanolMin, $MetanolMax, $AlcoholesSuperioresMin, $AlcoholesSuperioresMax);
?>