<?php
include_once('../../config/Crud_bd.php');

class RegistroProducto{
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    //retorna true si el id del producto ya existe
    function buscarID($id){
        $querry = "SELECT * FROM productoterminado WHERE IDProducto = '$id'";
        //$arre = [':id'=>$id];

        $resultados = $this->base->mostrar($querry);

        if($resultados != null){
            return true;
        }else{
            return false;
        }
    }

    //da de alta un producto
    function registrar($id, $desc, $smin, $smax, $cprom, $cu, $cantidad){
        $querry = "INSERT INTO productoterminado (IDProducto, Descripcion, StockMinimo, StockMaximo, CostoProm, 
        CostoUltimo, Cantidad) VALUES (:id, :descr, :smin, :smax, :cprom, :cu, :cantidad)";

        $array = [':id'=>$id, ':descr'=>$desc, ':smin'=>$smin, ':smax'=>$smax, ':cprom'=>$cprom, ':cu'=>$cu, ':cantidad'=>$cantidad];

        $this->base->insertar_eliminar_actualizar($querry, $array);
    }
}
?>