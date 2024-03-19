<?php
include_once('../../config/Crud_bd.php');

class Eliminar_Campos{
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function eliminar($id){

        $query = "DELETE FROM insumos WHERE IDInsumo = :id";
        $this->base->insertar_eliminar_actualizar($query, [":id" => $id]);
        $this->base->cerrar_conexion();

    }
}
?>