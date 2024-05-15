<?php
include_once('../../model/Calidad/Registro_DCL.php');
$calidad = new Registro_Calidad();
$Lote = $_POST["lote"];
$Alcohol = $_POST["alcohol"];
$Metanol= $_POST["metanol"];
$AlcoholesSuperiores = $_POST["alc_sup"];

$u=$calidad->insertar($Lote, $Alcohol, $Metanol, $AlcoholesSuperiores);
    if($u==true){
        echo json_encode('exito');
        
    }else{
        echo json_encode('no exito');
        
    }

?>