<?php
include_once('../../../../config/Crud_bd.php');

class ControladorDatos {
    private $base;

    function __construct() {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function obtenerPredios() {
        $query = "SELECT Nombre FROM predios";
        $result = $this->base->mostrar($query);

        $especies = array();
        foreach ($result as $row) {
            $especies[] = $row['Nombre'];
        }

        return json_encode($especies);
    }

}
?>