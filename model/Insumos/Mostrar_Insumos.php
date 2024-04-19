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
            $querry = "SELECT * FROM insumos";
            $resultados = $this->base->mostrar($querry);
        }

        else{
            $querry = "SELECT * FROM insumos WHERE IDInsumo LIKE :q OR NombreInsumo LIKE :q OR Descripcion 
            LIKE :q OR Unidades LIKE :q OR Existencia LIKE :q OR FechaReg LIKE :q OR StockMinimo LIKE :q OR StockMaximo LIKE :q
            OR Costo LIKE :q";

            $array = [":q"=>'%'.$parametro.'%'];

            $resultados = $this->base->mostrar($querry, $array);
        }
        
        return $resultados;
    }
    
    function getInsumo($id){
        $querry = "SELECT * FROM insumo WHERE IDInsumo = :id";
        $array = [":id"=>$id];
        $resultados = $this->base->mostrar($querry, $array);
        return $resultados;
    }
}
?>