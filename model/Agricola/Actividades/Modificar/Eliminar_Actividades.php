<?php
include_once('../../../../config/Crud_bd.php');

class EliminarCampos{
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function eliminar($id, $plantacion){
        
            // Consulta para verificar registros en reporteactividad
            $queryCheck = "SELECT * FROM reporteactividad WHERE NumeracionActividad = :id AND ClavePlantacion = :plantacion";
            $parametrosCheck = [":id" => $id, ":plantacion" => $plantacion];
            
        
            $registros = $this->base->mostrar($queryCheck, $parametrosCheck);
    
            // Si existen registros en reporteactividad, eliminarlos
            if (!empty($registros)) {
                $queryEliminar = "DELETE FROM reporteactividad WHERE NumeracionActividad = :id AND ClavePlantacion = :plantacion";
                $this->base->insertar_eliminar_actualizar($queryEliminar, $parametrosCheck);
            }
    
            // Eliminar la actividad en actividaplantacion
            $queryEliminarActividad = "DELETE FROM actividadplantacion WHERE NumeracionActividad = :id AND ClavePlantacion = :plantacion";
            $this->base->insertar_eliminar_actualizar($queryEliminarActividad, $parametrosCheck);
    
            $this->base->cerrar_conexion();
            return;
        
        
    }
    
}
?>