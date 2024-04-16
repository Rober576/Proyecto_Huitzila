<?php

include_once('../../../../config/Crud_bd.php');

class EliminarCampos{
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function eliminar($id){   
        $queryEliminarRelaciones = "DELETE FROM plantas WHERE NombrePlanta = :id";
        $this->base->insertar_eliminar_actualizar($queryEliminarRelaciones, [":id" => $id]);
        $this->base->cerrar_conexion();
    }
}

// Utiliza $_GET para obtener el valor del ID desde la URL
$id = isset($_GET['id']) ? $_GET['id'] : null;

// Creamos una instancia de la clase EliminarCampos y la utilizamos para eliminar el registro
$base = new EliminarCampos();
$base->instancias();
$base->eliminar($id);

?>
