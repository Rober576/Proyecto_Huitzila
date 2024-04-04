<?php
include_once('../../model/Calidad/Registro_Calidad.php');
$Lote = $_POST["Lote"];
$Azucares = $_POST["Azucares"];
$Madurez = $_POST["Madurez"];
$TamañoMateria = $_POST["TamañoMateria"];

$calidad = new Registro_Calidad();
$calidad->conexion();
$calidad->insertar($Lote, $Azucares, $Madurez, $TamañoMateria);

?>
