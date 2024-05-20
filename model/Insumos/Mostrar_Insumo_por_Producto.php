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
            $querry = "SELECT * FROM insumosproductos";
            $resultados = $this->base->mostrar($querry);
        }

        else{
            $querry = "SELECT * FROM insumosproductos WHERE IDProducto LIKE :q OR IDInsumos LIKE :q OR Cantidad 
            LIKE :q OR CostoActual LIKE :q OR CostoTotal LIKE :q";

            $array = [":q"=>'%'.$parametro.'%'];

            $resultados = $this->base->mostrar($querry, $array);
        }
        
        return $resultados;
    }
    function getProducto($id){
        $query = "SELECT * FROM insumosproductos WHERE IDProducto = :id";
        $array = [":id"=>$id];
        $resultados = $this->base->mostrar($query, $array);
        return $resultados;
    }

  
    function getInsumo($id){
        $query = "SELECT * FROM insumosproductos WHERE NoInsumo = :id";
        $array = [":id"=>$id];
        $resultados = $this->base->mostrar($query, $array);
        return $resultados;
    }
    
}
?>