<?php
include_once('../../model/Calidad/Registro_Fisioquimico.php');
$Clave = $_POST["clave_analisis"];
$Lote = $_POST["lote"];
$Alcohol = $_POST["alcohol"];
$Extracto = $_POST["ext_seco"];
$Metanol = $_POST["metanol"];
$Superiores = $_POST["alcohol_sup"];
$Aldehidos = $_POST["aldehidos"];
$Furfural = $_POST["furfural"];
$Plomo = $_POST["plomo"];
$Cobre = $_POST["cobre"];
$Estado = $_POST["Estado_as"];
$archivo=$_FILES["doc_ref"]["name"];

$usarios = new Registro_cuotas();
$usarios->conexion();
$usarios->insertar($Clave, $Lote, $Alcohol, $Extracto, $Metanol, $Superiores, $Aldehidos, $Furfural, $Plomo, $Cobre, $Estado, $archivo);

?>