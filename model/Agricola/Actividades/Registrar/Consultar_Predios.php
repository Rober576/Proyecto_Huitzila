<?php
include_once('../../../../config/Crud_bd.php');

class ControladorDatos {
    private $base;

    function __construct() {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function obtenerActividades($plantacion) {
        $query = "SELECT CodigoArea FROM plantacionpredio WHERE ClavePlantacion = '$plantacion'";
        $result = $this->base->mostrar($query); 

        $plantaciones = array();
        foreach ($result as $row) {
            $plantaciones[] = $row['CodigoArea'];
        }

        return json_encode($plantaciones);
    }

    
}
?>