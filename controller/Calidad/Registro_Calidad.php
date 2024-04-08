<?php
include_once('../../model/Calidad/Registro_Calidad.php');
$Lote = $_POST["lote"];
$Azucares = floatval($_POST["azucares"]);
$Madurez = floatval($_POST["madurez"]);
$TamañoMateria = floatval($_POST["mat_prima"]);

$calidad = new Registro_Calidad();
$calidad->conexion();
$calidad->insertar($Lote, $Azucares, $Madurez, $TamañoMateria);

?>
