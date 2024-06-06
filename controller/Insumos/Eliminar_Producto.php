<?php
include_once("../../model/Insumos/Eliminar_Producto.php");

$id = $_GET['id'];
$base = new EliminarProducto();
$base->instancias();
$movimiento = $base->buscarMovimiento($id);

if($movimiento == true){
    echo json_encode("movimientos");
}

else{
    $base->eliminar($id);
    echo json_encode("exito");
}
?>