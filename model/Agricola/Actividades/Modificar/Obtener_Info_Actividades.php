<?php
include_once('../../../../config/Crud_bd.php');

class ObtenerCampos{
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }


    public function obtener($id, $plantacion) {
        $query = "SELECT * FROM actividadplantacion WHERE NumeracionActividad= :id AND ClavePlantacion = :plantacion";
        $resultado = $this->base->mostrar($query, [
            ":id" => $id,
            ":plantacion" => $plantacion
        ]);
        $this->base->cerrar_conexion();
        
        return $resultado;
        
    }
    
}

class ObtenerCampos2{
    private $base;

    function instancias(){
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }


    public function obtener($id, $plantacion) {
        $query = "SELECT * FROM reporteactividad WHERE NumeracionActividad= :id AND ClavePlantacion = :plantacion";
        $resultado = $this->base->mostrar($query, [
            ":id" => $id,
            ":plantacion" => $plantacion
        ]);
        $this->base->cerrar_conexion();
        
        return $resultado;
        
    }
    
}
?>
