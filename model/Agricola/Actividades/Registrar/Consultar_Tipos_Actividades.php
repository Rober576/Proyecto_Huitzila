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

    function obtenerPlagas() {
        $query = "SELECT Nombre FROM plagas";
        $result = $this->base->mostrar($query);

        $Plagas = array();
        foreach ($result as $row) {
            $Plagas[] = $row['Nombre'];
        }

        return json_encode($Plagas);
    }

    function obtenerHerbicidas() {
        $query = "SELECT NombreHerbicidas FROM herbicidas";
        $result = $this->base->mostrar($query);

        $Herbicidas = array();
        foreach ($result as $row) {
            $Herbicidas[] = $row['NombreHerbicidas'];
        }

        return json_encode($Herbicidas);
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