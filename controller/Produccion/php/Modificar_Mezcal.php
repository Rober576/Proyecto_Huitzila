<?php
require_once('../../../model/Produccion/Modificar/Mod_Datos_Mezcal.php');
$objeto=new modificarMezcal();
$lote=$_POST["lote"];
$tanque=$_POST["tanque"];
$IDClase=$_POST["clase"];
$edad=$_POST["edad"];
$especie=$_POST["especie"];
$IDCategoria=$_POST["categoria"];

$u=$objeto->actualizar($lote, $tanque, $IDClase, $edad,$especie, $IDCategoria);

if ($u==true){
    echo json_encode('exito');
}
?>
