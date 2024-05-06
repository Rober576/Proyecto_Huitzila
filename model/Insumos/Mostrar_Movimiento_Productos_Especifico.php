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
            $querry = "SELECT m.Fecha, i.ProductoTerminado, m.EntradaSalida, m.Destino, m.Cantidad, m.CostoUnitario, m.CostoTotal, m.CantidadRestante FROM movimientoproductos m
                        INNER JOIN productoterminado i ON m.IDProducto = i.IDProducto";
            $resultados = $this->base->mostrar($querry);
        }

        return $resultados;
    }
    
}
?>
