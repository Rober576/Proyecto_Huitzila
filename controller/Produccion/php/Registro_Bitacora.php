<?php
require_once('../../../model/Produccion/Registrar/Registro_Bitacora.php');
$objeto=new Bitacora();

$fechaC=2000-12-27;
$procedencia=$_POST["procedencia"];
$costo=$_POST["costo"];
$lote=$_POST["lote"];
$kgEntrada=10;

$fecha=$_POST["fecha"];
$guia=$_POST["guia"];
$especie=$_POST["especie"];
$agave=$_POST["agave"];
$brix=$_POST["brix"];
$art=$_POST["art"];

$coccion=$_POST["coccion"];
$fechaI=$_POST["fecha_inicio"];
$fechaF=$_POST["fecha_fin"];
$art2=$_POST["art2"];

$u=$objeto->insertar_bitacora($fechaC, $procedencia, $costo, $lote, $kgEntrada, $fecha, $guia, $especie, $agave, $brix, $art, $coccion, $fechaI, $fechaF, $art2);
if($u==true){
    echo json_encode('exito');
    
}else{
    echo json_encode('no exito');
    
}
?>