<?php
include_once('../../model/Calidad/Modificar_Fisioquimico.php');

$clave = $_POST["clave_analisis"];
$Lote = $_POST["lote"];
$alcohol = $_POST["alcohol"];
$extractoSec = $_POST["ext_seco"];
$metanol = $_POST["metanol"];
$alcoholesSup = $_POST["alcohol_sup"];
$aldehidos = $_POST["aldehidos"];
$furfal = $_POST["furfural"];
$plomo = $_POST["plomo"];
$cobre = $_POST["cobre"];


$modificarFisio=new Modificar();
$modificarFisio->conexion();
$update=$modificarFisio->insertar($clave, $Lote ,$alcohol, $extractoSec, $metanol, $alcoholesSup, $aldehidos, $furfal, $plomo, $cobre);

?>