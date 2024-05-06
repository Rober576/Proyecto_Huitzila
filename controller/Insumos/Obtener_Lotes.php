<?php
include_once('../..//model/Insumos/Insumos_Por_Producto.php');

$base = new Insumo();
$productos = $base->obtenerLotes();
$lotes = array();

for($i = 0; $i < count($productos); $i++){
    array_push($lotes, $productos[$i]['Lote']);
}

echo json_encode($lotes);

?>