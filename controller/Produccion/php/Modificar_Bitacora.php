<?php
require_once('../../../model/Produccion/Modificar/Modificar_Bitacora.php');
$objeto=new modificarBitacora();

$fechaC='2000-12-27';
$lote=$_POST["lote"];
$kgEntrada=10;
$procedencia=$_POST["procedencia"];
$costo=$_POST["costo"];
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

if ($procedencia=="procedencia1"){
    $proce="Interno";
}else if ($procedencia=="procedencia2"){
    $proce="Externo";
}

$u=$objeto->actualizar($guia, $fechaC, $proce, $costo, $lote, $kgEntrada, $fecha, $especie, $agave, $brix, $art, $coccion, $fechaI, $fechaF, $art2);

if ($u==true){
    echo json_encode('exito');
}else{
    echo json_encode('fechas');
}

?>