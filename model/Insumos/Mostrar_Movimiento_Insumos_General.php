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
            $querry = "SELECT m.IDInsumo, m.Cantidad, m.CostoUnitario, i.NombreInsumo FROM movimientoinsumos m
                        INNER JOIN insumos i ON m.IDInsumo = i.IDInsumo";
            $resultados = $this->base->mostrar($querry);
        }

        else{
            $querry = "SELECT m.IDInsumo, m.Cantidad, m.CostoUnitario, i.NombreInsumo FROM movimientoinsumos m
                        INNER JOIN insumos i ON m.IDInsumo = i.IDInsumo
                        WHERE m.IDInsumo LIKE :q OR m.Cantidad LIKE :q OR m.CostoUnitario LIKE :q OR i.NombreInsumo LIKE :q";

            $array = [":q"=>'%'.$parametro.'%'];

            $resultados = $this->base->mostrar($querry, $array);
        }
        
        return $resultados;
    }
    
    function getProducto($id){
        $querry = "SELECT IDInsumo, Cantidad, CostoUnitario FROM movimientoinsumos WHERE IDInsumo = :id";
        $array = [":id"=>$id];
        $resultados = $this->base->mostrar($querry, $array);
        return $resultados;
    }
}
?>
