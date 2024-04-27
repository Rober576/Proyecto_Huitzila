<?php
include_once("../../model/Insumos/Eliminar_Insumo_por_Producto.php");

$id = $_GET['id'];
$base = new EliminarInsumoProducto();
$base->instancias();

$base->eliminar($id);
echo json_encode("exito");
/*$movimiento = $base->buscarMovimiento($id);

if($movimiento == true){
    echo json_encode("movimientos");
}

else{
    $base->eliminar($id);
    echo json_encode("exito");
}*/
?>