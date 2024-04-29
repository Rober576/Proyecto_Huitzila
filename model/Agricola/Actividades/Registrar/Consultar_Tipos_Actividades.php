<?php
include_once('../../../../config/Crud_bd.php');

class ControladorDatos {
    private $base;

    function __construct() {
        $this->base = new Crud_bd();
        $this->base->conexion_bd();
    }

    function obtenerActividades() {
        $query = "SELECT Actividad FROM actividadespredios";
        $result = $this->base->mostrar($query);

        $actividades = array();
        foreach ($result as $row) {
            $actividades[] = $row['Actividad'];
        }

        return json_encode($actividades);
    }
}
?>