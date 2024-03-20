<?php
require_once('../../model/Produccion/Registro_Bitacora.php');
$objeto=new Bitacora();

$procedencia=$_POST["procedencia"];
$costo=$_POST["costo"];
$lote=$_POST["lote"];

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

$loteV=$objeto->buscar_lote($lote);
$guiaV=$objeto->buscar_guia($guia);

if($loteV==true){
    echo json_encode('lote');
}else if ($guiaV==true){
    echo json_encode('guia');
}else{
    $u=$objeto->insertar_bitacora($proce, $costo, $lote, $fecha, $guia, $especie, $agave, $brix, $art, $coccion, $fechaI, $fechaF, $art2);
    if($u==true){
        echo json_encode('exito');
        
    }else{
        echo json_encode('no exito');
        
    }
}


?>