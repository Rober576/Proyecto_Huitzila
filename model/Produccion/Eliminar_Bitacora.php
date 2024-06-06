<?php
include_once('../../config/Crud_bd.php');

class EliminarCampos{
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function eliminar($NoGuia){
        
        $query = "DELETE FROM bitacoramezcal WHERE NoGuia = :NoGuia";
        $this->base->insertar_eliminar_actualizar($query, [":NoGuia" => $NoGuia]);
        $this->base->cerrar_conexion();
        
    }
}
?> 