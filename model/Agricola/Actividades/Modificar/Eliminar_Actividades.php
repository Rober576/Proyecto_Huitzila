<?php
include_once('../../../../config/Crud_bd.php');

class EliminarCampos{
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function eliminar($id, $plantacion){
        
           
            $parametrosCheck = [":id" => $id, ":plantacion" => $plantacion];
            // Eliminar la actividad en actividaplantacion
            $queryEliminarActividad = "DELETE FROM actividadplantacion WHERE NumeracionActividad = :id AND ClavePlantacion = :plantacion";
            $this->base->insertar_eliminar_actualizar($queryEliminarActividad, $parametrosCheck);
    
            $this->base->cerrar_conexion();
            
        
        
    }
    
}
// Utiliza $_GET para obtener el valor del ID desde la URL
$id = isset($_GET['id']) ? $_GET['id'] : null;
$plantacion = isset($_GET['valorSeleccionado']) ? $_GET['valorSeleccionado'] : null;

// Creamos una instancia de la clase EliminarCampos y la utilizamos para eliminar el registro
$base = new EliminarCampos();
$base->instancias();
$base->eliminar($id,$plantacion);

?>

