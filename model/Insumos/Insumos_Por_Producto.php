<?php
include_once('../../config/Crud_bd.php');

class Insumo extends Crud_bd{
    public $base;

    public function __construct(){
        parent::conexion_bd();
    }
    function obtenerLotes(){
        $querry = "SELECT Lote FROM analisisficoquimico WHERE cumplimiento = 1";
        $resultados = $this->mostrar($querry);
        return $resultados;

    }

    public function obtenerNo(){
        $querry = "SELECT MAX(NoInsumo) as No FROM insumosproductos";
        $resultados = $this->mostrar($querry);
        return $resultados;
    }

    public function regsitrarIP($producto, $insumo, $cantidad, $costoU, $costoT, $lote, $no){
        $querry = "INSERT INTO insumosproductos (IdProducto, IdInsumos, Cantidad, CostoActual, CostoTotal, NoInsumo, Mezcal)
         VALUES (:prod, :insumo, :cantidad, :cu, :ct, :noInsumo, :lotes)";
        $arre = [":prod" => $producto, ":insumo" => $insumo, ":cantidad" => $cantidad, ":cu" => $costoU, ":ct" => $costoT, ":lotes" => $lote, ":noInsumo" => $no];
        $this->insertar_eliminar_actualizar($querry, $arre);
    }
}
?>