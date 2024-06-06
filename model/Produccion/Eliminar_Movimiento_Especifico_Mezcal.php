<?php
include_once('../../config/Crud_bd.php');

class EliminarCampos {
    private $base;

    function instancias() {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function eliminar($Lote, $NumeroMovimiento) {
        $query = "DELETE FROM movimientomezcal WHERE Lote = :Lote AND NumeroMovimiento = :NumeroMovimiento";
        
        $this->base->insertar_eliminar_actualizar($query, [
            ":Lote" => $Lote,
            ":NumeroMovimiento" => $NumeroMovimiento
        ]);
        
        $this->base->cerrar_conexion();
    }
}
?> 