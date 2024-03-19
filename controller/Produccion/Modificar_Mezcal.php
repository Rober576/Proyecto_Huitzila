<?php
require_once('../../../model/Produccion/Modificar/Mod_Datos_Mezcal.php');
$objeto=new modificarMezcal();
echo("entra aquiSSSSSS");
$lote=$_POST["lote"];
$tanque=$_POST["tanque"];
$clase=$_POST["clase"];
$edad=$_POST["edad"];
$especie=$_POST["especie"];
$categoria=$_POST["categoria"];



$u=$objeto->actualizar($lote, $tanque, $clase, $edad,$especie, $categoria);

if ($u==true){
    echo json_encode('exito');
}
else{
    echo json_encode('id');
}

?>
