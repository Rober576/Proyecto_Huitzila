<?php
include_once('../../../../config/Crud_bd.php');

class ControladorDatos {
    private $base;

    function __construct() {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function obtenerPredios() {
        $query = "SELECT CodigoArea, Nombre FROM predios";
        $result = $this->base->mostrar($query);
    
        $predios = array();
        foreach ($result as $row) {
            $predio = array(
                'ClaveArea' => $row['CodigoArea'],
                'Nombre' => $row['Nombre']
            );
            $predios[] = $predio;
        }
    
        return json_encode($predios);
    }

}
?>