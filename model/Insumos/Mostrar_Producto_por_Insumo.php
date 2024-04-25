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
            $querry = "SELECT * FROM productoporinsumo";
            $resultados = $this->base->mostrar($querry);
        }

        else{
            $querry = "SELECT * FROM productoporinsumo WHERE Producto LIKE :q OR Insumo LIKE :q OR Cantidad 
            LIKE :q OR CostoUnitario LIKE :q OR CostoTotal LIKE :q";

            $array = [":q"=>'%'.$parametro.'%'];

            $resultados = $this->base->mostrar($querry, $array);
        }
        
        return $resultados;
    }
    
    function getProducto_por_Insumo($id){
        $querry = "SELECT * FROM productoporinsumo WHERE Producto = :id";
        $array = [":id"=>$id];
        $resultados = $this->base->mostrar($querry, $array);
        return $resultados;
    }
}
?>