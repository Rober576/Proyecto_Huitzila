<?php
require_once('../../model/Produccion/Mod_Movimientos_Mezcal.php');
$objeto=new modificarMez();

$lote=$_POST["lote"];
$fecha=$_POST["fecha"];
$tipo=$_POST["entradasalida"];
$procedencia=$_POST["destinosalida"];
$movimiento=$_POST["movimiento"];
$volumen=$_POST["volumen"];
$concentracion=$_POST["concentracion"];

/*$especie=$_POST["especie"];
$categoria=$_POST["categoria"];*/

if ($tipo=="Entrada"){
    $proce="Entrada";
}else if ($tipo=="Salida"){
    $proce="Salida";
}

$u=$objeto->actualizar($lote,$fecha,$tipo,$procedencia,$movimiento, $volumen, $concentracion);

if ($u==true){
    echo json_encode('exito');
}
else{
    echo json_encode('id');
}

?>
