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
            $querry = "SELECT * FROM produccionlotes";
            $resultados = $this->base->mostrar($querry);
        }

        else{
            $querry = "SELECT * FROM produccionlotes WHERE Lote LIKE :q OR Producto LIKE :q OR Cantidad 
            LIKE :q";

            $array = [":q"=>'%'.$parametro.'%'];


            $resultados = $this->base->mostrar($querry, $array);
        }
        
        return $resultados;
    }
    
    function getProducto($id){
        $querry = "SELECT * FROM produccionlotes WHERE Producto = :id";
        $array = [":id"=>$id];
        $resultados = $this->base->mostrar($querry, $array);
        return $resultados;
    }
}
?>