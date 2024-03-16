<?php
include_once('../../../config/Crud_bd.php');

class EliminarCampos {
    private $base;

    function instancias() {
        $this->base = new Crud_bd();
        return $this->base->conexion_bd(); // Asegurémonos de que la conexión se haya establecido correctamente
    }

    function eliminar($Lote) {
        // Verificamos la conexión antes de intentar eliminar
        if ($this->instancias()) {
            $query = "DELETE FROM registromezcal WHERE Lote = :Lote";
            $eliminado = $this->base->insertar_eliminar_actualizar($query, [":Lote" => $Lote]);

            // Cerramos la conexión después de realizar la operación
            $this->base->cerrar_conexion();

            return $eliminado; // Devolvemos el resultado de la eliminación
        } else {
            return false; // Si la conexión no se pudo establecer, retornamos false
        }
    }
}
?> 
