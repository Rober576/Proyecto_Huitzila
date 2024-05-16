<?php
include_once('../../../../config/Crud_bd.php');

class ControladorDatos {
    private $base;

    function __construct() {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function obtenerActividades($plantacion) {
        $query = "SELECT ClavePlantacion FROM plantacionpredio WHERE CodigoArea = '$plantacion'";
        $result = $this->base->mostrar($query);

        $plantaciones = array();
        foreach ($result as $row) {
            $plantaciones[] = $row['ClavePlantacion'];
        }

        return json_encode($plantaciones);
    }



    

    function obtenerPredios() {
        $query = "SELECT Nombre, CodigoArea FROM predios";
        $result = $this->base->mostrar($query);
    
        $Predios = array();
        foreach ($result as $row) {
            $Predios[] = array(
                'Nombre' => $row['Nombre'],
                'CodigoArea' => $row['CodigoArea']
            );
        }
    
        return json_encode($Predios);
    }
    
}
?>