<?php
include_once('../../model/Calidad/Registro_Calidad.php');
$Lote = 'ASS';
$Azucares = 10.5;
$Madurez = 10.5;
$Materia = 10.5;

$calidad = new Registro_Calidad();
$calidad->conexion();
$calidad->insertar($Lote, $Azucares, $Madurez, $Materia);

?>