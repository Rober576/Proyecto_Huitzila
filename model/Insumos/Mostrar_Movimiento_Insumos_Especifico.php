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
            $querry = "SELECT m.Fecha, i.NombreInsumo, m.EntradaSalida, m.Destino, m.Cantidad, m.CostoUnitario, m.CostoTotal, m.CantidadRestante FROM movimientoinsumos m
                        INNER JOIN insumos i ON m.IDInsumo = i.IDInsumo";
            $resultados = $this->base->mostrar($querry);
        }

        return $resultados;
    }
    
}
?>
