<?php
include_once("../../model/Insumos/Insumos_Por_Producto.php");

$base = new Insumo();

$productos = $_POST['Id_productos'];
$insumos = $_POST['Id_insumos'];
$cantidad = $_POST['Cantidad'];
$costoU = $_POST['UCosto'];
$costoT = $_POST['CostoT'];
$lote = $_POST['Id_lotes'];

if($base->obtenerNo()[0]['No'] == null){
    $no_actual = 1;

}else{
    $no_actual = floatval($base->obtenerNo()[0]['No']) + 1;
}



$base->regsitrarIP($productos, $insumos, $cantidad, $costoU, $costoT, $lote, $no_actual);

echo json_encode('todo chido')




?>