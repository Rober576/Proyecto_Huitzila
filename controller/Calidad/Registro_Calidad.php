<?php
include_once('../../model/Calidad/Registro_Calidad.php');
$Lote = $_POST["lote"];
$Azucares = $_POST["azucares"];
$Madurez = $_POST["madurez"];
$TamañoMateria = $_POST["mat_prima"];

$calidad = new Registro_Calidad();
$calidad->conexion();
$calidad->insertar($Lote, $Azucares, $Madurez, $TamañoMateria);

?>
