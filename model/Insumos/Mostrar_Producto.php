<?php
include_once('../../config/Crud_bd.php');

class Mostrar{
    private $base;

    function instancias(){
        $this->base = new Crud_bd;
        $this->base->conexion_bd();
    }

    function busqueda(?string $parametro = null){
        if($parametro == null){
            $querry = "SELECT * FROM productoterminado";
            $resultados = $this->base->mostrar($querry);
        }

        else{
            $querry = "SELECT * FROM productoterminado WHERE IDProducto LIKE :q OR Descripcion LIKE :q OR StockMinimo 
            LIKE :q OR StockMaximo LIKE :q OR CostoProm LIKE :q OR CostoUltimo LIKE :q OR Cantidad LIKE :q";

            $array = [":q"=>'%'.$parametro.'%'];

            $resultados = $this->base->mostrar($querry, $array);
        }
        
        return $resultados;
    }
    
    function getProducto($id){
        $querry = "SELECT * FROM productoterminado WHERE IDProducto = :id";
        $array = [":id"=>$id];
        $resultados = $this->base->mostrar($querry, $array);
        return $resultados;
    }
    
}
?>