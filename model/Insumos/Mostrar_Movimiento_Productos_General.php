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
            $querry = "SELECT m.IDProducto, m.Cantidad, m.CostoUnitario, p.Descripcion AS NombreProducto FROM movimientoproductos m
                        INNER JOIN productoterminado p ON m.IDProducto = p.IDProducto";
            $resultados = $this->base->mostrar($querry);
        } else {
            $querry = "SELECT m.IDProducto, m.Cantidad, m.CostoUnitario, p.Descripcion AS NombreProducto FROM movimientoproductos m
                        INNER JOIN productoterminado p ON m.IDProducto = p.IDProducto
                        WHERE m.IDProducto LIKE :q OR m.Cantidad LIKE :q OR m.CostoUnitario LIKE :q OR p.Descripcion LIKE :q";

            $array = [":q"=>'%'.$parametro.'%'];

            $resultados = $this->base->mostrar($querry, $array);
        }
        
        return $resultados;
    }
    
    function getProducto($id){
        $querry = "SELECT IDProducto, Cantidad, CostoUnitario FROM movimientoproductos WHERE IDProducto = :id";
        $array = [":id"=>$id];
        $resultados = $this->base->mostrar($querry, $array);
        return $resultados;
    }
}
?>
