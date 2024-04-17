<?php
include_once('../../config/Crud_bd.php');

class EditarProducto{
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    //da de alta un producto
    function actualizar($id, $desc, $smin, $smax, $cprom, $cu, $cantidad){
        $querry = "UPDATE productoterminado SET Descripcion = :descr, StockMinimo = :smin, StockMaximo = :smax, CostoProm = :cprom,
        CostoUltimo = :cu, Cantidad = :cantidad WHERE IDProducto = :id";

        $array = [':id'=>$id, ':descr'=>$desc, ':smin'=>$smin, ':smax'=>$smax, ':cprom'=>$cprom, ':cu'=>$cu, ':cantidad'=>$cantidad];

        $this->base->insertar_eliminar_actualizar($querry, $array);
    }
}
?>