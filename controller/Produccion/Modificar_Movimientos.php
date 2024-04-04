<?php
require_once('../../model/Produccion/Mod_Movimientos_Mezcal.php');
$objeto=new modificarMez();

$lote=$_POST["lote"];
$movimiento=$_POST["movimiento"];
$volumen=$_POST["volumen"];
$concentracion=$_POST["concentracion"];
/*$especie=$_POST["especie"];
$categoria=$_POST["categoria"];*/



$u=$objeto->actualizar($lote,$movimiento, $volumen, $concentracion);

if ($u==true){
    echo json_encode('exito');
}
else{
    echo json_encode('id');
}

?>
