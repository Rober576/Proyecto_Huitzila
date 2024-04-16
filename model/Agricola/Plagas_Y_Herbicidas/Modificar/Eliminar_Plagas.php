<?php
include_once('../../../../config/Crud_bd.php');

class EliminarCampos{
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function eliminar($id){
        
        $query = "DELETE FROM plagas WHERE Nombre = :id";
        $this->base->insertar_eliminar_actualizar($query, [":id" => $id]);
        $this->base->cerrar_conexion();
        return;
    }
}
?>