<?php
include('../../config/Crud_bd.php');

class NuevosCampos
{
    private $base;

    function conexion()
    {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function actualizar($cantidad, $costoUni, $costoTot, $noMov) {
        
        $query = "UPDATE insumosproductos SET Cantidad = ?, CostoActual = ?, CostoTotal = ? WHERE NoInsumo = ?";
        $params = array($cantidad, $costoUni, $costoTot, $noMov);
        $this->base->insertar_eliminar_actualizar($query, $params);
        $this->base->cerrar_conexion();
    }
}
?>
