<?php

include_once('../../../../config/Crud_bd.php');

class EliminarCampos{
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function eliminar($id){
      
            // Primero, eliminamos los registros relacionados en la tabla plantacionpredio
            $queryEliminarRelaciones = "DELETE FROM plantacionpredio WHERE ClavePlantacion = :id";
            $this->base->insertar_eliminar_actualizar($queryEliminarRelaciones, [":id" => $id]);
            
            $queryEliminarRelaciones = "DELETE FROM tipoplantas WHERE ClavePlantacion = :id";
            $this->base->insertar_eliminar_actualizar($queryEliminarRelaciones, [":id" => $id]);
            
            // Luego, eliminamos el registro en la tabla plantaciones
            $queryEliminarPlantacion = "DELETE FROM plantaciones WHERE ClavePlantacion = :id";
            $this->base->insertar_eliminar_actualizar($queryEliminarPlantacion, [":id" => $id]);
            
       
        
        // Cerramos la conexión a la base de datos
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
