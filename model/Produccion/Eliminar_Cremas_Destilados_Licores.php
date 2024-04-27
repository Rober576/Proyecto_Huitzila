<?php
include_once('../../config/Crud_bd.php');

class EliminarCampos{
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }


    function eliminar($Lote){
    
        // No existe el lote, proceder con la eliminación
        $query = "DELETE FROM registrodestilado WHERE Lote = :Lote";
        $this->base->insertar_eliminar_actualizar($query, [":Lote" => $Lote]);
        $this->base->cerrar_conexion();
    
        return true; 
    }
}
?> 