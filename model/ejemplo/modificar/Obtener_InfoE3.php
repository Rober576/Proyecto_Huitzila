<?php
include_once('../../config/Crud_bd.php');

class ObtenerCampos{
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function obtener($id){
        $query = "SELECT * FROM tabla3 WHERE id = :id";
        $resultado = $this->base->mostrar($query, [":id" => $id]);
        $this->base->cerrar_conexion();
        return $resultado;
    }
}
?>
