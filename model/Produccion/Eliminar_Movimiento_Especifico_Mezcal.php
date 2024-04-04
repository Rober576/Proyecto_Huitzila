<?php
include_once('../../config/Crud_bd.php');

class EliminarCampos {
    private $base;

    function instancias() {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function eliminar($Lote, $Fecha, $IDMovimiento) {
        $query = "DELETE FROM movimientomezcal WHERE Lote = :Lote AND Fecha = :Fecha AND IDMovimiento = :IDMovimiento";
        
        $this->base->insertar_eliminar_actualizar($query, [
            ":Lote" => $Lote,
            ":Fecha" => $Fecha,
            ":IDMovimiento" => $IDMovimiento
        ]);
        
        $this->base->cerrar_conexion();
    }
}
?> 